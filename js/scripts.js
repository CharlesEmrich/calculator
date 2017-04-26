// Business (or back-end) logic:
var subtract = function(num1,num2) {
return num1 - num2;
};
var multiply = function(num1,num2) {
return num1 * num2;
};
var threeTimes = function(num1,num2,num3) {
return num1 * num2 * num3;
};
var divide = function(num1, num2) {
return num1 / num2;
};
var remainder = function(num1, num2) {
return num1 % num2;
};
var add = function(number1, number2) {
 return number1 + number2;
};

// Front end logic:
$(function() {
  $("#add").submit(function(event) {
    var firstNumber  = parseInt($("#add1").val());
    var secondNumber = parseInt($("#add2").val());

    var result = add(firstNumber,secondNumber);

    $("#output").text(result);
    event.preventDefault();
  })
})
