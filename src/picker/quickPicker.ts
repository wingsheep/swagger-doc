import { window } from 'vscode'
import type { ExtensionContext } from 'vscode'
import * as vscode from 'vscode'
import type { SwaggerItem } from '../treeview/managerProvider'

/**
 * Shows a pick list using window.showQuickPick().
 */
export async function showQuickPick(context: ExtensionContext, callback) {
  const swaggerListString = context.globalState.get<string>('swaggerList')
  let pickerList = [] as vscode.QuickPickItem[]
  let swaggerList = [] as SwaggerItem[]
  if (swaggerListString) {
    swaggerList = JSON.parse(swaggerListString)
    pickerList = swaggerList.map((item) => {
      return {
        label: item.alias,
        id: item.id,
        description: item.label,
      }
    }) as vscode.QuickPickItem[]
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
  }).then((selectedItem) => {
    if (selectedItem?.label)
      callback(selectedItem)
  })
}
