// show donation form:
document.getElementById('btn-donate').addEventListener('click', function(){
    // remove hidden class from donation form:
    document.getElementById('donation-form').classList.remove('hidden');

    // color change of the button clicked:
    document.getElementById('btn-donate-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donate').classList.add('bg-[#B4F461]');

    // hide the donation history form:
    document.getElementById('donation-section').classList.add('hidden');
})

// show the donation history form:
document.getElementById('btn-donate-history').addEventListener('click', function(){
    // remove hidden class from donation history:
    document.getElementById('donation-section').classList.remove('hidden');

    // color change of the button clicked:
    document.getElementById('btn-donate-history').classList.add('bg-[#B4F461]');
    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');

    // hide the donation form:
    document.getElementById('donation-form').classList.add('hidden');

    // hide the footer:
    document.getElementById('footer').classList.add('hidden');

})