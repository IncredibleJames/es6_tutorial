function test (bool) {
  if (bool) {
    return new Promise((resolve, reject) => {
      resolve(30)
    })
  } else {
    return Promise.reject(new Error('error occured'))
  }
}
test(1).then((value) => {
  console.log(value)
}, (err) => {
  console.log(err)
})
