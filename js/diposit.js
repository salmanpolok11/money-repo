document.getElementById('deposit-btn').addEventListener('click', function(){
   const inputFlid = document.getElementById('input-flid');
   const newAmount = inputFlid.value;

   const convertSting = parseFloat(newAmount);

   inputFlid.value = '';

   const addedAmount =document.getElementById('added-new');
   const addedStingAmount = addedAmount.innerText;
   const convertStingAmount = parseFloat(addedStingAmount);

   const newDipositeTotal = convertStingAmount + convertSting;
   addedAmount.innerText = newDipositeTotal;
   
})