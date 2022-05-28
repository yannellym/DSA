// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// test_00:
// uncompress("2c3a1t"); // -> 'ccaaat'
// test_01:
// uncompress("4s2b"); // -> 'ssssbb'
// test_02:
// uncompress("2p1o5p"); // -> 'ppoppppp'
// test_03:
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// test_04:
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

const uncompress = (s) => {
  let nums = "0123456789";
  let res = [];
  let i = 0;
  let j = 0;
  while(j < s.length){
    if( nums.includes(s[j])){    //if it includes the number, just increase it.
      j++
    } else{
      let target = Number(s.slice(i,j));     //slice the number
     for(let count =0; count < target; count++){ //run loop number of target times
       res.push(s[j]);     //push result into the array
     }
      j++.    //increase j
      i = j;  //let i now be j(because its the next letter)
    }
  }
  return res.join("")  //the letters will be put individually in the array so you need to concatenate them with .join
}
