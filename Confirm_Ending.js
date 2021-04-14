function confirmEnding(str, target) {
  let leng=str.length; // 11
  let lengTarget=target.length; //4
  let finaleng=leng-lengTarget; //7 
  let counter=0;

  for (let i=finaleng; i<=leng;i++){
    if (str[i]==target[counter++])
      return true;
    else 
      return false;
  }
}

confirmEnding("Open sesame", "same")
