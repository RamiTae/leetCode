// Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  } else if (!list1 && list2) {
    return list2;
  } else if (!list2 && list1) {
    return list1;
  }

  const nodeVal1: number = list1.val;
  const nodeVal2: number = list2.val;

  if (nodeVal1 < nodeVal2) {
    return new ListNode(nodeVal1, mergeTwoLists(list1.next, list2));
  } else {
    return new ListNode(nodeVal2, mergeTwoLists(list1, list2.next));
  }
}
