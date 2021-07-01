const DNA={
    G:"C",
    C:"G",
    A:"T",
    T:"A"
  }

function pairElement(str) {
  
  let arr=str.split("")
  let dna=arr.map(function(item){
    if(item=="G"){
      return [item,DNA.G];
    }else if(item=="C"){
      return [item,DNA.C];
    }else if(item=="A"){
      return [item,DNA.A];
    }else{
      return [item, DNA.T]
    }
  })
  
  return dna;
}

//console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
