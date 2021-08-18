document.querySelector("#length").defaultValue = 20
//

function generateInt(){
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    let pwLow = "";
    let pwUp = "";
    const length = document.querySelector('#length').value
    const checkbox = document.querySelector('#checkbox')


    for (let i = 0;  i < length; i++) {
        pwLow += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    if(checkbox.checked == true) {
        for (let i=0; i < pwLow.length; i++) {
            pwUp += i % 3 == 0 ? pwLow.charAt(i).toUpperCase() : pwLow.charAt(i);
         }
        return pwUp
    } else {
        return pwLow
    }  
}


const pw = generateInt()
const pwOut = document.querySelector("#passwordOut")
pwOut.innerText = pw

// on klick
function gereratePW(){
    let pw = generateInt()
    pwOut.innerText = pw
   
}

