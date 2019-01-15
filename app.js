/*

起征点 5000

保险金       8%
医疗保险金    2%
失业保险金  0.5%
住房公积金    7%
补充住房公积金 0%


税率表

级数	     应纳税所得额(含税)	               应纳税所得额(不含税)	     税率(%)	速算扣除数
1	      不超过 1500 元的	               不超过1455元的	               3	       0 
2	      超过 1500 元至 4500 元的部分	    超过1455元至4,155元的部分	    10	     105
3	      超过 4500 元至 9000 元的部分	    超过4155元至7755元的部分	    20	     555
4	      超过 9000 元至 35000 元的部分	    超过7755元至27255元的部分	    25	    1005
5	      超过 35000 元至 55000 元的部分	  超过27255元至41255元的部分	  30	    2755
6	      超过 55000 元至 80000 元的部分	  超过41255元至57505元的部分	  35	    5505
7	      超过 80000 元的部分	             超过57505的部分	            45	   13505

计算公式

个人所得税 = ( 税前工资 - 五险一金个人部分 - 起征点 ) * 税率 - 速算扣除数

*/

//Calculate Tip
function calculate() {}

//click to call function
document.getElementById("calculate").onclick = function() {
  calculate();
};

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
