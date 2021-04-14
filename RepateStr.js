function repeatStringNumTimes(str, num) {
  let newStr="";
  for (let i=0; i<=num; i++){
    if (num>=0 && i<num){
      newStr+=str;
      console.log(newStr)
    }

  }

  return newStr;
}

repeatStringNumTimes("abc", 3);
