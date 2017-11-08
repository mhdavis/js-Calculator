$(document).ready(function () {

  let inputs = [""];

  let totalString;

  // Operators for validation without decimal
  const operators1 = ["+", "-", "/", "*"];
  // Operators for validation only decimal
  const operators2 = ["."];

  // Numbers for validation
  const num = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input) {
    if(operators2.includes(inputs[inputs.length-1]) && input === ".") {
      // if two decimal places are added side by side such that you would
      // get "..", prints an error message to the console and doesn't
      // alter the inputs array.
      console.log(`A. Duplicat .`);
    }
    else if (inputs.length >= 1 && operators1.includes(input) || operators2.includes(input)) {
      console.log(`B. ${input} is an operator`);
      // checks if input is an operator
      // order to avoid duplicate operators
      inputs.push(input);
    }
    else if (operators1.includes([inputs.length-1])) {
      // checks to make sure that the last entry
      // in the inputs array is not an operator;
      console.log(`C. `);
      inputs.push(input);
    }
    else if (num.includes(Number(input))) {
      console.log(`D. ${input} is a number and is in the num array`)
      // if the input provided can be found in the num array
      // pushes the number into the input array.
      // i.e. if the input is a number.
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
