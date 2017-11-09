$(document).ready(function () {

  let inputs = [""];

  let totalString;

  // Operators for validation without decimal
  const operators1 = ["+", "-", "/", "*"];
  const operators = ["+", "-", "/", "*"];
  // Operators for validation only decimal
  const operators2 = ["."];
  const decimal = ".";

  // Numbers for validation
  const num = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input) {
    let lastItem = inputs[inputs.length-1];
    // most specific to least specific
    /*
    CASE 1
    operators and decimals can only come before and after Numbers
    2.2
    2+2
    2.2+2.2
    2.34*3.4+4.44

    CASE 2
    decimals points can come before or after points
    .22+.33
    3.+4.
    4.4+3.3
    decimals cannot be followed by other decimals
    */

    // DECIMAL
    if (input === decimal && lastItem !== decimal) {
      console.log("decimal");
      inputs.push(input);
    // OPERATOR
    } else if (operators.includes(input) && !operators.includes(lastItem)) {
      console.log("operator");
      inputs.push(input);
    // NUMBER
    } else if (num.includes(Number(input))) {
      console.log("number");
      inputs.push(input);
    }
    update();
  }

  function update() {
    console.log(inputs);
    totalString = inputs.join("");
    $("#answer-display").html(totalString);
  }

  function getTotal() {
    totalString = inputs.join("");
    let answer = eval(totalString);
    $("#answer-display").html(answer);
    console.log("Total = " + eval(totalString));
  }

  $("button").on("click", function (e) {
    var item = e.target.id;
    console.log(item);
    switch (item) {
        case "delete-all":
          inputs = [""];
          update();
          break;

        case "back-one":
          inputs.pop();
          update();
          break;

        case "+/-":
          inputs.push("*-1");
          update();
          break;

        case "%":
          inputs.push("%");
          update();
          break;

        case "total":
          getTotal();
          break;

        default:
          if (inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".") === -1) {
            getValue(item);
          } else {
            getValue(item);
          }
          break;
    }
  });
});
