// add money for noakhali:
document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();


    const addMoneyN = getInputFieldByValue('noakhali-add-money');
    const increaseBalanceN = getTextFieldValueById('noakhali-balance');
    const newNoakhaliBalance = addMoneyN + increaseBalanceN;

    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance +' BDT';

    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');
    const balancePostDonation = totalBalance - addMoneyN;

    document.getElementById('balance').innerText = balancePostDonation;

})

//add money for feni:
document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();


    const addMoneyF = getInputFieldByValue('feni-add-money');
    const increaseBalanceF = getTextFieldValueById('feni-balance');
    const newFeniBalance = addMoneyF + increaseBalanceF;

    document.getElementById('feni-balance').innerText = newFeniBalance +' BDT';

    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');
    const balancePostDonation = totalBalance - addMoneyF;

    document.getElementById('balance').innerText = balancePostDonation;

})

// add money for qouta protest:
document.getElementById('btn-donate-qouta-protest').addEventListener('click', function(event){
    event.preventDefault();


    const addMoneyQ = getInputFieldByValue('quota-protest-add-money');
    const increaseBalanceQ = getTextFieldValueById('quota-protest-balance');
    const newQoutaBalance = addMoneyQ + increaseBalanceQ;

    document.getElementById('quota-protest-balance').innerText = newQoutaBalance +' BDT';

    // minus from total balance
    const totalBalance = getTextFieldValueById('balance');
    const balancePostDonation = totalBalance - addMoneyQ;

    document.getElementById('balance').innerText = balancePostDonation;

})