function celsiusTOF(degree){
    const celsiusExistis = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if (!celsiusExistis && !fahrenheitExists) {
        throw new Error('Grau não identificado')    
    }
    //fluxo ideal
    let degreeUpdate = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C°'
    
    //fluxo alternativo
    if (celsiusExistis) {
         degreeUpdate = Number(degree.toUpperCase().replace("C", ""));
         formula = (celsius) => celsius* 9/5 + 32
         degreeSign = 'F'
    }

    return formula(degreeUpdate) + degreeSign

}

try {
    console.log(celsiusTOF('50F'))
    console.log(celsiusTOF('50c'))
    console.log(celsiusTOF('50z'))
} catch (error) {
    console.log(error)
}

//celsiusTOF()