function sieve_of_Eratosthenes(n){
    let arr = Array(n).fill(0).map(el => el = true)
    for(let i = 2; i * i < arr.length; i++){
        if(arr[i]){
            for(let j = i; j * i < arr.length; j++){
                arr[i * j] = false
            }
        }
    }
    let count = 0
    for(let i = 2; i < arr.length; i++){
        if(arr[i]) count++
    }
    return count
}