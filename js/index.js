    
    var myBtn = document.getElementsByClassName('cbutton');
    var myOutput = document.getElementById('output');
    var myCal = "";
    var myCom = false;
    var mySwitch = false;
    var myOperators = ["+", "-", "*", "/"];

    for(var i= 0; i < myBtn.length; i++) {
        myBtn[i].addEventListener("click", function() {
            var myValue = this.innerHTML;


            // if my Com or myCal are equal to 0, i will set myCal to an empty string. This is useful for prevent the user to input multiple 0
            if(myCom || myCal == "0") {
                myCom = false;
                myCal = "";
            }


             // this will prevent the user to click any sign multiple times and screw the calculations
            if(myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/") {
                if(myOperators.indexOf(myOutput.innerHTML.slice(-1)) > -1) {
                    myCal = myCal.substring(0, myCal.length - 1);
                }
            } 

            // this will be useful to set everything to an empty string. If i simply set myCal to 0, when i add a number like for example 8, i will get something like 08, instad of 8. This is why i need myCom
            if(myCom) {
                myCom = false;
                myCal = "";
            }

            // this will let the user + - * / the result
            if(mySwitch) {
                mySwitch = false;
                sum(myCal, myValue);
            }



            //Evaluating the string when the user press the = sign
            if(myValue == "<br><br><br>=") {
                myCal = eval(myCal);
                //////////////////////
                if(myCal == undefined) {
                    myCal = 0;
                    myCom = true;
                }

                //////////////////////
                //console.log(myCal);
                mySwitch = true;
            
                

            // setting our value to 0 when user click on AC
            } else if(myValue == "AC") {
                myCal = 0;
                myCom = true;

            // if the user doesn't click = or AC, we will simply add the value of the button to the string
            } else {
               myCal = myCal + myValue; 

            }

            // outputting my cal
            myOutput.innerHTML = myCal;
      
            function sum(myCal, myVal) {
                myCal = myCal + myVal;
            }
            

        });
    }


