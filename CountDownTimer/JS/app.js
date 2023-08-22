const endDate = "20 Aug 2023 12:51:00 PM";

document.getElementById("end-time").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
   const end = new Date(endDate);//it will give the object in ms of enddate
   const now = new Date();//it will object of the current time in ms
   const diff = (end - now)/1000//it will give difference b/w the current and event date and to convert it into sec we divide it by 1000
   //########## convert it into days ###########

   if(diff < 0){//so the timer will not go in negative
      return;
   }

   inputs[0].value = Math.floor(diff/24/60/60);//bcz every day has 24 hours, each hour has 60 min and each min has 60 seconds.this is the value of quotient so it will have remainder also which will give us the hours remaining after days

   // ########### convert it into hours #########

   inputs[1].value = Math.floor(diff/3600) % 24;

   // ########## covert it into minutes #########

   inputs[2].value = Math.floor(diff/60) % 60;

   // ######### convert it into seconds #########

   inputs[3].value = Math.floor(diff) % 60;
}
//initial call
clock();

setInterval(
   () => {
      clock();
   },1000
)

