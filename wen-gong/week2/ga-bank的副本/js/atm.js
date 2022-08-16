$("#checking-deposit").on('click', addMoney);
$("#savings-deposit").on('click', addMoney);
$("#savings-withdraw").on('click', withdrawMoney);
$("#savings-withdraw").on('click', withdrawMoney);

function addMoney(){
 var oriBalance = (".balance");
 var result = oriBalance.text();
 var currentBalance = parseInt(result.replace("$", ""));
 var newEntry = parseInt($("#checking-amount").val());
 
 



}
