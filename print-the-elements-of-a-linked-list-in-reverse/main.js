function reversePrint(head) {
  if (!head) { return; }
  if (head.next) {
    reversePrint(head.next);
  }
  console.log(head.data);
}
