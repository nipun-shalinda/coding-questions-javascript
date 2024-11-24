input = ['123-33-4', '44, 15, 6', '3, 55, 100']
output = [122, 44, 100]
        
    function findMax(arr) {

        let height = [];

        arr.forEach((e) => {
            const numbers = e.split('-')

            const max = Math.max(...numbers);

            height.push(max)
        })

        return height;
    }

    //Method 2
    function findMax(arr){
        let maxArr = []
        arr.forEach((e) => {
            let  maxVal = 0
            e.split('-').forEach((f) => {
               num =  parseFloat(f)
                if(num > maxVal){
                    maxVal =num;
                }
            })
            
            maxArr.push(maxVal)
        })
    
        return maxArr
    }