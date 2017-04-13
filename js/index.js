    var myBtn = document.getElementsByClassName('cbutton');
    var myOutput = document.getElementById('output');
    var myCal = "";
    var myCom = false;

    for(var i=0; i < myBtn.length; i++) {
        myBtn[i].addEventListener('click', function() {
            var myValue = this.innerHTML;
            //console.log(myValue);
            
            if(myCom || myCal == "0") {
                myCom = false;
                myCal = "";
            }

            if(myValue == "="){
                myCal = eval(myCal);
                //console.log(myCal);
                myCom = true;
            } else if(myValue == "AC") {
                myCal = 0;
                myCom = true;
            } else {
                myCal = myCal + myValue;
                console.log(myCal);
            }
           
            myOutput.innerHTML = myCal;

        });
    }






