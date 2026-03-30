let names = ["Akinyi", "Atieno", "Temi", "Evans", "Jeremiah"]
function lessthan6(arr) {
    return arr.filter(item => item.length >= 6);
}
const words = ["Gracey", "Akinyi", "Mitchel", "Vivian", "Paul"]
console.log(lessthan6(words));