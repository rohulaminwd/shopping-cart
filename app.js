// add cart function

function addCart(id1, id2, id3){
    const phone = document.getElementById(id1);
    let phoneValu =parseInt(phone.value);
    const total = document.getElementById(id2);

    if(id3 == true){
        phone.value = phoneValu + 1;
    }
    else if(id3 == false && phone.value > 0){
        phone.value = phoneValu - 1;
    }

    if(id2 == 'phone-total'){
        total.innerText = 1219 * phone.value;
    }else{
        total.innerText = 59 * phone.value;
    }

    totalprice();
}

function totalprice(){
    const phoneTotal = document.getElementById('phone-total');
    const caseTotal = document.getElementById('case-total');

    const subTotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    const tax = document.getElementById('tax');

    subTotal.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
    tax.innerText = parseInt(subTotal.innerText / 100);
    total.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText) + parseInt(tax.innerText); 
}
