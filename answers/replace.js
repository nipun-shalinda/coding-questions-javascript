const str = 'hello world nipun'

function replce(str) {
    let replace = ''
    for(let i=0; i < str.length; i++){
        if(str[i] === ' '){
            replace += "_"
        }else {
            replace = str[i]
        }
    }
}