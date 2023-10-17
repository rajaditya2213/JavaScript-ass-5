//Q2. Random Number Generator with Delay and progress indication.


function generateRandomNumber(){
     return Math.floor(Math.random() * 100);
}

function generateRandomNumberWithDelay(delayInSeconds){
     console.log(`Generating a Random Number afetr a delay of ${delayInSeconds} ..second`);

     let countdown=4;
     const countdownInterval=setInterval(()=>{
          console.log(`${countdown} seconds remaning...}`);
          countdown--;  
          
          if(countdown ===0){
               clearInterval(countdownInterval);
               const randomNumber=generateRandomNumber();
               console.log(`Random number generated ${randomNumber}`);
          }
     })
}
generateRandomNumberWithDelay(4);



//OUTPUT: Generating a random Number after a delay of 4..second
//4 seconds remaning...}
//3 seconds remaining..}
//2 seconds remaining..}
//1 seconds remaining..}
//Random number generates 45

