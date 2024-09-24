type User = {
    name: string, 
    age: number
}

function isAdult(user: User): boolean {
    return user.age >= 18;
}

const kang = {
    name: 'kk', 
    age: 18
} satisfies User;

const isKKAdult = isAdult(kang);
console.log(isKKAdult)