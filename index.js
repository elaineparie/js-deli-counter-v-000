
function takeANumber(katzDeliLine , name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${katzDeliLine.splice(0,1)}.`

}


function currentLine(line){
  if (!line.length){
    return "The line is currently empty."
  }

  const numbersAndNames = []

line.forEach(function(name, num){
  numbersAndNames.push(`${num + 1}. ${name}`)
})

return `The line is currently: ${numbersAndNames.join(', ')}`
}



// const numbersAndNames = []
//
// for (let i = 0, l = line.length; i < l; i++) {
//   numbersAndNames.push(`${i + 1}. ${line[i]}`)
// }
//
// return `The line is currently: ${numbersAndNames.join(', ')}`
// };
