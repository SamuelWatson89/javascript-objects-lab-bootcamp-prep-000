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
  var newRecipe = Object.assign ({}, Cake)
  
  delete newCake[cake]
  
  return newCake
}

function destructivelyDeleteFromObjecyByKey(recipes, cake){
  return delete recipies.cake
}