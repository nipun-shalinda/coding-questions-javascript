function firstNonRepeatingCharacter(str){
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j && !duplicate.includes(arr[i])) {
                duplicate.push(arr[i]);
            }
        }
    }

    for (let val of arr) {
        if (!duplicate.includes(val)) {
            return val;
        }
    }
}