const text_area = document.getElementById("logOutput");
const current_account = document.getElementById("current_account");
const current_cash = document.getElementById("current_cash");
let total_acc = 0
let total_cash = 0
let line = 0

function Change(){
    total_acc = parseFloat(current_account.value)
    total_cash = parseFloat(current_cash.value)
    line += 1
    text_area.value += `${line}, Current account balance: ${total_acc}, Current cash balance: ${total_cash}\n`
}

const option = document.getElementById("select")
const money = document.getElementById("Deposit/Withdraw")

function Deposit(){
    total_acc += parseFloat(money.value)
    total_cash -= parseFloat(money.value)
    line += 1
    text_area.value += `${line}, Deposit : ${money.value} Current account balance: ${total_acc}, Current cash balance: ${total_cash}\n`
}

function Withdraw(){
    total_acc -= parseFloat(money.value)
    total_cash += parseFloat(money.value)
    line += 1
    text_area.value += `${line}, Withdraw : ${money.value}, Curren account balance: ${total_acc}, Current cash balance: ${total_cash}\n`
}

function Proceed(){
    if (option.value == "Deposit" && total_cash - money.value >= 0){
        Deposit()
    }else if (option.value == "Withdraw" && total_acc - money.value >= 0){
        Withdraw()
    }else{
        text_area.value += `ERROR \n`
    }

}