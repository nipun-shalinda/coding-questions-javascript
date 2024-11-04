function longestWord(str) {

    const words = str.split(' ')
       let longestWord = words[0]

       for(let i =0; i <words.length; i++ ){
           if(words[i].length > longestWord.length){
               longestWord = words[i]
           }
       }
       
   }