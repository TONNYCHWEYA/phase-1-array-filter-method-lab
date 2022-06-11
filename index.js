// Code your solution here
function findMatching(array, name){
return array.filter(function(string){

  return ((string.toLowerCase()) === name.toLowerCase())
})
}
function fuzzyMatch(array, letters){
  return array.filter(function(letter){
    if(letter.indexOf(letters)===0){
      return true;
    }else if(letter.indexOf(letters) > 0){
      return false;
    }
  })
}
function matchName(array, string){
  return array.filter(function(element){
    return element.name === string
  })

}