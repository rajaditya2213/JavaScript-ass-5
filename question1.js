//Find the reverse of the string that uses the setTimeout()function to reverse a given string after a delay of 2 second.


const input="PW Skills";

function reverseString(str){
     var splitString=str.split(" ");

     var reverseArray=splitString.reverse();

     var joinArray=reverseArray.join(' ');

     return joinArray;
}
function reverseWithDelay(str){
     setTimeout(function () {
          let reversed=reverseString(str);
          console.log("Reverses String: "+ reversed);
     },2000);
}

reverseWithDelay(input);

//OUTPUT: slliks WP

