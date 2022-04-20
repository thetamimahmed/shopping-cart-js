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