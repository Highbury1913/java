var age = prompt("what is your age?")
var gender = prompt("are you male or female?")
if (age >= 18 && gender === "female") {
	alert ("You drink for free")
}
else if (age >= 18 ) {
	alert ("can drink but you have to pay")
}
 else {
    alert ("No matter who you are you can't drink here.")
}