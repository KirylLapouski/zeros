module.exports = function getZerosCount(number) {
  let res = 0;
  for(let i=0;i<=number;i+=5){
      res += multipleOfFiveTimes(i)
  }
  return res
}

function multipleOfFiveTimes(number){
  let res = 0
  if(!number)
    return 0
  while(!(number%5)){
    res+=1;
    number = number / 5
  }
  return res
}

