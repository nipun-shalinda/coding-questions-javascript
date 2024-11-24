
const arr = [1,2,3,4,5,8,10]
function findMissing() {
let missingValues = []

    for(let i=Math.min(...arr); i< Math.max(...arr); i++) {
        if(!arr.includes(i)){
            missingValues.push(i)
        }
    }

    return missingValues;
}

function findMissingValus(arr) {

    let missing = [];
    for(let i=1; i<= 10; i++){
        let found = false
        for(val of arr){
            if(val === i){
                found = true;
                break;
            }
        }
        if(!found){
            missing.push(i)
        }
    }
    return missing
}