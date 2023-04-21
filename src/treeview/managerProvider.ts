import * as vscode from 'vscode'
import { ThemeIcon } from 'vscode'
import { v4 as uuid } from 'uuid'

export interface SwaggerItem {
  id: string
  label: string
  alias: string
  selected: boolean
  children?: SwaggerItem[]
  parent?: SwaggerItem
}

export class SwaggerProvider implements vscode.TreeDataProvider<SwaggerItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<SwaggerItem | undefined>()
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event

  private _rootItem: SwaggerItem = {
    id: 'root',
    label: 'Swagger List',
    alias: 'Swagger List',
    selected: false,
    children: [],
  }

  constructor(private readonly _context: vscode.ExtensionContext) {}

  getTreeItem(element: SwaggerItem): vscode.TreeItem {
    const treeItem = new vscode.TreeItem(element.alias, element.children ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.None)
    treeItem.id = element.id
    treeItem.iconPath = element.selected ? new ThemeIcon('check') : new ThemeIcon('remote')
    treeItem.tooltip = element.label
    treeItem.command = {
      title: 'Toggle Swagger',
      command: 'swaggerTag.loadDocData',
      arguments: [element.label],
    }
    treeItem.contextValue = element.selected ? 'selectedSwagger' : 'unSelectedSwagger'

    return treeItem
  }

  getChildren(element?: SwaggerItem): Thenable<SwaggerItem[]> {
    if (!element)
      return Promise.resolve(this._rootItem.children || [])

    return Promise.resolve(element.children || [])
  }

  async addSwaggerItem({ label, alias }, parent?: SwaggerItem): Promise<void> {
    const swaggerItem: SwaggerItem = {
      id: uuid(),
      label,
      alias,
      selected: false,
      parent,
    }

    if (!parent)
      this._rootItem?.children?.push(swaggerItem)

    else
      parent.children?.push(swaggerItem)

    await this.saveSwaggerList()
  }

  async editSwaggerItem(swaggerItem: SwaggerItem, newAlias: string): Promise<void> {
    const findItem = this._rootItem.children?.find(item => item.id === swaggerItem.id) || swaggerItem
    findItem.alias = newAlias
    this._onDidChangeTreeData.fire(findItem)
    await this.saveSwaggerList()
  }

  async deleteSwaggerItem(swaggerItem: SwaggerItem): Promise<void> {
    this._rootItem.children = this._rootItem?.children?.filter(swagger => swagger.id !== swaggerItem.id)
    await this.saveSwaggerList()
  }

  async toggleSwaggerItem(swaggerItem: SwaggerItem): Promise<void> {
    swaggerItem.selected = true
    this._onDidChangeTreeData.fire(swaggerItem)
    await this.saveSwaggerList()
    this.loadSwaggerList()
  }

  async saveSwaggerList(): Promise<void> {
    const swaggerList = JSON.stringify(this._rootItem.children)
    await this._context.globalState.update('swaggerList', swaggerList)
    this.loadSwaggerList()
  }

  async loadSwaggerList(): Promise<SwaggerItem[]> {
    const swaggerList = this._context.globalState.get<string>('swaggerList')
    if (swaggerList) {
      const items = JSON.parse(swaggerList) as SwaggerItem[]
      this._rootItem.children = items || []
      this._onDidChangeTreeData.fire()
      return items
    }
    return []
  }
}
