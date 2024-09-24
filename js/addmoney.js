// add money for noakhali:
document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();


    const addMoney = getInputFieldByValue('noakhali-add-money');
    const increaseBalance = getTextFieldValueById('noakhali-balance');
    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');
     // check if money donated is more than balance:
     if(addMoney > totalBalance){
        alert('not enough money!!');
        return;
    }

    

    const balancePostDonation = totalBalance - addMoney;

    document.getElementById('balance').innerText = balancePostDonation;
    
    

    const newNoakhaliBalance = addMoney + increaseBalance;

    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance +' BDT';

    // add to donation history:
    addDonation(addMoney,'For Flood relief to Noakhali');

    

    // check if input is integer:
    if(isNaN(addMoney)){
        alert('failed to Donate money!!');
        return;
    }

    
    

    

   

    
})

//add money for feni:
document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();


    const addMoney = getInputFieldByValue('feni-add-money');
    const increaseBalance = getTextFieldValueById('feni-balance');
    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');
    // check if money donated is more than balance:
    if(addMoney > totalBalance){
        alert('not enough money!!');
        return;
    }
    const balancePostDonation = totalBalance - addMoney;

    document.getElementById('balance').innerText = balancePostDonation;

    const newFeniBalance = addMoney + increaseBalance;

    document.getElementById('feni-balance').innerText = newFeniBalance +' BDT';

    // add to donation history:
    addDonation(addMoney,'For Flood relief to Feni');

    if(isNaN(addMoney)){
        alert('failed to add money!!');
        return;
    }

    
})

// add money for qouta protest:
document.getElementById('btn-donate-qouta-protest').addEventListener('click', function(event){
    event.preventDefault();


    const addMoney = getInputFieldByValue('quota-protest-add-money');
    const increaseBalance = getTextFieldValueById('quota-protest-balance');
    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');

    if(addMoney > totalBalance){
        
        alert('not enough money!!');
        document.getElementById('quota-protest-balance').innerText = '0 BDT';
        return;
    }

    
    const balancePostDonation = totalBalance - addMoney;

    document.getElementById('balance').innerText = balancePostDonation;

    const newQoutaBalance = addMoney + increaseBalance;

    document.getElementById('quota-protest-balance').innerText = newQoutaBalance +' BDT';

    

    // add to donation history:
    addDonation(addMoney,'For qouta protest police brutality victims');

    if(isNaN(addMoney  )){
        alert('failed to add money!!');
        return;
    }

    
})

