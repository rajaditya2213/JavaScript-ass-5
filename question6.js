//Q.6 A LinkedinProfile URL Regex


const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function LinkedinProfile(linkedin){

     if(linkedin.match(linkedinProfileRegex)){
          console.log('A Valid Linkedin Profile URL');
     }else{
          console.log('Its not a Valid Linkedin Profile URL');
     }
}

//For Valid Linkedin Profile
LinkedinProfile("https://www.linkedin.com/in/aditya-raj-27472a264/");
//OUTPUT: A Valid Linkedin Profile URL

//For InValid Linkedin Profile
LinkedinProfile("https:/www.lindincom/adutya-da/");


