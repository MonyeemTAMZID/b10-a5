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


//   function for Donation history:
function addDonation (amount, reason){
    const donationContainer = document.getElementById('donation-container');
    const donationElement = document.createElement('div');
    const date = new Date();
    const dateTime = date.toLocaleDateString();
    donationElement.classList.add('p-4', 'bg-gray-100', 'rounded-lg');
    donationElement.innerHTML = `
        <h2 class ='font-bold text-2xl' >Donated ${amount} BDT for ${reason}</h2>
        <p> the date is ${date}</p>
        
    `
    donationContainer.appendChild(donationElement);
}

