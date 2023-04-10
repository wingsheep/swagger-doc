import { window } from 'vscode'
import type { ExtensionContext } from 'vscode'
import * as vscode from 'vscode'
import type { SwaggerItem } from '../treeview/managerProvider'

/**
 * Shows a pick list using window.showQuickPick().
 */
export async function showQuickPick(context: ExtensionContext) {
  const swaggerListString = context.globalState.get<string>('swaggerList')
  let pickerList = [] as string[]
  let swaggerList = [] as SwaggerItem[]
  if (swaggerListString) {
    swaggerList = JSON.parse(swaggerListString)
    pickerList = swaggerList.map(item => item.alias) as string[]
  }
  if (pickerList && !pickerList.length) {
    const confirmation = await vscode.window.showInformationMessage('No data yet, Do you want to add one?', { modal: true }, 'Add')
    if (confirmation !== 'Add')
      return
    return await vscode.commands.executeCommand('swaggerManager.add')
  }
  let i = 0
  await window.showQuickPick(pickerList, {
    placeHolder: 'Please select one',
    onDidSelectItem: () => ++i,
  })
  const label = swaggerList[i - 1].label
  if (label)
    await vscode.commands.executeCommand('swaggerTag.loadDocData', label)
}
