let Output = document.querySelector("#output-display");

function display(num){
   Output.value += num;
   console.log(num);
}

function calculate(){
  try {
      Output.value=eval(Output.value);
  } catch (error) {
    alert("invalid input")
  }
}
function Clear() {
  Output.value ="";
}


function del() {
  Output.value= Output.value.slice(0,-1);
}




