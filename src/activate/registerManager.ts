import * as vscode from 'vscode'
import type { SwaggerItem } from '../treeview/managerProvider'
import { SwaggerProvider } from '../treeview/managerProvider'
import { showQuickPick } from '../picker/quickPicker'

import { isUrl } from '../utils/isUrl'
export function activateManager(context: vscode.ExtensionContext) {
  const swaggerProvider = new SwaggerProvider(context)
  const swaggerManagerView = vscode.window.createTreeView('swaggerManager', { treeDataProvider: swaggerProvider, canSelectMany: false })
  swaggerProvider.loadSwaggerList()
  const addCommand = vscode.commands.registerCommand('swaggerManager.add', async (node: SwaggerItem | undefined) => {
    const projectUrl = await vscode.window.showInputBox({ prompt: 'Enter a url for the new swagger json' })
    if (!projectUrl)
      return
    if (!isUrl(projectUrl))
      return vscode.window.showWarningMessage('Please enter the correct url')
    const list = await swaggerProvider.loadSwaggerList()
    const index = list.findIndex(item => item?.label === projectUrl)
    if (index > -1)
      return vscode.window.showWarningMessage('The project url has exist')
    const regex = /https?:\/\/.*?\/(.*?)\//
    const match = projectUrl.match(regex)
    const projectName = (match && match[1]) || ''
    const alias = await vscode.window.showInputBox({ prompt: 'Enter a alias for the current project', value: projectName })
    if (!alias)
      return
    await swaggerProvider.addSwaggerItem({
      label: projectUrl,
      alias,
    }, node)
    await vscode.commands.executeCommand('swaggerTag.loadDocData', projectUrl)
  })

  const editCommand = vscode.commands.registerCommand('swaggerManager.edit', async (swaggerItem: SwaggerItem) => {
    const alias = swaggerItem?.alias
    if (!alias) {
      await showQuickPick(context, async (item) => {
        const newAlias = await vscode.window.showInputBox({ prompt: 'Enter a new alias for the selected project', value: item.alias })
        if (!newAlias)
          return
        await swaggerProvider.editSwaggerItem(item, newAlias)
      })
    }
    else {
      const newAlias = await vscode.window.showInputBox({ prompt: 'Enter a new alias for the current project', value: alias })
      if (!newAlias)
        return
      await swaggerProvider.editSwaggerItem(swaggerItem, newAlias)
    }
  })

  const deleteCommand = vscode.commands.registerCommand('swaggerManager.delete', async (swaggerItem: SwaggerItem) => {
    const alias = swaggerItem?.alias
    if (!alias) {
      await showQuickPick(context, async (item) => {
        const confirmation = await vscode.window.showWarningMessage(`Are you sure you want to delete "${item.label}(${item.description})"?`, { modal: true }, 'Delete')
        if (confirmation !== 'Delete')
          return
        await swaggerProvider.deleteSwaggerItem(item)
      })
    }
    else {
      const confirmation = await vscode.window.showWarningMessage(`Are you sure you want to delete "${swaggerItem.alias}(${swaggerItem.label})"?`, { modal: true }, 'Delete')
      if (confirmation !== 'Delete')
        return
      await swaggerProvider.deleteSwaggerItem(swaggerItem)
    }
  })

  const toggleCommand = vscode.commands.registerCommand('swaggerManager.toggle', async (swaggerItem: SwaggerItem) => {
    await swaggerProvider.toggleSwaggerItem(swaggerItem)
  })

  const refreshCommand = vscode.commands.registerCommand('swaggerManager.refresh', () => swaggerProvider.loadSwaggerList())

  context.subscriptions.push(swaggerManagerView, addCommand, editCommand, deleteCommand, toggleCommand, refreshCommand)
}
