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