const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

// console.log(btnEl, quoteEl, authorEl);

btnEl.addEventListener('click', () => {
   getQuote();
});

getQuote();

async function getQuote(){
   try{
      btnEl.textContent = "Loading...";
      btnEl.disabled = true;
      quoteEl.textContent = "Updating...";
      authorEl.textContent = "Updating...";
      const result = await fetch(apiURL);
      const data = await result.json();
      btnEl.textContent = "GET QUOTE";
      btnEl.disabled = false;
      quoteEl.textContent = data.content;
      authorEl.textContent = `~ ${data.author}`;
   } catch(error){
      console.log(error);
      btnEl.textContent = "GET QUOTE";
      btnEl.disabled = false;
      quoteEl.textContent = "Error Occurred, Please Try Again Later!"
      authorEl.textContent = "Error Occurred";
   }
}