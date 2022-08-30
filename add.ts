// function ListNode(){
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

interface NodeType {
  val: number;
  next: NodeType
}

class ListNode {
  constructor(public val: number = 0, public next: NodeType = null) { }
}

const addTwoNumbers = (l1: NodeType, l2: NodeType): NodeType => {
  let res: NodeType,
    addFlag = false,
    nodeTemp: NodeType,
    sum

  while (l1 || l2) {
    sum = 0
    if (!nodeTemp) {
      res = new ListNode()
      nodeTemp = res
    } else {
      nodeTemp.next = new ListNode()
      nodeTemp = nodeTemp.next
    }
    if (l1 && l2) {
      sum = l1.val + l2.val
    } else if (!l1) {
      sum += l2.val
    } else {
      sum += l1.val
    }
    addFlag && (sum += 1) && (addFlag = false)

    sum >= 10 && (addFlag = true) && (sum = sum - 10)
    nodeTemp.val = sum
    l1 = l1.next
    l2 = l2.next
  }
  addFlag && (nodeTemp.next = new ListNode(1))
  return res
}


console.log(addTwoNumbers({
  val: 2, next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}, {
  val: 5, next: {
    val: 6,
    next: {
      val: 6,
      next: null
    }
  }
}))