$("#checking-deposit"). on("click", addMoney);
$("#savings-deposit"). on("click", addMoney);
$("#checking-withdraw"). on("click", withdrawMoney);
$("#savings-withdraw"). on("click", withdrawMoney);
function addMoney(){
    var oriBalance = $(".balance");
    var result = oriBalance.text();
    var currentBalance = parseInt (result.replace("$",""));
    var newEntry = parseInt ($("#checking-amount").val());
    $(oriBalance).text(function(){
        var total = newEntry + currentBalance;
        return "$" + total;
    });
    
    $(".balance").css("background-color","#E3E3E3");
}
var balanceSum;
function getSumBalances(){
    var cBalance = $("#checking-balance").text();
    var checkingBalance = parseInt(cBalance.replace("$",""));
    var sBalance = $("#savings-balance").text();
    var savingsBalance = parseInt(sBalance.replace("$",""));
    balanceSum = savingsBalance + checkingBalance;
    return balanceSum;
}
function withdrawMoney(){
    getSumBalances();
    var oriBalance = $(".balance");
    var result = oriBalance.text();
    var currentBalance = parseInt(result.replace("$",""));
    var newWithdrawal = parseInt($("#checking-amount").val());
    $(oriBalance).text(function(){
        var total = currentBalance - newWithdrawal;
    if ($(this)==$("#savings-amount")){
        if(total>0){
            return"$" + total;
        } else {
            return"$" + currentBalance;
        
        }
    
    } else if (newWithdrawal > balanceSum){
       alert("Not enough money for that!")
    }else {
         if(total>0){
          return"$" +total;
        } else {
        var confirmOverdraft = confirm("Do you want to overdraft your account");
            if(confirmOverdraft == true){
            $("#saving-balance").text( function(){
            var stringBalance = $("#savings-balance").text();
            var savingsBalance = parseInt(stringBalance.replace("$",""));
            var overdraft = savingsBalance + total;
            return "$" + overdraft;
        
            });
          $(this).css("background-color", "#FF003E");
          return "$" + 0;
       }
      }
   }
 });
};
