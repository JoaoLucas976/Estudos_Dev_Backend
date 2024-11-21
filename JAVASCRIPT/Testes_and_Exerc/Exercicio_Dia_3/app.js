let value = Number(prompt('Enter the product value: '))
console.log(value)

if (value >= 20){
    document.getElementById('result').innerHTML = 'Approved'
} else {
    document.getElementById('result').innerHTML = 'Denied'
}