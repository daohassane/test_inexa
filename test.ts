function returnNumber(a: number): any {
    if(a < 1 || a > 100) {
        console.log(`Erreur le nombre doit etre entre 1 et 100`)
        return
    }

    if((a%15) === 0) {
        console.log('fizzbuzz')
        return
    }

    if((a%3) === 0) {
        console.log('fizz')
        return
    }

    if((a%5) === 0) {
        console.log('buzz')
        return
    }

    console.log(`${a}`)
}
