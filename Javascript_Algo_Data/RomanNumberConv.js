 var rom={
    1: "I",
    4:"IV",
    5: "V",
    9: "IV",
    10:"X",
    50:"L",
    100:"C",
    500: "D",
    1000:"M"
  };

function checkforequal(num){
  for (var key in rom){
    if (num==key){
    return rom[key] 
   } 
}
}

function checkones(num){
  let chars="";
  if (num<4){
    for (let i=1; i<=num;i++){
       chars+="I"}
     return chars
  }
  else if(num==5){
    return "V"
  }
  else if(num>5&&num<9){
    let base="V"
    let rest=checkones(num-5)
    return base+rest
  }
  else if (num==9){
    return "IX"
  }
}


function checktens(num){
  let chars="";
  if (num<5){
    for (let i=1; i<=num;i++){
    chars+="X"}
    return chars
  }else if(num==5){
    return "L"
  }else if(num>5){
    let base="L"
    let rest=checktens(num-5)
    return base+rest
  }
 
  
}


function convertToRoman(num) {
  let str=num.toString()
  let equal=checkforequal(num)
  let digits=[];


  if (equal){
    return equal
  }
  
  
  else{
    for (let i=0; i<=str.length-1; i++){
    digits.push(str[i])
  }
  //Einstellig
  if (digits.length==1){
   return checkones(digits[0])
  }

  //Zweistellig 
  else if(digits.length==2){
    let first="";
    let second="";
    if (digits[0]<5){
      first=checktens(digits[0]);
      second=checkones(digits[1]);
      return first+second
    }
  }
  }
  
}



console.log(convertToRoman(60));
