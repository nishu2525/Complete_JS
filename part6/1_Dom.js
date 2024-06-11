// DOM- Document abject Model 
// Brendan Eich - Founder of JavaScript
// All webpage is made of Object (DOM)
// When you do consol.log(document.link) - inside any webpage's console --- then you'll get HTML Collection it is not a array

//may we write word 'class' in css but behind the scene it is 'className' as window Object has funcTn as 'className'
// By using getAttribute() we can get value of that atribute
// we can also set value of attribute -- setAttribute('pass value ') // here privious value if any will be overwriten
// innerContent , innerText ,innerHTML
/* innercontent - All the text including the (visibility hidden or display none) text 
innertext-- the text which is visible 
innerHTML-- also gets HTML inside it 
*/

// querySelector selects first item
// when you use querySelectorAll then you'll get NodeList

// Nodelist and htmlCollection are not pure arrays  --- array jaisa dilhta hai pr array hai nahi pr array se kaafi milta julta hai

// If You want to add color to nodelist , You can't bt if you choose any particular element from it then you can

// In Nodelist, HTMLCollection we can use forEach bt don't use map-
// if you want to use map then convert nodelist to ---
// conversion-        Store HTMLCollection to a variable then ,    Array.from (vaiable)


// Array.from()  // This helps to convert anything to an array 

// How to work with all components

document.querySelectorAll('h3') // Selecting all h3's on page
NodeList(5) [h3, h3, h3, h3, h3] // list of all h3 Elements
const allh3=document.querySelectorAll('h3') // Stored in varibale

allh3[1].innerText // This is how you can Access a particular element 
'Classification as Criminal Tribe[edit]' // opt

// Applying forEach on All H3's to change their color o red
allh3.forEach(function (h) {
h.style.color='red'        
    })

// This is callled as DOM Manipulation