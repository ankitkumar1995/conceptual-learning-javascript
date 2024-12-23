/*
You are given two non-empty linked lists representing two 
non-negative integers. The digits are stored in reverse order, and 
each of their nodes contains a single digit. Add the two 
numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself

*/

var addTwoNumbers = function (l1, l2) {
  //   let remainder = 0;
  //   let sum = 0;
  //   let res = [];
  //   let length1 = l1.length;
  //   let length2 = l2.length;
  //   let max = Math.max(length1, length2);
  //   let min = Math.min(length1, length2);
  //   for (let i = 0; i < max; i++) {
  //     sum = 0;
  //     if (i < max) {
  //       if (i < min) {
  //         sum = l1[i] + l2[i] + remainder;
  //       } else {
  //         console.log(remainder, i);
  //         if (max === length1) {
  //           sum = l1[i] + remainder;
  //         } else {
  //           sum = l2[i] + remainder;
  //         }
  //       }
  //       const sumtype = sum.toString();
  //       if (sumtype.length > 1) {
  //         remainder = Number(sumtype[0]);
  //         res.push(Number(sumtype[1]));
  //       } else {
  //         remainder = 0;
  //         res.push(sum);
  //       }
  //     } else {
  //       const sum = l1[i] + l2[i] + remainder;
  //       if (sum.lenght > 1) {
  //         remainder = sum[0];
  //         res.push(sum[1]);
  //       } else {
  //         remainder = 0;
  //         res.push(sum);
  //       }
  //     }
  //   }
  //   return res;
  let remainder = 0;
  let sum = 0;
  let res = [];
  let length1 = l1.length;
  let length2 = l2.length;
  let max = Math.max(length1, length2);
  let min = Math.min(length1, length2);
  for (let i = 0; i < max; i++) {
    sum = 0;
    if (i < max) {
      if (i < min) {
        sum = l1[i] + l2[i] + remainder;
      } else {
        console.log(remainder, i);
        if (max === length1) {
          sum = l1[i] + remainder;
        } else {
          sum = l2[i] + remainder;
        }
      }
      const sumtype = sum.toString();
      if (sumtype.length > 1) {
        remainder = Number(sumtype[0]);
        res.push(Number(sumtype[1]));
      } else {
        remainder = 0;
        res.push(sum);
      }
    } else {
      const sum = l1[i] + l2[i] + remainder;
      if (sum.lenght > 1) {
        remainder = sum[0];
        res.push(sum[1]);
      } else {
        remainder = 0;
        res.push(sum);
      }
    }
  }
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  if (!res || res.length === 0) {
    return null;
  }

  let head = new ListNode(res[0]);
  let current = head;
  for (let i = 1; i < res.length; i++) {
    current.next = new ListNode(res[i]);
    current = current.next;
  }

  return head;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
function divide(x, y) {
  if (y === 0) {
    throw "Cannot divide by zero!";
  }
  return x / y;
}

try {
  let result = divide(10, 0);
  console.log(result); // This line won't be executed if an exception is thrown
} catch (error) {
  console.error("Error:", error); // Output: Error: Cannot divide by zero!
}
