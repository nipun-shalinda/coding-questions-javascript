function findBoysCount(arr) {

    let boysCount = 0;

        arr.forEach((e) => {
            if(e.gender === 'boy'){
                boysCount ++
            }
        })
        return boysCount;

    }