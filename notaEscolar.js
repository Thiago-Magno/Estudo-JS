function grades(grade) {
    
    let gradeA = grade <= 100 && grade >= 90
    let gradeB = grade <= 89 && grade >= 80
    let gradeC = grade <= 79 && grade >= 70
    let gradeD = grade <= 69 && grade >= 60
    let gradeF = grade < 60 && grade >= 0

    let finalGrade;

    if (gradeA) {
        finalGrade = "A" 
    } else if(gradeB){
        finalGrade = "A"
        
    }else if (gradeC) {
        finalGrade = "C"
        
    }else if (gradeD) {
        finalGrade = "D"
        
    }else if (gradeF) {
        finalGrade = "F"
        
    }else {
        finalGrade = "Nota inválida"
    }
    return finalGrade;
}
console.log(grades(71))
console.log(grades(70))
console.log(grades(81))
console.log(grades(80))
console.log(grades(91))
console.log(grades(90))
console.log(grades(100))
console.log(grades(101))
console.log(grades(60))
console.log(grades(61))
console.log(grades(-10))
