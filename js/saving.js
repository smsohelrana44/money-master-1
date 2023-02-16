document.getElementById('save-btn').addEventListener('click',function(){
    const incomeSourceElement = document.getElementById("income-field");
    const incomeSourceString = incomeSourceElement.value;
    const incomeSource = parseInt(incomeSourceString);
    const saveButton=(incomeSource *0.2).toFixed();
    
    const savingAmount=document.getElementById('saving-amount');
    const savingAmountElement=saveButton;
    savingAmount.innerText=savingAmountElement;


   
   
  const expensesFoodElement=document.getElementById('expanses-food');
  const expensesFoodString=expensesFoodElement.value;
  const expensesFood=parseInt(expensesFoodString);
  
  expensesFoodElement.value='';

  const expensesRentElement=document.getElementById('expanses-rent');
  const expenseRentString=expensesRentElement.value;
  const expensesRent=parseInt(expenseRentString);
  const expensesTotal=expensesRent + expensesFood;

  expensesRentElement.value='';

  const expensesClothElement=document.getElementById('expanses-cloth');
  const expensesClothString=expensesClothElement.value;
  const expensesCloth=parseInt(expensesClothString);
  const expensesClothTotal=expensesTotal + expensesCloth;
  
  expensesClothElement.value='';

  const income=incomeSource - expensesClothTotal;
  const totalExpensesAmount=incomeSource -income;
 
  const totalExpenses=document.getElementById('total-expenses');
  totalExpenses.innerText=totalExpensesAmount;

  const totalBalanceElement=incomeSource - totalExpensesAmount;
  const totalBalanceAmount=document.getElementById('total-balance');
  totalBalanceAmount.innerText=totalBalanceElement;

  const remainingElement=document.getElementById('remaining-balance');
  const remainingvalue=totalBalanceElement -saveButton;
  remainingElement.innerText=remainingvalue;

     

})