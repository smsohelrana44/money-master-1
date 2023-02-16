document.getElementById("calculate-btn").addEventListener("click", function () {
    const incomeSourceElement = document.getElementById("income-field");
    const incomeSourceString = incomeSourceElement.value;
    const incomeSource = parseInt(incomeSourceString);
    incomeSourceElement.value = "";
  
  
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
  
  })
  
  