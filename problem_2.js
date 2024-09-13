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



console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
