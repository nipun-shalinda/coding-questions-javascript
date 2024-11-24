function repetednumberCount(arr) {

    let numberArr =[]

    arr.forEach((e) => {

        const found = numberArr.find(f => f.number === e)

        if(found){
            found.count ++
        }else {
            numberArr.push({number: e, count: 1})
        }

    })

    return numberArr.filter( e => e.count >1)

}