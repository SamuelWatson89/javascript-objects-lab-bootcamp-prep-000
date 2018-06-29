var recipes = {
  
}

function updateObjectWithKeyAndValue(recipes, Cake, Flour){
  return Object.assign({}, recipes, { [Cake]: Flour })
}

