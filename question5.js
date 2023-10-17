//Q5. URL validation

const Pattern=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

function  urlPattern(URL){
     if(URL.match(Pattern)){
          console.log('Its Valid URL!!');
     }else{
          console.log('Its InValid URL Not suported!!');
     }
} 

//For Valid URL
urlPattern('https://www.google.com');
//OUTPUT=> Its valid URL


//For InValid URL
urlPattern('http:/adityacom');
//OUTPUT=> Its InValid URL Not suported




