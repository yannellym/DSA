uncompress the string "3n12e2z" => "nnneeeeeeeeeeeezz"



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
