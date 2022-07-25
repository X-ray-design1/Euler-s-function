function phi(n){
    let clean = [... new Set(prime_factors(n))]
    if(clean.length == 1 && prime_factors(n).length > 1){
        return (+clean) ** prime_factors(n).length - (+clean) ** (prime_factors(n).length - 1)
    }
    if(isPrime(n) && prime_factors(n).length == 1) return n - 1
    let uniquePrimes = [...new Set(prime_factors(n))]
    return uniquePrimes.reduce((acc, el) => acc * (el ** (prime_factors(n).lastIndexOf(el) - prime_factors(n).indexOf(el) + 1) - el ** (prime_factors(n).lastIndexOf(el) - prime_factors(n).indexOf(el))), 1)
}


function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0 ) return false
    }
    return n > 1
}

function prime_factors(n){
    if(n == 1) return []
    let arr = []
    let q = n
    for(let i = 2; i < q; i++){
        if(n % i == 0){
            while(n % i == 0){
                arr.push(i)
                n /= i
            }
        }
    }
    if(arr.length == 0){
        return [n]
    }
    return arr
};



