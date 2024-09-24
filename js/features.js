// show donation form:
document.getElementById('btn-donate').addEventListener('click', function(){
    // remove hidden class from donation form:
    document.getElementById('donation-form').classList.remove('hidden');

    // hide the donation history form:
    document.getElementById('transaction-section').classList.add('hidden');
})

// show the donation history form:
document.getElementById('btn-donate-history').addEventListener('click', function(){
    // remove hidden class from donation history:
    document.getElementById('transaction-section').classList.remove('hidden');

    // hide the donation form:
    document.getElementById('donation-form').classList.add('hidden');

})