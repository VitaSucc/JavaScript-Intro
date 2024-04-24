//Define a variable
//let greeting = "Yo sup Kodeloftet"
//Give it value
   // greeting = "A value"
//Do something with the variable
   // console.log(greeting)
//CHange the value to variable (Give it a new value)
   // greeting = "A different value"
  ///  console.log(greeting)
//Define constants
//const constantVariable = "I am constant"

//let changeableVariable = "Testing"
//The next line crashes the program
//constantVariable = "This does not work"

/**
 * Many lines
 * of comments
 */

//let notDefined
//console.log()

//let notYetDefined = null
//console.log(notYetDefined)

//Complex Types

//Lists (Array)
//const numbers = [1, 2, 3, 4]
//console.log(numbers)

//Summary of information (Object)
//const person = {
    email: "vitalijus.kirciginas@gmail.com"
    name: "Vitalijus Kirciginas"
    age: "26"

let buttonElement = document.getElementById("theme-changer")

function changeTheme() {
    //First find the body element
    buttonElement.textContent = "It worked!"
    //Find out the class name
    const body = document.getElementById("body")
    //If light theme, change to dark
    const isLight = currentTheme === "theme-light"
    //If dark theme, change to light
}

buttonElement.addEventListener("click", changeTheme)