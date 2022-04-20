function countQuantity(countId, isAdd){
    const countFieldElement = document.getElementById(countId);
    const countFieldValue = parseInt(countFieldElement.value);
    if(isAdd == true){
        const countNumber = countFieldValue + 1;
        countFieldElement.value = countNumber;
    }else{
        const countNumber = countFieldValue - 1;
        countFieldElement.value = countNumber;
    }
}

//samsung s22 handle event listener
document.getElementById('plus-s22').addEventListener('click', function(){
    countQuantity('count-s22', true);
});

document.getElementById('minus-s22').addEventListener('click', function(){
    countQuantity('count-s22', false);
});

//watch  handle event listener
document.getElementById('plus-watch').addEventListener('click', function(){
    countQuantity('count-watch', true);
});
document.getElementById('minus-watch').addEventListener('click', function(){
    countQuantity('count-watch', false);
});


//motoralaG5 handle event listener
document.getElementById('plus-g5').addEventListener('click', function(){
    countQuantity('count-g5', true);
});
document.getElementById('minus-g5').addEventListener('click', function(){
    countQuantity('count-g5', false);
});