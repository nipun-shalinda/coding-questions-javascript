input = [{name: 'cdcd', age: 32, place: 'jj'}, {name: 'cdcd', age: 22, place: 'jj'}, {name: 'cdcd', age: 82, place: 'jj'}]
output = [32, 22, 82]
        
    function objectArrFilter(arr) {

        // const ageArr =[]

        // input.forEach((e) => {
        //  ageArr.push(e.age)
        // })
        const ageArr = input.map(e => e.age)
        

        return ageArr.sort()
    }