function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
return [element,...array]
  }


function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array

  array.unshift (element)
  return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {

array.push(element)
}

function accessElementInArray(array, index) {
array.shift(element)
return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.pop(element)
return array
}


function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1)
}
