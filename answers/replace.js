const str = 'hello world nipun'
let replace = ''
function replce(str) {

    for(let i=0; i < str.length; i++){
        if(str[i] === ' '){
            replace += "_"
        }else {
            replace = str[i]
        }
    }
}