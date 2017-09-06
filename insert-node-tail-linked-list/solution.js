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
  console.log();
  console.log('initial head', head, 'new data', data);
  if (!head) {
    head = {data: data};
    console.log('!head', 'returning', head);
  } else if (!head.next) {
    head.next = {data: data}
    console.log('!head.next', 'returning', head);
  } else {
    var lastHead = curHead = head;
    var i = 0;
    while (curHead && curHead.next) {
      console.log(i, 'lastHead', lastHead);
      console.log(i, 'curHead', curHead);

      lastHead = curHead;
      curHead = curHead.next;
    }    
    console.log('i', i, 'returning', head);
  }
  return head;
}
