document.getElementById('deposit-btn').addEventListener('click', function(){
   const inputFlid = document.getElementById('input-flid');
   const newAmount = inputFlid.value;
   const convertSting = parseFloat(newAmount);
  

   inputFlid.value = '';

   const addedNewAmount = document.getElementById('added-new');
   const addAmount = addedNewAmount.innerText;

   const convertNumSting = parseFloat(addAmount);

   const addedTotalAmount = convertNumSting + convertSting;
   addedNewAmount.innerText = addedTotalAmount;

  //  BALNACE

   const totalBalance = document.getElementById('balnce-total');
   const totalBalValu = totalBalance.innerText;
   const convetBalnce = parseFloat(totalBalValu);

   const addedTotalBalncce = convetBalnce + convertSting;
   totalBalance.innerText = addedTotalBalncce;


   
})