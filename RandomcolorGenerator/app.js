const hexCode = document.getElementById("hex-code");


const getColor = () => {
   const randomNumber = Math.floor(Math.random() * 16777215);
   const randomCode = randomNumber.toString(16);// toString method takes one parameter that is the base in which it will convert the number into.
   document.body.style.backgroundColor = "#" + randomCode;
   hexCode.innerText = "#" + randomCode;
}

// event call
document.getElementById("btn").addEventListener("click", getColor);

//initial call-- so even at the start the page has some default color

getColor();