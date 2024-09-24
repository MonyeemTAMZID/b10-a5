function getInputFieldByValue(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log(id, inputValue, inputNumber)
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// header sticky challenge learnt from web:
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    });
  });