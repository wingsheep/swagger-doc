import axios from 'axios'

export async function getSwaggerJson() {
  const { status, data } = await axios.get('https://dev-apisix.hgj.com/sonny-vehicle-account-book/v2/api-docs')
  if (status === 200) {
    const { paths, tags } = data
    const apiTreeList: any[] = []
    tags.forEach((tag: any) => {
      const treeItem = {
        name: tag.name,
        description: '',
        children: [] as any,
      }
      Object.keys(paths).forEach((path) => {
        const pathValue = paths[path]
        Object.keys(pathValue).forEach((method) => {
          const methodValue = pathValue[method]
          if (methodValue.tags.includes(tag.name)) {
            treeItem.children.push({
              name: `${method.toLocaleUpperCase()} ${methodValue.summary}`,
              id: methodValue.operationId,
              api: {
                method,
                tags: methodValue.tags,
                path,
              },
            })
          }
        })
      })
      treeItem.description = `(${treeItem.children.length})`
      apiTreeList.push(treeItem)
    })
    return apiTreeList
  }
  return status
}
