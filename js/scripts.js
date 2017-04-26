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

function oper (operation) {
  console.log("Running oper() on " + operation);
  // operation(parseInt($("#add1").val()), parseInt($("#add2").val()))
  switch(operation) {
  case "add":
      return add(parseInt($("#add1").val()), parseInt($("#add2").val()));
  case "multiply":
      return multiply(parseInt($("#add1").val()), parseInt($("#add2").val()));
  case "remainder":
      return remainder(parseInt($("#add1").val()), parseInt($("#add2").val()));
  case "divide":
      return divide(parseInt($("#add1").val()), parseInt($("#add2").val()));
  case "subtract":
      return subtract(parseInt($("#add1").val()), parseInt($("#add2").val()));
  default:
      console.log("Defaulted. operation = " + operation);
  }
}

// Front end logic:
$(function() {
  $("#calc-form").submit(function(event) {
    event.preventDefault();
  });

  $("button").click(function() {
    $("#output").text(oper($(this)[0].id));
    });
  });
