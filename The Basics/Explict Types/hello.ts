function greet(person: string, date: Date){
  console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

greet('Lee', new Date());

export {};