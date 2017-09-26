function Bankaccount(name, initialdeposit) {
  this.name = name;
  this.initialdeposit = initialdeposit;
}


// Bankaccount.prototype.currentBalance = function () {
//
//   var total = initialdeposit;
//   function(depositInput, withdrawalInput) {
//   return (total + depositInput)-withdrawalInput;
//   };
//
// };

$(function() {

  $("form.formone").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedInitDeposit = parseInt($("#initial-deposit").val());

    var newBankaccount = new Bankaccount(inputtedName, inputtedInitDeposit)

    $("#name").text(newBankaccount.name);
    // $("#initial-deposit").text(newBankaccount.initialdeposit);

    // newBankaccount.currentBalance();



  });

});
