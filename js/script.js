// This Function is for Checking the input value Error When i'm pressing any Ke of Keyboard
function CheckInput(a) {
  if (document.getElementById(a).value.toString().length == 0) {
    document.getElementById('W_msg').style.display = 'block';

    document.getElementById('ok').innerText = a;
  } else {
    if (parseInt(document.getElementById(a).value) < 0) {
      document.getElementById('W_msg').style.display = 'block';
      document.getElementById('ok').innerText = a;
    } else {
      document.getElementById('W_msg').style.display = 'none';
    }
  }
}
function ReturnIncomevalue() {
   
  return document.getElementById('income-input').value;
}
function ReturnFoodCost(){
return  document.getElementById('food-input').value;
}
function ReturnRentCost(){
  return document.getElementById('rent-input').value;
  
}
function ReturnClothesCost(){
  return document.getElementById('clothes-input').value;
}
//This Function is for Calculating the Expenses and Balance,And also checks Error
function calculateTotalExp() {
  let income =parseFloat( ReturnIncomevalue());
  let food = parseFloat(ReturnFoodCost());
  let rent = parseFloat(ReturnRentCost());
  let clothes = parseFloat(ReturnClothesCost());
  let TotalExp = parseFloat(
    food + rent + clothes
  );
  if(ReturnIncomevalue() == "" || ReturnFoodCost() == "" || ReturnRentCost() == "" || ReturnClothesCost() == "" ){
    document.getElementById("empty").style.display="block"

  }
  else{
    if (income >= TotalExp) {
      document.getElementById('totalexp').innerText = TotalExp;
      let Balance = income - TotalExp;
      document.getElementById('balance').innerText = Balance;
      document.getElementById('worstspend').style.display = 'none';
      document.getElementById("empty").style.display="none"
    } else {
      document.getElementById('worstspend').style.display = 'block';
      document.getElementById('totalexp').innerText = '';
      document.getElementById('balance').innerText = '';
      document.getElementById("empty").style.display="none"
    }
  }
  
  
}
//This Function is for Calculating the Saving amount and checking Error
function SavingAmount() {
  let savingvalue = parseFloat(document.getElementById('saving').value);
  let incomevalue = ReturnIncomevalue();
  let savingCal = parseFloat((incomevalue * savingvalue) / 100);

  let Balancesure = parseFloat(document.getElementById('balance').innerText);
  let remaining = parseFloat(Balancesure - savingCal);
  if (Balancesure >= savingCal && remaining >= 0) {
    document.getElementById('saveamount').innerText = savingCal;
    document.getElementById('remainingbalance').innerText = remaining;
    document.querySelector('.lasterror').style.display = 'none';
  } else {
    document.querySelector('.lasterror').style.display = 'block';
    document.getElementById('saveamount').innerText = '';
    document.getElementById('remainingbalance').innerText = '';
  }
}
