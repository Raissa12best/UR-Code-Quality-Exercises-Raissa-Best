// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1
// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Courtesy of rosettaco
const solution =(roman)=>{
const romanMap ={
I:1,      
V:5,
X:10,
L:50,
C:100,
D:500,
M:1000
 }
 let total = 0
const values = roman.split('').map((char)=>romanMap[char]) 
return values.reduce((acc,current,i)=>{
const next= values[i + 1]
return (next && current < next) ? acc - current : acc + current

 },0)      
}
console.log(solution("MDCLXVI" ))