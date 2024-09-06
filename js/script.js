//ex1
function textChange(){
	document.getElementById('tc').innerHTML="welcome to WWL";
}

//ex2
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}
//ex3
function bulbOn(){
	document.getElementById('bulb').src="images/on.gif";

}
function bulbOff(){
	document.getElementById('bulb').src="images/off.gif";
	
}
//ex4
function changeCss(){
	document.getElementById('cc').style.color=("red")
}
//ex5
function textShow(){
	document.getElementById('tsh').style.display="block";
}
function textHide(){
	document.getElementById('tsh').style.display="none";
}
//ex6
var number1=5;
var number2=5;
var result=number1 + number2;
function showResult(){
     document.getElementById('sr').innerHTML=result;
}

//ex7
let number3,number4
number3=5;
number4=7;
number3 += number4;
function showAddition(){
	document.getElementById('sa').innerHTML=number1;
}
//ex8
let num5,num6,result2;
num5 = 5;
num6 = 5;
result2 = num5 < num6;
function showResult2(){
	document.getElementById('sr2').innerHTML=result2;
}
//ex9
let num1,num2,result3;
num1=10;
num2=10;
result3= num1==num2;
function showResult3(){
	document.getElementById('sr3').innerHTML=result3;
}
//ex10
let num9,num10,result4;
num9=5;
num10="5";
result4=num9===num10;
function showResult4(){
	document.getElementById('sr4').innerHTML=result4;
}


//ex11
let cars=["toyota","audi","BMW"]
function showResult5(){
	document.getElementById('sr5').innerHTML=cars[2];
}

//ex12
let data={ sabrina:10, Adiba:20, Lamia:30};
function showResult6(){
	document.getElementById('sr6').innerHTML=data['sabrina'];
}

//ex14
    let x, y;
    x=2070
    y=x+9
  function showResult7(){
    document.getElementById("xy").innerHTML = y;
}


/*=====================jq======================*/

 $(document).ready(function(){
     $('#btn').click(function(){
      alert("welcome");

     });
});