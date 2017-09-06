/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function deleteNode(head, position) {
   if (!head) {
       return;
   } else if (position == 0) {
//       console.log('ding', head);
       return head.next;

   } else if (position == 1) {
       var newHead = { data: head.data, next: head.next.next};
//       console.log('* deleting at ', position, 'newHead', newHead, "\n");
       return newHead;
   }
   return { data: head.data, next: deleteNode(head.next, position-1) };

}
