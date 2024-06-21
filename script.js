let numArr1 = [];
    let numArr2 = [];
    let displayNumber1 = 0;
    let displayNumber2 = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    let Toperator = '';
    let operator = '';

    function setNumber(num , op) {
        console.log("operator = " + operator);
        Toperator = op ;
        if (Toperator == null && firstNumber == 0){
            numArr1.push(num); 
            displayNumber1 = numArr1.join(""); 
            document.getElementById('display1').innerHTML = displayNumber1; 
            

        }
        
        

        else if(num === null){
            console.log("numArr = " + numArr1[0]);
            console.log("operator = " + operator);
            if(Toperator === 'no'){
                console.log("operator = " + operator);
                if (numArr2.length > 0) {
                    // Backspace in the second number
                    
                    numArr2.pop();
                    displayNumber2 = numArr2.join("");
                    document.getElementById('display1').innerHTML = displayNumber1 + operator + displayNumber2;
                } else if (operator !== '') {
                    // Clear operator if it's set
                    operator = '';
                    document.getElementById('display1').innerHTML = displayNumber1;
                } else if (numArr1.length > 0) {
                    // Backspace in the first number
                    if(numArr1.length == 1){
                        document.getElementById('display3').innerHTML = '';
                    }
                    numArr1.pop();
                    displayNumber1 = numArr1.join("");
                    document.getElementById('display1').innerHTML = displayNumber1;
                    
                }

            }
            else{

            operator = Toperator;
            firstNumber = parseFloat(displayNumber1);
            document.getElementById('display1').innerHTML = displayNumber1 + operator;
            }

        }

        else if (Toperator == null){
            numArr2.push(num); 
            displayNumber2 = numArr2.join(""); 
            document.getElementById('display1').innerHTML = displayNumber1 + operator + displayNumber2;
        }

    }

    function equal(){

        secondNumber = parseFloat(displayNumber2);
        
            switch (operator) {
                case '+':
                    document.getElementById('display3').innerHTML = firstNumber + secondNumber;
                    break;
                case '-':
                    document.getElementById('display3').innerHTML = firstNumber - secondNumber;
                    break;
                case '*':
                    document.getElementById('display3').innerHTML = firstNumber * secondNumber;
                    break;
                case '/':
                    document.getElementById('display3').innerHTML = firstNumber / secondNumber;
                    break;
                case '%':
                    document.getElementById('display3').innerHTML = firstNumber % secondNumber;
            }

    }

    function remove(){
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display3').innerHTML = '';
         displayNumber1 = 0;
         displayNumber2 = 0;
         firstNumber = 0;
         secondNumber = 0;
         Toperator = '';
         operator = '';
         numArr1 = [];
         numArr2 = [];
    }
