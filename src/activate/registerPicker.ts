import type { ExtensionContext } from 'vscode'
import { commands } from 'vscode'
import * as vscode from 'vscode'
import { showQuickPick } from '../picker/quickPicker'

export function activatePicker(context: ExtensionContext) {
  context.subscriptions.push(commands.registerCommand('swaggerManager.search', async () => {
    showQuickPick(context, (selectedItem) => {
      vscode.commands.executeCommand('swaggerTag.loadDocData', selectedItem.description)
    })
  }))
}
