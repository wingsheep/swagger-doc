import * as vscode from 'vscode'
import { getSwaggerJson } from './fetchData'
import { TagTreeProvider } from './tagTreeProvider'
export async function activate(context: vscode.ExtensionContext) {
  // const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
  //   ? vscode.workspace.workspaceFolders[0].uri.fsPath
  //   : undefined
  const treeList: any = await getSwaggerJson()

  const nodeDependenciesProvider = new TagTreeProvider(treeList)
  vscode.window.registerTreeDataProvider('swaggerDoc', nodeDependenciesProvider)
  vscode.window.showInformationMessage('Hello vscode')
  const disposable = vscode.commands.registerCommand('helloword.helloWorld', () => {
    vscode.window.showErrorMessage(new Date().toLocaleDateString())
    // window.showInformationMessage('Hello World from HelloWord!')
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {

}
