function oneThroughTwenty() {
  let array = []
  for (i=1; i< 21; i++ ) {
    array.push(i)
  }  
  return console.log(array)
}
oneThroughTwenty()
//call function oneThroughTwenty

function evensToTwenty() {
    
   let array2=[]
  for (i=1; i< 21; i++ ) {
    if (i%2==0) {
    array2.push(i)}
  }  
  return console.log(array2)
}
evensToTwenty()

//call function evensToTwenty

function oddsToTwenty() {
    
  let array3=[]
  for (i=1; i< 21; i++ ) {
    if (i%2==1) {
    array3.push(i)}
  }  
  return console.log(array3)
   
}
oddsToTwenty()

//call function oddsToTwenty

function multiplesOfFive() {
    
let arrayMultiples = []
for (i=1; i < 21; i++ ) {
  
  arrayMultiples.push(i*5)
}
  return console.log(arrayMultiples)
}

multiplesOfFive()

//call function multiplesOfFive

function squareNumbers() {
    
  let arraySquare = []
  for (i=1; i < 11; i++ ) {
    
    arraySquare.push(i*i)
  }
    return console.log(arraySquare)
  }
  
  squareNumbers()
  
    


//call function squareNumbers

function countingBackwards() {
    
 let arrayCountingBackwards = []
  for (i=20; i > 0; i-- ) {
   
   arrayCountingBackwards.push(i)
   
   }
  return console.log(arrayCountingBackwards)
}
    
    countingBackwards()

//call function countingBackwards

function evenNumbersBackwards() {
    
  let arrayEven= []
  for (i=20; i > 0; i-- ) {
    if (i%2==0) {
   arrayEven.push(i)
   }
  
}
return console.log(arrayEven)
}
evenNumbersBackwards()

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
  let arrayOdd= []

  for (i=20; i > 0; i-- ) {
    if (i%2==1) {
   arrayOdd.push(i)
   }
}
return console.log(arrayOdd)
}
oddNumbersBackwards()
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
  let arrayMultiplesOf5= []

  for (i=20; i > 0; i-- ) {
    
   arrayMultiplesOf5.push(i*5)
   
}
return console.log(arrayMultiplesOf5)
}
multiplesOfFiveBackwards()

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let arraySquareBackwards= []

  for (i=10; i > 0; i-- ) {
    
   arraySquareBackwards.push(i*i)
   
}
return console.log(arraySquareBackwards)
}
squareNumbersBackwards()
//call function squareNumbersBackwards
