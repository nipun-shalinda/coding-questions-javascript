function toTitlecase(str){

    return str.split('').map(e => e.charAt(0).toUpperCase() + str.slice(1)).join('')

}