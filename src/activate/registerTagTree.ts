import * as vscode from 'vscode'
import { SwaggerApi } from '../api/swaggerApi'
import { generateCode } from '../api/generateCode'
import { TagTreeProvider } from '../treeview/tagTreeProvider'
import { SwaggerPreviewPanel, getWebviewOptions } from '../panels/previewPanel'
export async function activateTagTree(context: vscode.ExtensionContext) {
  if (vscode.window.registerWebviewPanelSerializer) {
    // Make sure we register a serializer in activation event
    vscode.window.registerWebviewPanelSerializer(SwaggerPreviewPanel.viewType, {
      async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any) {
        const { webviewPanelKey, serializerData } = state
        // Reset the webview options so we use latest uri for `localResourceRoots`.
        const data = serializerData ? JSON.parse(serializerData) : null
        webviewPanel.webview.options = getWebviewOptions(context.extensionUri)
        SwaggerPreviewPanel.revive(webviewPanel, webviewPanelKey, context.extensionUri, data)
      },
    })
  }
  const storageSwaggerUrl = context.globalState.get<string>('swaggerUrl')
  if (storageSwaggerUrl)
    await SwaggerApi.getDocJson(storageSwaggerUrl)

  const tagTreeProvider = new TagTreeProvider(SwaggerApi.tagTree)
  const tagTreeView = vscode.window.createTreeView('swaggerTag', {
    treeDataProvider: tagTreeProvider,
    showCollapseAll: true, // 添加 showCollapseAll 选项
  })

  const loadDocDataCommand = vscode.commands.registerCommand('swaggerTag.loadDocData', async (api) => {
    await context.globalState.update('swaggerUrl', api)
    await SwaggerApi.getDocJson(api)
    tagTreeProvider.loadSwaggerList(SwaggerApi.tagTree)
  })

  const refreshCommand = vscode.commands.registerCommand('swaggerTag.refresh', () => tagTreeProvider.refresh())

  const refactorCommand = vscode.commands.registerCommand('swaggerTag.doRefactor', () => {
    if (SwaggerPreviewPanel.currentPanel)
      SwaggerPreviewPanel.currentPanel.doRefactor()
  })

  const previewCommand = vscode.commands.registerCommand('swaggerTag.preview', (title, api) => {
    const { path, method } = api
    const detailData = SwaggerApi.getApiDetail(path, method)
    SwaggerPreviewPanel.createOrShow(context.extensionUri, title, { detailData, path, method })
  })

  const generateTsCommand = vscode.commands.registerCommand('swaggerTag.generateTs', async () => {
    await vscode.window.showQuickPick(['TypeScript', 'JavaScript'], {
      placeHolder: 'Select code language',
    }).then(async (selectedItem) => {
      if (selectedItem) {
        const toJs = selectedItem === 'JavaScript'
        const currentFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath
        const options: vscode.OpenDialogOptions = {
          canSelectMany: false,
          openLabel: 'Select folder',
          canSelectFolders: true,
          canSelectFiles: false,
          defaultUri: currentFolder ? vscode.Uri.file(currentFolder) : undefined,
        }

        const result = await vscode.window.showOpenDialog(options)
        if (result && result.length > 0) {
          // 用户选择了文件夹
          const folderPath = result[0].fsPath
          generateCode(SwaggerApi.docJson, folderPath, toJs)
          console.log('Selected folder: ', folderPath, toJs)
        }
        else {
          // 用户取消了选择
          console.log('No folder selected.')
        }
      }
    })
  })

  const searchCommand = vscode.commands.registerCommand('swaggerTag.search', async () => {
    const tagList = SwaggerApi.tagList || []
    let pickerList = [] as vscode.QuickPickItem[]
    if (tagList) {
      pickerList = tagList.map((item) => {
        return {
          ...item,
          description: item.api.path,
        }
      }) as vscode.QuickPickItem[]
    }
    await vscode.window.showQuickPick(pickerList, {
      placeHolder: 'Select one to preview',
    }).then((selectedItem) => {
      const { label, api } = selectedItem as any
      if (label)
        vscode.commands.executeCommand('swaggerTag.preview', label, api)
    })
  })
  context.subscriptions.push(tagTreeView, loadDocDataCommand, refreshCommand, refactorCommand, previewCommand, searchCommand, generateTsCommand)
}
