function compareLinkedLists( headA, headB) {
  if (!headA && !headB) { return 1; }
  if (!headA && headB) { return 0; }
  if (headA && !headB) { return 0; }
  if (headA.data != headB.data) { return 0; }
  
  return compareLinkedLists(headA.next, headB.next);
}
