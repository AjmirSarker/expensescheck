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

function calculateTotalExp() {
  let income = parseFloat(document.getElementById('income-input').value);

  let food = document.getElementById('food-input').value;
  let rent = document.getElementById('rent-input').value;
  let clothes = document.getElementById('clothes-input').value;
  let TotalExp = parseFloat(
    parseFloat(food) + parseFloat(rent) + parseFloat(clothes)
  );
  if (income >= TotalExp) {
    document.getElementById('totalexp').innerText = TotalExp;
    let Balance = income - TotalExp;
    document.getElementById('balance').innerText = Balance;
    document.getElementById('worstspend').style.display = 'none';
  } else {
    document.getElementById('worstspend').style.display = 'block';
    document.getElementById('totalexp').innerText = '';
    document.getElementById('balance').innerText = '';
  }
}
function SavingAmount() {
  let savingvalue = parseFloat(document.getElementById('saving').value);
  let incomevalue = parseFloat(document.getElementById('income-input').value);
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
