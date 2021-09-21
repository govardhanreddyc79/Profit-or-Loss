var inputValues = document.querySelectorAll("input");
var checkBtn = document.querySelector(".check-btn");
var displayMessage = document.querySelector(".opt-message")

function submitHandler()
    {
    var initialPrice = inputValues[0].value
    var stockQuantity = inputValues[1].value
    var currentPrice = inputValues[2].value
    console.log(initialPrice)
    console.log(stockQuantity)
    console.log(currentPrice)
    if(initialPrice != '' & stockQuantity != '' & currentPrice != ''){
        if(initialPrice >=0 & stockQuantity >0 & currentPrice >=0){
            calculateProfitAndLoss(initialPrice,stockQuantity,currentPrice)
        }
        else{
            showMessage("Input values should be greater than 0")
        }
    }else
    {
        alert("Please fill out all Fields")
    }
    
}

function calculateProfitAndLoss(ip,qty,cp){
    if(cp>ip){
        var profit = (cp - ip)*qty
        var profitPercentage = ((profit/ip)*100).toFixed(2)
        showMessage("Hey, the profit is "+ profit +" and the percent is " + profitPercentage + "%")
    }
    else if(cp===ip){
        showMessage("Hey, no profit and no loss")
    }
    else{
        var loss = (ip - cp)*qty
        var lossPercentage = ((loss/ip)*100).toFixed(2)
        showMessage("Hey, the loss is "+ loss +" and the percent is " + lossPercentage + "%")
    }

}

function showMessage(msg){
    displayMessage.innerText = msg
}

checkBtn.addEventListener("click",submitHandler)