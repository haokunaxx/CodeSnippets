type TreeNode = {
  id: number;
  pid: number;
  name: string;
  children?: Array<TreeNode>
}

const arr: Array<TreeNode> = [
  { id: 4, pid: 2, name: 'd' },
  { id: 1, pid: 0, name: 'a' },
  { id: 3, pid: 1, name: 'c' },
  { id: 5, pid: 0, name: 'e' },
  { id: 7, pid: 6, name: 'f' },
  { id: 6, pid: 5, name: 'f' },
  { id: 9, pid: 1, name: 'h' },
  { id: 8, pid: 1, name: 'g' },
  { id: 2, pid: 0, name: 'b' },
]

function cloneDeep(target: [] | {}) {
  const toStr = Object.prototype.toString
  let res = toStr.call(target) === '[object Object]' ? {} : []
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      const valTemp = target[key]
      res[key] = typeof valTemp === 'object' && valTemp !== null ? cloneDeep(valTemp) : valTemp
    }
  }
  return res
}

const toTree = (treeArr: Array<TreeNode>, rootId: number | null = null) => {
  const map = new Map<number, TreeNode>(),
    res: Array<TreeNode> = []
  treeArr.forEach(node => map.set(node.id, node))
  treeArr.forEach(node => {
    let { pid } = node,
      parent: TreeNode | undefined;
    if (pid === rootId) {
      res.push(node)
      return
    }
    parent = map.get(node.pid)
    if (parent) {
      parent.children ? parent.children.push(node) : (parent.children = [node])
    }
  })
  return res
}

const toArray = (tree: Array<TreeNode>): Array<TreeNode> => {
  return tree.reduce((prev: Array<TreeNode>, next: TreeNode) => {
    if (next.children) {
      prev.push(...toArray(next.children as Array<TreeNode>))
      delete next['children']
      prev.push(next)
    } else {
      prev.push(next)
    }
    return prev
  }, [] as Array<TreeNode>)
}

const treeTemp = toTree(arr, 0)

const flattenTreeTemp = toArray(cloneDeep(treeTemp) as TreeNode[])
console.log(arr, arr.length)
console.log(treeTemp)
console.log(flattenTreeTemp)


