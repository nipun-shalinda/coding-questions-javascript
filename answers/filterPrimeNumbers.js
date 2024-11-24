function filterPrimeNumbers(arr) {

    let primeNumbers = [];

    arr.forEach((e) => {
        if(e > 1){
            let isPrime = true;
            for(let i=2; i< e; i++){
                if(e %i === 0){
                    isPrime = false
                    break
                }
            }
            if(isPrime){
                primeNumbers.push(e)
            }
            
        }
    })

    return primeNumbers
}