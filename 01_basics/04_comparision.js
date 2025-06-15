console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log(2 > "1");
console.log("02" > 1);
console.log("2" >= 1);

console.log(2 < "1");
console.log("02" <= 1);

console.log("2" === 2);

// null => the reason is that an eqaulity check == and > ,< ,<= , >= work differently.
// comparisions convert null to a number , treating it as 0.
// that`s why (3) null >= 0 is true and (1) null > 0 is false.

console.log(null > 0);   
console.log(null >= 0);
console.log(null == 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
