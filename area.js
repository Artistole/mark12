// const inputs = document.querySelectorAll(".area-input");
// const areaBtn = document.querySelector("#area-btn");
// const areaOutput = document.querySelector("#area-output");

// function multiplyBaseAndHeight(base, height) 
// {
// 	const multipliedOutput = base * height;
// 	return multipliedOutput;
// }

// function calculateArea() 
// {
// 	//area = (base * height)/2
// 	const basexheight = multiplyBaseAndHeight(Number(inputs[0].value), Number(inputs[1].value));
// 	const Area = basexheight/2;
// 	areaOutput.innerText = `The area of the triangle is`  ;
// }

// areaBtn.addEventListener('click', calculateArea);

const areas = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const outputE1 = document.querySelector("#outputarea");

function multiplication(a,b)
{
    const mOutput = a*b ; 
    return mOutput;
}


function calculateArea()
{
  const mOutput = multiplication(Number(areas[0].value), Number(areas[1].value));
  const Area = mOutput/2;
  outputE1.innerText = "The area of the triangle is  " + Area + "cm²";
}

areaBtn.addEventListener("click", calculateArea);