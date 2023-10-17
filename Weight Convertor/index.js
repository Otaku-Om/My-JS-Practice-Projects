const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errorTime;
let resultTime;

inputEl.addEventListener("input", () => {
   if(inputEl.value < 0 || isNaN(inputEl.value)){
      errorEl.textContent = "Enter the valid value!";
      clearTimeout(errorTime);
      errorTime = setTimeout(() => {
         errorEl.textContent = "";
         inputEl.value = "";
      }, 2000);
   }
   else{
      const result = (inputEl.value * 0.453592).toFixed(3);
      resultEl.textContent = result;

      clearTimeout(resultTime);
      resultTime = setTimeout(() => {
         resultEl.textContent = "";
         inputEl.textContent = '';
      }, 1000);
   }
});

