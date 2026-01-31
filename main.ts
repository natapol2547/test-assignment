const roman_numerals = [
    { value: 1000, symbol: "M" },
    { value: 500, symbol: "D" },
    { value: 100, symbol: "C" },
    { value: 50, symbol: "L" },
    { value: 10, symbol: "X" },
    { value: 5, symbol: "V" },
    { value: 1, symbol: "I" },
]

function number_to_roman(num: number): string {
    let result = "";
    for (const roman of roman_numerals) {
        while (num >= roman.value) {
            result += roman.symbol;
            num -= roman.value;
        }
    }
    return result;
}

console.log(number_to_roman(1903));