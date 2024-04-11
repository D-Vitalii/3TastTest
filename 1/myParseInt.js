function myParseInt(str) {
    str = str.trim();
    if (str === "") return NaN;
    let result = 0;
    for (const char of str) {
        const digit = char.charCodeAt(0) - 48;
        if (digit >= 0 && digit <= 9) {
            result = result * 10 + digit;
        } else {
            return NaN;
        }
    }
    return result;
}

console.log(myParseInt("123") + 1);
console.log(myParseInt("  123  ") + 2);
console.log(myParseInt("123abc") + 3);
console.log(myParseInt("") + 4); //NaN
console.log(myParseInt("999") + 5);