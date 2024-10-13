var check= prompt("enter a word to check if it is a palindrome")

if (check === ""){
    alert("please reload")
}
else{
    palindrome(check)
}



function palindrome(givenword){
var word=givenword.replace(/[^A-Z0-9]/ig,"").toLowerCase()

var checking= word.split("").reverse().join("")

if (word === checking){
    alert(word+" is a palindrone")
}
else{
    
    alert(word+" is not a palindrone")
}
}


