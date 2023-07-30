let familyFunds = {
    revenues:[2000, 3500, 1200],
    expenses:[1500, 879.80, 600.50]
} 

function sum(array) {
    let total = 0
    
    for (let value of array) {
        total += value
        console.log(total)
    }
    return total
}
function balance() {
    const totalRevenue = sum(familyFunds.revenues)
    const totalexpenses = sum(familyFunds.expenses) 

    let totalBalance = totalRevenue - totalexpenses
    
    const positive = totalBalance >= 0
    
    let message = "negativo"
    if (positive) {
        message = "positivo"    
    }

    console.log(`Seu saldo esta ${message}: R$${totalBalance.toFixed(2)}`)
}

balance()
