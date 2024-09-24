function isAdult(user) {
    return user.age >= 18;
}
var kang = {
    name: 'kk',
    age: 18
};
var isKKAdult = isAdult(kang);
console.log(isKKAdult);
