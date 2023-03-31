import * as vscode from 'vscode'
import { SwaggerApi } from './swaggerApi'
import { TagTreeProvider } from './tagTreeProvider'
// import { DocWebviewProvider } from './docWebviewProvider'
import { SwaggerPreviewPanel, getWebviewOptions } from './panels/previewPanel'
export async function activate(context: vscode.ExtensionContext) {
  // const provider = new DocWebviewProvider(context.extensionUri)

  // context.subscriptions.push(
  //   vscode.window.registerWebviewViewProvider(DocWebviewProvider.viewType, provider),
  // )

  context.subscriptions.push(
    vscode.commands.registerCommand('swaggerDoc.doRefactor', () => {
      if (SwaggerPreviewPanel.currentPanel)
        SwaggerPreviewPanel.currentPanel.doRefactor()
    }),
  )

  if (vscode.window.registerWebviewPanelSerializer) {
    // Make sure we register a serializer in activation event
    vscode.window.registerWebviewPanelSerializer(SwaggerPreviewPanel.viewType, {
      async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any) {
        const { webviewPanelKey, serializerData } = state
        // Reset the webview options so we use latest uri for `localResourceRoots`.
        webviewPanel.webview.options = getWebviewOptions(context.extensionUri)
        SwaggerPreviewPanel.revive(webviewPanel, webviewPanelKey, context.extensionUri, serializerData)
      },
    })
  }

  await SwaggerApi.getDocJson('https://beta-apisix.hgj.com/sonny-vehicle-account-book/v2/api-docs')
  const tagTreeProvider = new TagTreeProvider(SwaggerApi.tagTree)
  vscode.window.registerTreeDataProvider('swaggerDoc', tagTreeProvider)
  vscode.window.showInformationMessage('Hello vscode')
  context.subscriptions.push(
    vscode.commands.registerCommand('swaggerDoc.preview', (title, api) => {
      const { path, method } = api
      const detailData = SwaggerApi.getApiDetail(path, method)
      SwaggerPreviewPanel.createOrShow(context.extensionUri, title, { detailData, path, method })
    }),
  )
}

export function deactivate() {

}
