var $ = function (id) 
{
    return document.getElementById(id);
}




 var calculate = function(floatMonthlyPayment, intLoanTerm, floatTotalCost)
 {floatMonthlyPayment = parseFloat(document.getElementById("monthly_payment").value).toFixed(2);
  intLoanTerm = parseFloat(document.getElementById("loan_length").value).toFixed(2);
  floatTotalCost = floatMonthlyPayment * intLoanTerm;
  document.getElementById("total_cost").value = floatTotalCost;
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
 }