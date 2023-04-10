import * as vscode from 'vscode'
import { getUri } from '../utils/getUri'
import { getNonce } from '../utils/getNonce'

export function getWebviewOptions(extensionUri: vscode.Uri): vscode.WebviewOptions {
  return {
    // Enable javascript in the webview
    enableScripts: true,

    // Restrict the webview to only load resources from the `out` and `webview-ui/build` directories
    localResourceRoots: [
      vscode.Uri.joinPath(extensionUri, 'out'),
      vscode.Uri.joinPath(extensionUri, 'webview-ui/build'),
    ],
  }
}

/**
 * Manages swagger preview webview panels
 */
export class SwaggerPreviewPanel {
  // Track the currently panel. Only allow a single panel to exist at a time.
  public static currentPanel: SwaggerPreviewPanel | undefined
  public static webviewPanels: Map<string, vscode.WebviewPanel> = new Map()

  public static readonly viewType = 'swaggerTag.preview'

  private readonly _webviewPanelKey: string
  private readonly _panel: vscode.WebviewPanel
  private readonly _extensionUri: vscode.Uri
  private readonly _data: object
  private _disposables: vscode.Disposable[] = []

  public static createOrShow(extensionUri: vscode.Uri, title: string, data: object) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined

    const webviewPanelKey = `${SwaggerPreviewPanel.viewType}.${title}`
    if (SwaggerPreviewPanel.webviewPanels.has(webviewPanelKey)) {
      SwaggerPreviewPanel.webviewPanels.get(webviewPanelKey)!.reveal()
      return
    }
    // Otherwise, create a new panel.
    const panel = vscode.window.createWebviewPanel(
      SwaggerPreviewPanel.viewType,
      title,
      column || vscode.ViewColumn.One,
      getWebviewOptions(extensionUri),
    )

    SwaggerPreviewPanel.currentPanel = new SwaggerPreviewPanel(panel, webviewPanelKey, extensionUri, data)
    SwaggerPreviewPanel.webviewPanels.set(webviewPanelKey, panel)
  }

  public static revive(panel: vscode.WebviewPanel, webviewPanelKey: string, extensionUri: vscode.Uri, data: object) {
    SwaggerPreviewPanel.currentPanel = new SwaggerPreviewPanel(panel, webviewPanelKey, extensionUri, data)
    SwaggerPreviewPanel.webviewPanels.set(webviewPanelKey, panel)
  }

  private constructor(panel: vscode.WebviewPanel, webviewPanelKey: string, extensionUri: vscode.Uri, data: object) {
    this._panel = panel
    this._webviewPanelKey = webviewPanelKey
    this._extensionUri = extensionUri
    this._data = data

    // Set the webview's initial html content
    this._update()

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables)

    // Update the content based on view changes
    // this._panel.onDidChangeViewState(
    //   () => {
    //     if (this._panel.visible)
    //       this._update()
    //   },
    //   null,
    //   this._disposables,
    // )

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case 'alert':
            vscode.window.showErrorMessage(message.text)
        }
      },
      null,
      this._disposables,
    )
  }

  public doRefactor() {
    // Send a message to the webview webview.
    // You can send any JSON serializable data.
    this._panel.webview.postMessage({ command: 'refactor' })
  }

  public dispose() {
    SwaggerPreviewPanel.currentPanel = undefined
    SwaggerPreviewPanel.webviewPanels.delete(this._webviewPanelKey)
    // Clean up our resources
    this._panel.dispose()

    while (this._disposables.length) {
      const x = this._disposables.pop()
      if (x)
        x.dispose()
    }
  }

  private _update() {
    const webview = this._panel.webview
    this._updateForDoc(webview, this._data)
  }

  private _updateForDoc(webview: vscode.Webview, data: Object) {
    this._panel.webview.html = this._getWebviewContent(webview)
    console.log('setMessage', data)
    this._panel.webview.postMessage({
      command: 'setMessage',
      data: {
        previewData: data,
        webviewPanelKey: this._webviewPanelKey,
      },
    })
  }

  private _getWebviewContent(webview: vscode.Webview) {
    // The CSS file from the Vue build output
    const stylesUri = getUri(webview, this._extensionUri, ['webview-ui', 'build', 'assets', 'index.css'])
    // The JS file from the Vue build output
    const scriptUri = getUri(webview, this._extensionUri, ['webview-ui', 'build', 'assets', 'index.js'])

    const nonce = getNonce()

    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
    return /* html */ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
          <link rel="stylesheet" type="text/css" nonce="${nonce}" href="${stylesUri}">
          <title>Swagger Doc</title>
        </head>
        <body>
          <div id="app"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `
  }
}
