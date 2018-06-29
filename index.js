var recipes = {
  
}

function updateObjectWithKeyAndValue(recipes, banana, peel){
  console.log(recipes)
  return Object.assign({}, recipes, { [banana]: peel })
}

