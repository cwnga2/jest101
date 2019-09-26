const getRandomNumber  = () => {
  return parseInt(Math.random() * 1000)
}
const returnRandomNumber = () => {
  return getRandomNumber()
}


const add = (a, b) => {
  return a+b
}

const asyncRandomNumber = async () => {
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve(  getRandomNumber())
    } , 2000)
  })
}

const callbackRandomNumber = async (cb) => {
  setTimeout (() => {
    cb && cb( getRandomNumber())
  }, 2000)
}

const ifFunc = (tmp) => {
  if (tmp === 'a') {
    return 1
  } else  if (tmp === 'b') {
    return 2
  } else {
    return 3
  }
}

module.exports = {
  returnRandomNumber,
  asyncRandomNumber,
  callbackRandomNumber,
  add,
  ifFunc
}

