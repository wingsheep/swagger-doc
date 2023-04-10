import * as path from 'path'
import * as vscode from 'vscode'

export class TagTreeProvider implements vscode.TreeDataProvider<TagItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<TagItem | undefined | void> = new vscode.EventEmitter<TagItem | undefined | void>()
  readonly onDidChangeTreeData: vscode.Event<TagItem | undefined | void> = this._onDidChangeTreeData.event

  constructor(private treeList: any[] | undefined) {
  }

  refresh(): void {
    this._onDidChangeTreeData.fire()
  }

  getTreeItem(element: TagItem): vscode.TreeItem {
    return element
  }

  getChildren(element?: TagItem): Thenable<TagItem[]> {
    if (!this.treeList) {
      vscode.window.showInformationMessage('No data with the current URL')
      return Promise.resolve([])
    }

    if (element) {
      return Promise.resolve(this.getTagItemData(element.label))
    }
    else {
      if (this.treeList && this.treeList.length) {
        return Promise.resolve(this.getTagItemData(''))
      }
      else {
        vscode.window.showInformationMessage('No data in this tag')
        return Promise.resolve([])
      }
    }
  }

  private getTagItemData(name: string | undefined): TagItem[] {
    const treeData: any[] = name ? this.treeList?.find(item => item.name === name)?.children : this.treeList
    if (this.treeList && this.treeList.length) {
      const toDep = (tagName: string, description: string, children: any[], api: object): TagItem => {
        if (children && children.length) {
          const tips = `${tagName}${description}`
          return new TagItem(tagName, description, tips, 'folder.svg', vscode.TreeItemCollapsibleState.Collapsed)
        }
        else {
          const tagList = tagName.split(' ')
          const label = tagList[1]
          const icon = tagList[0] ? `${tagList[0]}.svg` : 'null.svg'
          return new TagItem(label, description, tagName, icon, vscode.TreeItemCollapsibleState.None, {
            command: 'swaggerTag.preview',
            title: '',
            arguments: [tagName, api],
          })
        }
      }

      const tagData = treeData
        ? treeData.map(dep => toDep(dep.name, dep.description, dep.children, dep.api))
        : []
      return tagData
    }
    else {
      return []
    }
  }

  async loadSwaggerList(treeList): Promise<void> {
    this.treeList = treeList
    this._onDidChangeTreeData.fire()
  }
}

export class TagItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private readonly desc: string,
    private readonly tips: string,
    private readonly icon: string = 'folder.svg',
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command,
  ) {
    super(label, collapsibleState)

    this.description = this.desc
    this.tooltip = this.tips
  }

  iconPath = {
    light: path.join(__filename, '..', '..', 'resources', 'light', this.icon),
    dark: path.join(__filename, '..', '..', 'resources', 'dark', this.icon),
  }

  contextValue = 'tags'
}
