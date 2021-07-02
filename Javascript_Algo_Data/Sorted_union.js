function uniteUnique(arr) {
 let args=[...arguments]
 let finalarr=[]
 for (let i=0; i<args.length; i++){
   for (let j=0; j<args[i].length; j++){
     if(finalarr.indexOf(args[i][j])==-1){
       finalarr.push(args[i][j])
     }
   }
 }
 return finalarr;
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
