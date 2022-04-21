function countQuantity(countId, isAdd, priceId, price){
    const countFieldElement = document.getElementById(countId);
    let countFieldValue = parseInt(countFieldElement.value);
    if(isAdd == true){
        countFieldValue  = countFieldValue + 1;
        countFieldElement.value = countFieldValue;
    }else{
        countFieldValue = countFieldValue - 1;
        countFieldElement.value = countFieldValue;
    }
    countFieldValue = countFieldElement.value;
    //price calculate
    const productPriceElement = document.getElementById(priceId);
    const productPrice = countFieldValue * price;
    productPriceElement.innerText  = productPrice;
    calculatePrice()
}
function getCountValue(product){
    const countInput = document.getElementById('count-' + product);
    const countValue = parseInt(countInput.value);
    return countValue
}

function calculatePrice(){
    const s22Quantity = getCountValue('s22');
    const watchQuantity = getCountValue('watch');
    const g5Quantity = getCountValue('g5');
    const s22Price = s22Quantity * 1132;
    const WatchPrice = watchQuantity * 732;
    const g5Price = g5Quantity * 562;
    // const subTotalElement = document.getElementById('subtotal');
    const subTotal = s22Price + WatchPrice + g5Price;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
}

//samsung s22 handle event listener
document.getElementById('plus-s22').addEventListener('click', function(){
    countQuantity('count-s22', true, 's22-price', 1132);
});

document.getElementById('minus-s22').addEventListener('click', function(){
    countQuantity('count-s22', false, 's22-price', 1132);
});

//watch  handle event listener
document.getElementById('plus-watch').addEventListener('click', function(){
    countQuantity('count-watch', true, 'watch-price', 732);
});
document.getElementById('minus-watch').addEventListener('click', function(){
    countQuantity('count-watch', false, 'watch-price', 732);
});


//motoralaG5 handle event listener
document.getElementById('plus-g5').addEventListener('click', function(){
    countQuantity('count-g5', true, 'g5-price', 562);
});
document.getElementById('minus-g5').addEventListener('click', function(){
    countQuantity('count-g5', false, 'g5-price', 562);
});