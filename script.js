const upperCase = document.getElementById('upper');

const lowerCase = document.getElementById('lower');

const numbers = document.getElementById('num');

const symbols = document.getElementById('symbol');

function generate(){
     let dictonary = "";
     if(upperCase.checked){
          dictonary += "QWERTYUIOPASDFGHJKLZXCVBNM";

     }
     if(lowerCase.checked){
          dictonary += "qwertyuiopasdfghjklzxcvbnm";

     }
     if(numbers.checked){
          dictonary +="123456789";

     }
     if(symbols.checked){
          dictonary += "!@#$%^&*()_+-=[];<>:";

     }
     const length = document.getElementById('pwlen').value;
     if(length<1 || dictonary.length == 0) {
          return;
     }
     let password = "";
     for(let i = 0; i < length; i++){
          password += dictonary[Math.floor(Math.random() * dictonary.length)];
        
     }

    
     document.getElementById('password').value = password;

}


// generate();


document.getElementById('generate').addEventListener('click', generate);

document.getElementById('copy').addEventListener('click',()=>{
     const pass = document.getElementById('password').value;
     navigator.clipboard.writeText(pass).then(()=>{
          document.getElementById('copy').innerHTML = "copied";
          setTimeout(()=>{
               document.getElementById('copy').innerHTML = "copy to clipboard";

          },1000);
     });
});