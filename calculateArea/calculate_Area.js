// let Grocery_1;
// let Grocery_2;
// let Grocery_3;

function calculateArea(Grocery_1, Grocery_2, Grocery_3) {
    Grocery_1 = parseFloat(document.getElementById('Grocery-1').value);
    Grocery_2 = parseFloat(document.getElementById('Grocery-2').value);
    Grocery_3 = parseFloat(document.getElementById('Grocery-3').value);


    let total = Grocery_1 + Grocery_2 + Grocery_3;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}
