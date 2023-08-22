const btnElement = document.getElementById("btn");

const apiKey = "jHCjaDGbqJOMc9f9SlH1SA==9Y6yMt12bM3PTOE2";

const jokeElement = document.getElementById("joke");

const options = {
   method: "GET",
   headers: {
      "X-Api-Key": apiKey,
   }
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

   try {
      jokeElement.innerText = "Updating...";
      btnElement.disabled = true;
      btnElement.innerText = "Loading..."
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      console.log(data);
      btnElement.disabled = false;
      btnElement.innerText = "Tell me a joke"

      jokeElement.innerText = data[0].joke;
         
   } catch (error) {
      jokeElement.innerText = "An error happened, try again later!";
      btnElement.disabled = false;
      btnElement.innerText = "Tell me a joke"

   }

}

btnElement.addEventListener("click",getJoke)