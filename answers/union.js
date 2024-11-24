function union(arr_1, arr_2) {
    return [...new Set([...arr_1, ...arr_2])]
}

function interest(arr_1, arr_2){

    const interest = arr_1.filter(e => arr_2.includs(e))
}

function interest(arr1, arr2){
    let interset =[]

    for( i of arr1){
        for(j of arr2)
        if(i === j){
            interset.push(i)
        }
    }
    return interset
}