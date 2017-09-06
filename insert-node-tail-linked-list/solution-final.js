
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
  var last = { data: data};
  if (!head) {
    head = last;
  } else if (!head.next) {
    head.next = last;
  } else {
    var lastHead = curHead = head;
    while (curHead) {
      lastHead = curHead;
      curHead = curHead.next;
    }
   lastHead.next = last;
  }
  return head;
}
