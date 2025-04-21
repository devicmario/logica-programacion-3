const factorialCalculator = (num) => {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i
    }
    return result;
    
}

const main = () =>{
    const inputField = document.getElementById("numberType"); 
    const outputDiv = document.querySelector(".output");
    
    let num = parseInt(inputField.value); 
    
    if (isNaN(num) || num < 0) {
        alert("Error: El dato introducido no es un número válido.");
        inputField.value = "";
        return;
    }

    const factorial = factorialCalculator(num);
    const resultMsg = `Factorial de ${num} es ${factorial}.`;

    console.log(resultMsg);

    outputDiv.innerHTML = `<h2>${resultMsg}</h2>`;
};

document.getElementById("calculateButton").addEventListener("click", main);

