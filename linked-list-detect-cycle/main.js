#2nd attempt
function hasCycle(head) {
    var tortoise = head, hare = head;
    while (true) {
       if (!hare || !tortoise) {
           return false;
       } else if (hare.next == tortoise.next) {
           return true;
       } else if (tortoise && tortoise.next && tortoise.next.next) {
           tortoise = tortoise.next;
           hare = tortoise.next.next;
       } else {
           return false;
       }
    }
}


#1st attempt
function hasCycle(head) {
    console.log(head && head.visited ? 'visited' : 'unvisited', 'data', head && head.data, 'next?', head && !!head.next);
    if (!head) { return false;}
    
    if (head.visited) { console.log('* found cycle'); return true;}
        
    head.visited = true;
    retval = hasCycle(head.next);
    console.log('retval', retval)
    return retval;
}



#3rd attempt
function hasCycle(head) {
    var tortoise = head, hare = head;
    while (tortoise && tortoise.next) {
       if (hare == tortoise) { return true;}
       tortoise = tortoise.next;
       hare = tortoise.next.next;
    }
    return false;
}


#4th and first passing
function hasCycle(head) {
    if (!head) { return false; }

    var slow = head, fast = head;
    while (true) {
       if (!slow) {return false;}
       if (!fast) {return false;}
        
       slow = slow.next;
       fast = fast.next.next;
        
       if (fast == slow) {return true;}
    }
    return false;
}
