
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