const {
  returnRandomNumber,
  asyncRandomNumber,
  callbackRandomNumber,
  add,
  ifFunc
} = require('./functions.js')

const ClassA = require('./ClassA.js')

const test1 = async () => {

  let result = returnRandomNumber()
  result = result + await asyncRandomNumber()
  return new Promise((resolve, reject) => {
    callbackRandomNumber(
      (rn) => {
        result = result + rn
        resolve(result)
      }
    )
  })
}

const test2 = () => {
  return returnRandomNumber() + returnRandomNumber()
}

const test3 = () => {
  return add(1, 2)
}

const test4 = (a) => {
  return ifFunc(a)
}
module.exports = {test1, test2, test3, test4}
