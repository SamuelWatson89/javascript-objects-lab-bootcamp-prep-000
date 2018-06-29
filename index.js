var recipes = {
  
}

function updateObjectWithKeyAndValue(recipes, cake, flour){
  return Object.assign({}, recipes, { [cake]: flour })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, cake, flour) {
  recipes[cake] = flour
  
  return recipes
}

function deleteFromObjectByKey (recipes, cake){
  var newCake = Object.assign ({}, newCake)
  
  delete newCake[cake]
  
  return newCake
}