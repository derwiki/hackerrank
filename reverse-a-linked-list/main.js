// find tail
// return tail and recurse up
// each recurse up creates new Node with current head as next

function reverseLinkedList(head) {
  if (!head || !head.next) { return head; }

  var rest = reverseLinkedList(head.next);
  head.next.next = head;
	delete(head.next);
	return rest;
}



var ll = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4
      }
    }
  }
};

console.log(reverseLinkedList(ll));
