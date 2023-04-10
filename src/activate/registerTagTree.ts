import * as vscode from 'vscode'
import { SwaggerApi } from '../api/swaggerApi'
import { TagTreeProvider } from '../treeview/tagTreeProvider'
import { SwaggerPreviewPanel, getWebviewOptions } from '../panels/previewPanel'
export async function activateTagTree(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('swaggerTag.doRefactor', () => {
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
        console.log(state, 23)
        const data = serializerData ? JSON.parse(serializerData) : null
        webviewPanel.webview.options = getWebviewOptions(context.extensionUri)
        SwaggerPreviewPanel.revive(webviewPanel, webviewPanelKey, context.extensionUri, data)
      },
    })
  }
  const tagTreeProvider = new TagTreeProvider(SwaggerApi.tagTree)
  vscode.window.registerTreeDataProvider('swaggerTag', tagTreeProvider)
  context.subscriptions.push(
    vscode.commands.registerCommand('swaggerTag.loadDocData', async (api) => {
      await SwaggerApi.getDocJson(api)
      tagTreeProvider.loadSwaggerList(SwaggerApi.tagTree)
    }),
  )
  vscode.commands.registerCommand('swaggerTag.refresh', () =>
    tagTreeProvider.refresh(),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('swaggerTag.preview', (title, api) => {
      const { path, method } = api
      const detailData = SwaggerApi.getApiDetail(path, method)
      SwaggerPreviewPanel.createOrShow(context.extensionUri, title, { detailData, path, method })
    }),
  )
}
