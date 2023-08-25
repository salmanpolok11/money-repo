document.getElementById('widtdraw-btn').addEventListener('click', function(){
   const witdtrawFlid = document.getElementById('widtdraw-flid');
   const widtdrawAmount = witdtrawFlid.value;
   const widtdrawConvert = parseFloat(widtdrawAmount);

witdtrawFlid.value = '';

const addedinput = document.getElementById('widtdraw-add');
const addedTotal = addedinput.innerText;
const convertSiyng = parseFloat(addedTotal);

const addedTotalAmount = convertSiyng + widtdrawConvert;
addedinput.innerText = addedTotalAmount;




})