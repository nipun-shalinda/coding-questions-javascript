function union(arr_1, arr_2) {

    return [...new Set([...arr_1, ...arr_2])]
}

function interest(arr_1, arr_2){

    const interest = arr_1.filter(e => arr_2.includs(e))
}