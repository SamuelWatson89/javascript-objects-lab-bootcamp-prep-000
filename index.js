var recipes = {
  
}

function updateObjectWithKeyAndValue(recipes, cake, flour){
  return Object.assign({}, recipes, { [cake]: flour })
}

function destructivelyUpdateObjectWithKeyAndValue(recipe, cake, flour) {
  recipes[cake] = 'flour'
  
  return recipes
}