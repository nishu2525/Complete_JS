/*
Console is  used to print / (log) any msg to console 
Console.log alway writes in next line.

--- Variables

Variables are containers for data, inside it we store there value.
Js is Dynamically typed language

To store we need memory space.
So we create variables.
 
There are 3 types of Variables.
let, const, var
Const →value can't be changed.

In maths a=b  is valued of a and b is equals
But in programming 
a=b is, 
 store whatever value of b in a (variable) 
that's why we call it as assignment operator


Rules for variable Names

1)Variable names are case sensitive
2) only letters, digits, $, -  are allowed.
3) we can't use digits at starting of word      eg-- 25Nishad
        It will not show an error 
4) keywords Can't be variables.

*/

const n1="Nishad";
const n2="Vaidu";
const n3="Umap";
const n4="Nishu";
 console.log(n1) ;
 console.log(n2) ;
 console.log(n3) ;
 console.log(n4) ;
 /*
If you  want to log multiple things at a time .
Dont use
*/
// → Just do
console.table([n1,n2,n3,n4]);
/*

Convensions (to be used for better practise not Compulsory but good to do so)

1.  Camelcase 1st-1word Small & 1st letter of 2nd  word Capital
    eg:- nishadUmap ---- Camelcase

2. snake case 
→ Use understore ( _ ) betn two words.
    eg:- nishad_umap --- snake case

3.Kebabcase 
 Use hypen ( - ) betn two words 
    eg: nishad-umap --- Kebabcase

4.Pascal Case 
first letter of both words capital.
    eg:- NishadUmap --- Pascal Case

Recommended is  always use camel case 
Eg-  nishadUmap



Prefer Not to use var - bcz of issue in block  scope & functional Scope.

Never Declare avriable alone
eg- name="Nishad"; X
let name="Nishad"; ✓
If you don't define any value of variable then you'll get 
undefined

before 2015  var was Only datatype in JS, after that in  ES6 (Ecma Script 6)
{new in version -6} 
New Datatypes are declared so now using var is not good. 


 let, const, var

var - Variable can be redeclared & updated, global scope variable.

let: Variable can't be redeclared but can be updated , block scope variable.

Const: Variable can't be rederlared or updated.A block scope variable.

Bydefault  in js when we declare a variable without assigning  valve, it will be returned as undefined.
*/