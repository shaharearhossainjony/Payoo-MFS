// login button functionality 
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 17714202350;
    const fourDigitPin = 1133;
    const mobileNumberValue= document.getElementById('mobile-number').value;
    const mobileNumberConverted= parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberConverted = parseInt(pinNumberValue);

    console.log(mobileNumberConverted, pinNumberConverted );

    if( mobileNumberConverted === mobileNumber &&  pinNumberConverted === fourDigitPin){
        window.location.href="./home.html" ;
    }
    else{
        alert("Invalid Credentials");

    }


})
