function toTitlecase(str){

    return str.split('').map(e => e.charAt(0).toUpperCase() + str.slice(1)).join('')

}

function toTitleCase(str){
    let titlecase = ''

    for(i=0; i< str.length; i++){
        if(i === 0 || str[i -1] === ' '){
            titlecase += str[i].toUpperCase()
        }else {
            titlecase += str[i]
        }
    }
    return titlecase
}