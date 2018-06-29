var recipes = {
  
}

function updateObjectWithKeyAndValue(recipes, cake, flour){
  return Object.assign({}, recipes, { [cake]: flour })
}

function destructivelyUpdateObjectWithKeyAndValue(recipe, Ccke, flour) {
  return delete recipes.cake
}