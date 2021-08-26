const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output1");

function calculateSumOfSquares(a,b)
{
    const sumOfSquares = a*a + b*b ; 
    return sumOfSquares;
}


function calculateHypotenuse()
{
  const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputE1.innerText = "The length of the hyotenuse is " + lengthOfHypotenuse.toFixed(2) + "cms"
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);