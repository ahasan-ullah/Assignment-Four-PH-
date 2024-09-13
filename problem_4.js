function calculateFinalScore(obj) {
  if(typeof obj!=='object' || obj===null || Array.isArray(obj)){
    return "Invalid Input";
  }
  let finalScore=obj.testScore+obj.schoolGrade;
  if(obj.isFFamily){
    finalScore+=20;
  }
  if(finalScore>=80){
    return true;
  }
  else{
    return false;
  }
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello" ));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore(123));
console.log(calculateFinalScore([123,12]));