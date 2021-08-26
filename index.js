const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3)
{
   const sumOfAngles = angle1 + angle2 + angle3;
   return sumOfAngles;
}

function isTriangle()
{
   const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
   if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "")
    {
      outputE1.innerText = "Please enter all inputs";
       
    }
   else if (sumOfAngles === 180)
   {
      outputE1.innerText = "These angles form a triangle";
   }
   else 
   {
      outputE1.innerText = "These angles do not form a triangle";
   }
}

isTriangleBtn.addEventListener("click", isTriangle)
