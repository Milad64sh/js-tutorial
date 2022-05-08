function getElement (selection){
  const element = document.querySelector(selection);
  if(element){
    return element
  }
  throw new Error(`please check "${selection}", no such element exists`);
}
