/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
    console.log(data, position, 'head', head);

    if (position == 0 || !head) {
        var newHead =  head ? { data: data, next: head } : { data: data };
        console.log('* inserting, newHead', newHead, "\n");
        return newHead;
    }

    retval = { data: head.data, next: insert(head.next, data, position-1) };
    console.log('retval', retval);
    return retval;
}
