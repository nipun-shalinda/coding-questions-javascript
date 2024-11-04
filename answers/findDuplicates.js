
function findDuplicates(arr){
    let duplicates = []

    for(let i=0; i < arr.length; i++){
        for(let j=i; j< arr.length; j++) {
            if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
                duplicate.push(arr[i])
            }
        }
    }
    
    return duplicates;
}