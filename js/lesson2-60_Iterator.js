let authors = {
  allAuthors: {
    fiction: ['Agla', 'Skks', 'LP'],
    scienceFiction: ['Neal', 'Arthru', 'Ribert'],
    fantasy: ['JR.Tole', 'J.M.R', 'Terry P.K']
  },
  Address: []
}
let result = []
// for (let [, v] of Object.entries(authors.allAuthors)) {
//   result = result.concat(v)
// }

for (let v of authors) {
  result.push(v)
}
console.log(result)
