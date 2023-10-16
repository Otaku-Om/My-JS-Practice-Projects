const btnEl = document.getElementById("btn");
const imgEl = document.querySelector(".anime-img");
const imgContainer = document.querySelector(".anime-container");
// console.log(imgContainer);
// console.log(imgEl);
// console.log(btnEl);

const apiUrl = "https://api.waifu.pics/sfw/waifu";

btnEl.addEventListener("click", () => {
    getAnimeImg();
})

async function getAnimeImg(){
   btnEl.disabled = true;
   btnEl.textContent = "Loading...";
   imgContainer.classList.remove("anime-container");
   imgEl.src = "Rolling.svg";
   const response = await fetch(apiUrl);
   const data = await response.json();
   console.log(data.url);
   imgEl.src = await data.url;
   btnEl.disabled = false;
   btnEl.textContent = "Get Anime";

   // console.log(data);
}