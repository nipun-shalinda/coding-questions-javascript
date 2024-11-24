
//Q: return a dictionary of a string;

function dictionary(str){
    let dictionary = [];

    str.split('').forEach((e) => {

        let entryElement = dictionary.find(f => f.key === e)
        if(entryElement){
            entryElement.value ++
        }else {
            dictionary.push({key: e, value: 1})
        }
    })

    return dictionary;
}

function dictionary(str){

    dictionary = []

    for(let i=0; i< str.length; i++){
        let found =false
        if(dictionary.length > 0){
            for(char of dictionary){
                if(char.letter === str[i]){
                    char.count ++
                    found = true;
                }
            }
        }
        
        if(!found){
            dictionary.push({letter: str[i], count: 1})
        }
    }

    return dictionary;
}

function dictionary(str){
    let dictionary ={}
    
   for(let i of str){
        if(i in dictionary){
            dictionary[i] ++
        } else {
             dictionary[i] = 1
        }
   }
    return dictionary;
}

