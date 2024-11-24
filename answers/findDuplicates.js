
function findDuplicates(arr){
    let duplicates = []

    for(let i=0; i < arr.length; i++){
        for(let j=0; j< arr.length; j++) {
            if(arr[i] === arr[j] && i!==j && !duplicate.includes(arr[i])){
                duplicate.push(arr[i])
            }
        }
    }
    
    return duplicates;
}