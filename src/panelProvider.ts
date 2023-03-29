import * as vscode from 'vscode'

export function getWebviewOptions(extensionUri: vscode.Uri): vscode.WebviewOptions {
  return {
    // Enable javascript in the webview
    enableScripts: true,

    // And restrict the webview to only loading content from our extension's `media` directory.
    localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
  }
}

/**
 * Manages swagger preview webview panels
 */
export class SwaggerPreviewPanel {
  // Track the currently panel. Only allow a single panel to exist at a time.
  public static currentPanel: SwaggerPreviewPanel | undefined
  public static webviewPanels: Map<string, vscode.WebviewPanel> = new Map()

  public static readonly viewType = 'swaggerDoc.preview'

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
    this._panel.onDidChangeViewState(
      () => {
        if (this._panel.visible)
          this._update()
      },
      null,
      this._disposables,
    )

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
    this._panel.webview.html = this._getHtmlForWebview(webview, data)
  }

  private _getHtmlForWebview(webview: vscode.Webview, data: Object) {
    // Local path to main script run in the webview
    const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js')

    // And the uri we use to load this script in the webview
    const scriptUri = webview.asWebviewUri(scriptPathOnDisk)

    // Local path to css styles
    const styleResetPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css')
    const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css')

    // Uri to load styles into webview
    const stylesResetUri = webview.asWebviewUri(styleResetPath)
    const stylesMainUri = webview.asWebviewUri(stylesPathMainPath)

    // Use a nonce to only allow specific scripts to be run
    const nonce = getNonce()

    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">

          <!--
            Use a content security policy to only allow loading images from https or from our extension directory,
            and only allow scripts that have a specific nonce.
          -->
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">

          <meta name="viewport" content="width=device-width, initial-scale=1.0">

          <link href="${stylesResetUri}" rel="stylesheet">
          <link href="${stylesMainUri}" rel="stylesheet">

          <title>swagger doc preview</title>
        </head>
        <body>
          <textarea>${JSON.stringify(data)}</textarea>
          <h1 id="lines-of-code-counter">0</h1>
          <script nonce="${nonce}" src="${scriptUri}"></script>
        </body>
        </html>`
  }
}

function getNonce() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 32; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
