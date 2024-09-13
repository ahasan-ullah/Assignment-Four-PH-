function calculateTax(income, expenses) {
  if(income<0 || expenses<0 || income<expenses){
    return "Invalid Input";
  }
  return ((income-expenses)*0.2);
}



function sendNotification(email) {
  let count=0;
  for(const char of email){
    if(char==='@'){
      count++;
    }
  }
  if (email.indexOf('@') === -1 || count>1) {
      return "Invalid Email";
  }
  const splitedArray=email.split('@');
  return (splitedArray[0]+" sent you an email from "+splitedArray[1]);
}



function checkDigitsInName(name) {
  if(typeof name!=='string'){
    return "Invalid Input";
  }
  for(let i=0;i<name.length; i++) {
    if(name[i]>='0' && name[i]<='9'){
      return true;
    }
  }
  return false;
}



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



function  waitingTime(waitingTimes,serialNumber){
  if(Array.isArray(waitingTimes)===false || typeof serialNumber!=='number' || (serialNumber>waitingTimes.length)===false){
    return "Invalid Input";
  }
  let sum=0;
  for(const time of waitingTimes){
    sum+=time;
  }
  const avg=Math.round(sum/(waitingTimes.length));
  const remainingPeople=serialNumber-waitingTimes.length-1;
  return avg*remainingPeople;
}