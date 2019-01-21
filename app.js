/*

1. 起征点 5000

2. 五险一金
    保险金       8%
    医疗保险金    2%
    失业保险金  0.5%
    住房公积金    7%
    补充住房公积金 0%

    社会保险缴费基数上、下限分别调整为 21396 元和 4279 元

3. 税率表

    级数	     应纳税所得额(含税)	               应纳税所得额(不含税)	        税率(%)	速算扣除数
    1	      不超过 3000 元的	               不超过 3000 元的	               3	       0 
    2	      超过 8000 元至 17000 元的部分	    超过 3000元至 12000 元的部分	  10	     210
    3	      超过 17000 元至 30000 元的部分    超过 12000 元至 25000 元的部分  20	    1410
    4	      超过 30000 元至 40000 元的部分	  超过 25000 元至 35000元的部分	  25	    2660
    5	      超过 40000 元至 60000 元的部分	  超过 35000 元至 55000元的部分	  30	    4410
    6	      超过 60000 元至 85000 元的部分	  超过 55000 元至 80000元的部分	  35	    7160
    7	      超过 85000 元的部分	             超过 80000 的部分	            45	   15160

4. 计算公式

    个人所得税 = ( 税前工资 - 五险一金个人部分 - 起征点 ) * 税率 - 速算扣除数

    实得工资 = 税前工资 - 个人所得税 -五险一金个人部分

*/

//Calculate Tip
function calculate() {
  var elBaseSalary = document.getElementById('salary');
  if(elBaseSalary.value == ""){
    //alert("Please input a number!");
    return;
  }
  var baseSalary = parseFloat(elBaseSalary.value);
  if(isNaN(baseSalary)){
    //alert("Please input a number!");
    return;
  }
  if(baseSalary < 500){
    //alert("Invalid input!!");
    return;
  }

  elBaseSalary.addEventListener("keyup", function(event){
    event.preventDefault();
      if(event.keyCode == 13){
        document.getElementById("calculate").click();
      }
  });

  // 1. calculate insurance
  var insurance = 0;
  var base = baseSalary;
  if(base < 4279){
    if(base <= 2300){
      base = 4279;
      insurance = base * (0.08 + 0.02 + 0.005) + 2300 * 0.07;
    }
    else{
      base = 4279;
      insurance = base * (0.08 + 0.02 + 0.005) + baseSalary * 0.07;
    }
  }
  else if(base > 21396){
    base = 21396;
    insurance = base * (0.08 + 0.02 + 0.005 + 0.07);
  }
  else{
    insurance = base * (0.08 + 0.02 + 0.005 + 0.07);
  }

  // 2. calculate tax
  var tax = 0;
  var taxSalary = baseSalary - insurance - 5000;

  if(taxSalary <= 3000){
    tax = taxSalary * 0.03;
    if(tax < 0){
      tax = 0;
    }
  }
  else if(taxSalary > 3000&&taxSalary <= 12000){
    tax = taxSalary * 0.1 - 210;
  }
  else if(taxSalary > 12000&&taxSalary <= 25000){
    tax = taxSalary * 0.2 - 1410;
  }
  else if(taxSalary > 25000&&taxSalary <= 35000){
    tax = taxSalary * 0.25 - 2660;
  }
  else if(taxSalary > 35000&&taxSalary <= 55000){
    tax = taxSalary * 0.3 - 4410;
  }
  else if(taxSalary > 55000&&taxSalary <= 80000){
    tax = taxSalary * 0.35 - 7160;
  }
  else if(taxSalary > 80000){
    tax = taxSalary * 0.45 - 15160;
  }

  var finalSalary = baseSalary - tax - insurance;
  var elIncome = document.getElementById('income');
  elIncome.value = finalSalary.toFixed(2);

  document.getElementById("formula").innerText = baseSalary + " - "  + tax.toFixed(2) + " - " + insurance.toFixed(2) + " = " + finalSalary.toFixed(2);

}


//click to call function
document.getElementById("calculate").onclick = function() {
  calculate();
};

document.getElementById("clear").onclick = function(){
  clear();
};

function clear(){
  document.getElementById("salary").value = "";
  document.getElementById("income").value = "";
  document.getElementById("salary").focus();
}

/*

************************ Javascript Reference **********************

Using Variables, Objects And Arrays

var str = "Hello";                // local variable, when inside a function
str2 = "Hello World";             // global variable in default context (window.str2)
str3 = 'My quote char: " ';       // single or double quote
str4 = "My really really really \
really long string broken into \
multiple lines";

var someInt = 19;                 // define some integer

var newObject = new Object();     // constructor
newObject = {};                   // shorthand for same
newObject.name = "bob"            // dynamic attributes
newObject.name = null             // it's there (null item)
delete newObject.name             // it's gone (undefined)
newObject["real age"] = 33;       // array notation/hash table

var obj = {                       // create object using JSON
    name: "Bob",                  //   aka Javascript Object Notation
    details: {
        age: 33,
        "favorite color": "green"
    }
}
obj.name
obj.details["favorite color"]

var newArray = [];                // no size
newArray[3] = "hi";               // grows dynamically
newArray[2] = 13;                 // any type
newArray.push(newObject);         // add new item
newArray.pop();                   // remove it

--------------------------------------------

Comparisons And Manipulations

comparisons 

123 == "123"                     // true => converts type
123 === "123"                    // false => checks type
typeof(x) == "undefined"     // x isn't there
x == null            // x is defined, but null

Numbers
parseInt("123")          // base 10 => 123
parseInt("123", 16);         // base 16 => 291
parseFloat("123.43");        // 123.43

isNaN(0/0) == true       // illegal number
3/0 == Infinity          // legal...
-3/0 == -Infinity        //
isFinite(3/0) == false       // ... but not finite

--------------------------------------------

Conditionals And Loops

if (str == "Hello"){    // if-else
  alert("Hi");      // popup dialog
}
else{
  alert("something is wrong!");
}

a = 3, b = 4;       // multi-assigment
c = a > b ? a : b;  // c gets bigger item (b)

switch (name){      // switch statement
  case "Bob":
    alert("Hi Bob!")
    break
  case "Joe":
    alert("Hey Joe.")
    break
  default: alert("Do I know you?")
}

while (i < n){          // the basics
 // do something
 i++;
}

for (var i=0; i<n; i++){
  // do something else
}

--------------------------------------------

Defining Functions

function foo(a,b){          // global function
  return a + b;
}

*/
