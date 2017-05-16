$(document).ready( function() {

  const inputs = [""];

  var totalString = 0;

  // Operators for validation
  const operators1 = ["+", "-", "/", "*"];
  const operators2 = ["."];

  // Numbers for validation
  const num = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input) {
    if(operators2.includes(inputs.length-1===true && input===".")) {
      // if two decimal places are added side by side such that you would
      // get "..", prints an error message to the console and doesn't
      // alter the inputs array.
      console.log("Duplicat '.'")
    }
    else if (inputs.length===1 && operators1.includes(input)===false) {
      // checks if input is a number in
      // order to avoid duplicate operators
      inputs.push(input);
    }
    else if (operators1.includes([inputs.length-1])===false) {
      // checks to make sure that the last entry
      // in the inputs array is not an operator;
      inputs.push(input);
    }
    else if (nums.includes(Number(input))) {
      // if the input provided can be found in the num array
      // pushes the number into the input array.
      // i.e. if the input is a number.
      inputs.push(input);
    }
    update();
  }

  function update() {
    totalString = inputs.join("");
    $("#answer-display").html(totalString);
  }

  function getTotal() {
    totalString = inputs.join("");
    $("#answer-display").html(eval(totalString));
  }

  $("button").on("click", function() {
    if (this.id === "delete-all") {
      inputs = [""];
      update();
    }

    else if (this.id === "back-one") {
      inputs.pop();
      update();
    }

    else if (this.id === "total") {
      getTotal();
    }

    else {
      if (inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".") === -1) {
        getValue(this.id);
      } else {
         getValue(this.id);
      }
    }
  });
});
