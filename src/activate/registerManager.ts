import * as vscode from 'vscode'
import type { SwaggerItem } from '../treeview/managerProvider'
import { SwaggerProvider } from '../treeview/managerProvider'
import { isUrl } from '../utils/isUrl'
export function activateManager(context: vscode.ExtensionContext) {
  const swaggerProvider = new SwaggerProvider(context)
  const swaggerManagerView = vscode.window.createTreeView('swaggerManager', { treeDataProvider: swaggerProvider, canSelectMany: false })
  context.subscriptions.push(swaggerManagerView)
  swaggerProvider.loadSwaggerList()
  vscode.commands.registerCommand('swaggerManager.add', async (node: SwaggerItem | undefined) => {
    const label = await vscode.window.showInputBox({ prompt: 'Enter a url for the new swagger json' })
    if (!label)
      return
    if (!isUrl(label))
      return vscode.window.showWarningMessage('Please enter the correct url')
    const list = await swaggerProvider.loadSwaggerList()
    const index = list.findIndex(item => item?.label === label)
    if (index > -1)
      return vscode.window.showWarningMessage('The url has exist')
    const regex = /https?:\/\/.*?\/(.*?)\//
    const match = label.match(regex)
    const projectName = (match && match[1]) || ''
    const alias = await vscode.window.showInputBox({ prompt: 'Enter a alias for the current item', value: projectName })
    if (!alias)
      return
    await swaggerProvider.addSwaggerItem({
      label,
      alias,
    }, node)
    await vscode.commands.executeCommand('swaggerTag.loadDocData', label)
  })

  vscode.commands.registerCommand('swaggerManager.edit', async (swaggerItem: SwaggerItem) => {
    const newAlias = await vscode.window.showInputBox({ prompt: 'Enter a new alias for the current item', value: swaggerItem.alias })
    if (!newAlias)
      return

    await swaggerProvider.editSwaggerItem(swaggerItem, newAlias)
  })

  vscode.commands.registerCommand('swaggerManager.delete', async (swaggerItem: SwaggerItem) => {
    const confirmation = await vscode.window.showWarningMessage(`Are you sure you want to delete "${swaggerItem.label}"?`, { modal: true }, 'Delete')
    if (confirmation !== 'Delete')
      return

    await swaggerProvider.deleteSwaggerItem(swaggerItem)
  })

  vscode.commands.registerCommand('swaggerManager.toggle', async (swaggerItem: SwaggerItem) => {
    await swaggerProvider.toggleSwaggerItem(swaggerItem)
  })
  context.subscriptions.push(
    vscode.commands.registerCommand('swaggerManager.refresh', () => swaggerProvider.loadSwaggerList()),
  )

  vscode.commands.registerCommand('swaggerManager.open', async () => {
    // Swagger...
    // const swaggerList = context.globalState.get<string>('swaggerList')
    // if (!swaggerList)
    //   return

    // const tempFile = (await vscode.workspace.fs.writeFile(
    //   vscode.Uri.parse('untitled:' + 'Swagger List.json'),
    //   new Uint8Array(Buffer.from(swaggerList)),
    // )) as unknown as vscode.TextDocument

    // await vscode.window.showTextDocument(tempFile, { viewColumn: vscode.ViewColumn.Active })
  })
}
