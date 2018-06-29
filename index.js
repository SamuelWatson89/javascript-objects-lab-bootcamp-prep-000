var recipes = {
  
}

function updateObjectWithKeyAndValue(recipes, banana, peel){
  return Object.assign({}, recipes, { [banana]: peel })
  
  console.log(recipes)
}

