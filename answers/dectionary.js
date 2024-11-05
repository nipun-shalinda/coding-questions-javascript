
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