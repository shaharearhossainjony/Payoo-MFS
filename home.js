// dom for toggling
document.getElementById('add-money-toggle').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display ='none';
    document.getElementById('add-money-section').style.display ='block';

})

document.getElementById('cash-out-toggle').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display ='none';
    document.getElementById('cash-out-section').style.display ='block';
})




//  dom for add money

const userPin=1133;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bank= document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('bank-Account-Number').value;
    const addedAmount = parseInt(document.getElementById('added-amount').value)
    const pin= parseInt(document.getElementById('pin-number-for-add').value);

    const availableBalance= parseInt(document.getElementById('current-balance').innerText)

    if(accountNumber.length < 11){
        alert("Please provide valid 11 digit account number")
        return;
    }

   if(pin !== userPin){
        alert("Please provide valid 4 digit pin number")
        return;
    }


    const totalNewAvailableBalance = availableBalance + addedAmount;


    document.getElementById('current-balance').innerText = totalNewAvailableBalance;  
})

//  dom for cashout


document.getElementById('cash-out-btn').addEventListener('click', function (e){
    e.preventDefault();
    console.log('cash out btn clicked');

    const agentNumber= document.getElementById("agent-number").value;

    if(agentNumber.length < 11){
        alert("Please provide valid 11 digit agent number")
        return;
    } 
   
    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
    
    const cashOutPin= parseInt(document.getElementById('cash-out-pin').value);

    if(cashOutPin !== userPin){
        alert("Please provide valid 4 digit pin number")
        return;
    }

    const availableBalance= parseInt(document.getElementById('current-balance').innerText)
    
    const totalNewAvailableBalance = availableBalance - cashOutAmount;


    document.getElementById('current-balance').innerText = totalNewAvailableBalance;


})

