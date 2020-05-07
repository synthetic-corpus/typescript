// How to do an class in Typescript?
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'John',
    age: 21,
    role: Role.ADMIN
}

console.log("Working Enums now")
console.log(person)