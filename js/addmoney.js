// add money for noakhali:
document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();


    const addMoneyN = getInputFieldByValue('noakhali-add-money');
    const increaseBalanceN = getTextFieldValueById('noakhali-balance');
    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');
     // check if money donated is more than balance:
     if(addMoneyN > totalBalance){
        alert('not enough money!!');
        return;
    }

    

    const balancePostDonation = totalBalance - addMoneyN;

    document.getElementById('balance').innerText = balancePostDonation;
    
    

    const newNoakhaliBalance = addMoneyN + increaseBalanceN;

    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance +' BDT';

    

    // check if input is integer:
    if(isNaN(addMoneyN)){
        alert('failed to Donate money!!');
        return;
    }

    // pop-up:
    

    

   

    
})

//add money for feni:
document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();


    const addMoneyF = getInputFieldByValue('feni-add-money');
    const increaseBalanceF = getTextFieldValueById('feni-balance');
    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');
    // check if money donated is more than balance:
    if(addMoneyF > totalBalance){
        alert('not enough money!!');
        return;
    }
    const balancePostDonation = totalBalance - addMoneyF;

    document.getElementById('balance').innerText = balancePostDonation;

    const newFeniBalance = addMoneyF + increaseBalanceF;

    document.getElementById('feni-balance').innerText = newFeniBalance +' BDT';

    if(isNaN(addMoneyF)){
        alert('failed to add money!!');
        return;
    }

    
})

// add money for qouta protest:
document.getElementById('btn-donate-qouta-protest').addEventListener('click', function(event){
    event.preventDefault();


    const addMoneyQ = getInputFieldByValue('quota-protest-add-money');
    const increaseBalanceQ = getTextFieldValueById('quota-protest-balance');
    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');

    if(addMoneyQ > totalBalance){
        
        alert('not enough money!!');
        document.getElementById('quota-protest-balance').innerText = '0 BDT';
        return;
    }

    
    const balancePostDonation = totalBalance - addMoneyQ;

    document.getElementById('balance').innerText = balancePostDonation;

    const newQoutaBalance = addMoneyQ + increaseBalanceQ;

    document.getElementById('quota-protest-balance').innerText = newQoutaBalance +' BDT';

    if(isNaN(addMoneyQ  )){
        alert('failed to add money!!');
        return;
    }

    
})

