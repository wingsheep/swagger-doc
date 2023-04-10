import type * as vscode from 'vscode'
import { activateTagTree } from './activate/registerTagTree'
import { activateManager } from './activate/registerManager'
import { activatePicker } from './activate/registerPicker'
export async function activate(context: vscode.ExtensionContext) {
  activateTagTree(context)
  activateManager(context)
  activatePicker(context)
}

export function deactivate() {

}
