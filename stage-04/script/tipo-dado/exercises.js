// 1
let weight

// 2
console.log(typeof weight)

// 3
let Name = "leandro"
let age = 23
let stars = 4.8
let isSubscribed = true

// 4
let student = {}
console.log(typeof student)

// 4.1
student = {
  Name: "leandro",
  age: 23,
  weight: 79.5,
  isSubscribed: true,
};

console.log(student)

// 4.2
console.log(`${Name} tem ${age} anos e pesa ${weight} kgs.`)

// 5
let students = []

// 6
students = [
  student
]

// 7
console.log(students[0])

// 8
const student2 = {
  Name: "john",
  age: 23,
  weight: 79.5,
  isSubscribed: true,
}

students[1] = student2
console.log(students)
// 9
console.log(a)
var a = 1
// R: O código acima é um exemplo de hoisting (é a forma como o JS move todas as declarações para o topo do escopo antes de começar a executar um código). Isso acontece apenas com var pois ele é do escopo global.