/*
ex1)
3,4,3
5,6,4
0: 3+5 = 8
1: 4+6 = 10
2: 3+4 = 7

sumList = [8, 10, 7]
num = sumList.pop()
carry = 0;

num === 7
    res.push(num) // res: [7]
    
num === 10
    if(num >= 10){
        carry++; // carry === 1
    }
    res.push(num - 10 * carry) // res: [7, 0]
    
num === 8
    res.push(num + carry) // res: [7, 0, 9]
    carry = 0;
num === 9 라면?
    if(num + carry >= 10){
        res.push(num + carry - 10) // res: [7, 0, 0]
        carry = 1;
    }
    * sumList.length === 0
        if(carry !== 0) {
            res.push(carry) // res: [7, 0, 0, 1]
        }

ex2)
7899 + 999 = 8898
9,9,9
9,9,8,7

sumList = [18,18,17,7]
carry = 0;

num = sumList.pop()
num:18, carry:0
    num + carry >= 10: O
        num+=carry-10 // num: 8
        carry=1
    num >= 10: X
    res.push(num) // res: [8]
num:18, carry:1
    num + carry >= 10:O
        num+=carry-10 // num: 9
        carry=1
    res.push(num) // res:[8,9]
num:17, carry:1
    num+carry >= 10:O
        num+=carry-10 // num: 8
        carry=1
    res.push(num) // res:[8,9,8]
num:7, carry:1
    num+carry >= 10:X
    res.push(num+carry) // res:[8,9,8,8]
    
ex3)
99 + 1899 = 1998
9,9
9,9,8,1

sumList=[18,18,8,1]
carry=0

num=sumList.pop()
num:18, carry:0
    num+=carry // num:18
    num >= 10:O
        num-=10 // num:8
        carry=1
    res.push(num) // res:[8]
num:18, carry:1
    num+=carry // num:19
    num >= 10:O
        num-=10 // num:9
        carry=1
    res.push(num) // res:[8,9]
num:8, carry:1
    num+=carry // num:9
    num >= 10:X
        carry=0
    res.push(num) // res:[8,9,9]
num:1, carry:0
    num+=carry
    num >= 10:X
        carry=0
    res.push(num) // res:[8,9,9,1]
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sumNode(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1 && !l2) {
        return null;
    }

    let sum: number = 0;
    if(l1) {
        sum += l1.val;
    }
    if(l2) {
        sum += l2.val;
    }
    
    return new ListNode(sum, sumNode(l1?.next || null, l2?.next || null));
}

function calculateNode(listSum: ListNode | null, carry: number): ListNode {
    if(!listSum && carry === 0) {
        return null;
    }
    
    let num: number = (listSum?.val || 0) + carry;
    let nextCarry: number = 0;
    if(num >= 10) {
        num -= 10;
        nextCarry = 1;
    }
    
    return new ListNode(num, calculateNode(listSum?.next || null, nextCarry));
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const listSum = sumNode(l1,l2);
    console.log(listSum);
    const listResult = calculateNode(listSum, 0);
    console.log(listResult);
    
    return listResult;
};