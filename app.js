

function appendValue(value){
    document.getElementById('inputBox').value +=value;
   }

function calculate(){
    let expression = document.getElementById('inputBox').value;
    let result = eval(expression);
    document.getElementById('inputBox').value = result;
}   