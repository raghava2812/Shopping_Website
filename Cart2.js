let countnos = 1;

function increment() {
    countnos = countnos + 1;
    document.getElementById('countno').innerHTML = countnos;
    document.getElementById('amt1').innerHTML = 'Rs. ' + countnos * 21999;
    updatetotal();
    qtytotal();
}

function decrement() {
    if (countnos < 1) {
        alert('Sorry..! Item Quantity cannot be Nill in Cart');
        countnos = 1;
        document.getElementById('amt1').innerHTML = 'Rs. ' + 21999;
    } else {
        document.getElementById('countno').innerHTML = countnos;
        document.getElementById('amt1').innerHTML = 'Rs. ' + countnos * 21999;
    }
    countnos = countnos - 1;
    updatetotal();
    qtytotal();
}

let countnos1 = 1;

function increment1() {
    countnos1 = countnos1 + 1;
    document.getElementById('countno1').innerHTML = countnos1;
    document.getElementById('amt2').innerHTML = 'Rs. ' + countnos1 * 499;
    updatetotal();
    qtytotal();
}

function decrement1() {
    if (countnos1 < 1) {
        alert('Sorry..! Item Quantity cannot be Nill in Cart');
        countnos1 = 1;
        document.getElementById('amt2').innerHTML = 'Rs. ' + 499;
    } else {
        document.getElementById('countno1').innerHTML = countnos1;
        document.getElementById('amt2').innerHTML = 'Rs. ' + countnos1 * 499;
    }
    countnos1 = countnos1 - 1;
    updatetotal();
    qtytotal();
}

let countnos2 = 1;

function increment2() {
    countnos2 = countnos2 + 1;
    document.getElementById('countno2').innerHTML = countnos2;
    document.getElementById('amt3').innerHTML = 'Rs. ' + countnos2 * 2299;
    updatetotal();
    qtytotal();
}

function decrement2() {
    if (countnos2 < 1) {
        alert('Sorry..! Item Quantity cannot be Nill in Cart');
        countnos2 = 1;
        document.getElementById('amt3').innerHTML = 'Rs. ' + 2299;
    } else {
        document.getElementById('countno2').innerHTML = countnos2;
        document.getElementById('amt3').innerHTML = 'Rs. ' + countnos2 * 2299;
    }
    countnos2 = countnos2 - 1;
    updatetotal();
    qtytotal();
}

let countnos3 = 1;

function increment3() {
    countnos3 = countnos3 + 1;
    document.getElementById('countno3').innerHTML = countnos3;
    document.getElementById('amt4').innerHTML = 'Rs. ' + countnos3 * 1999;
    updatetotal();
    qtytotal();
}

function decrement3() {
    if (countnos3 < 1) {
        alert('Sorry..! Item Quantity cannot be Nill in Cart');
        countnos3 = 1;
        document.getElementById('amt4').innerHTML = 'Rs. ' + 1999;
    } else {
        document.getElementById('countno3').innerHTML = countnos3;
        document.getElementById('amt4').innerHTML = 'Rs. ' + countnos3 * 1999;
    }
    countnos3 = countnos3 - 1;
    updatetotal();
    qtytotal();
}

function updatetotal() {
    var priceElement = document.getElementById('amt1')
    var prisea1 = parseFloat(priceElement.innerText.replace('Rs. ', ''))
    var priceElement = document.getElementById('amt2')
    var prisea2 = parseFloat(priceElement.innerText.replace('Rs. ', ''))
    var priceElement = document.getElementById('amt3')
    var prisea3 = parseFloat(priceElement.innerText.replace('Rs. ', ''))
    var priceElement = document.getElementById('amt4')
    var prisea4 = parseFloat(priceElement.innerText.replace('Rs. ', ''))
    var totalprice = prisea1 + prisea2 + prisea3 + prisea4;
    var convertedprice = totalprice.toLocaleString('en-IN')
    document.getElementById('costtot').innerHTML = 'Rs. ' + convertedprice;
}

function qtytotal() {
    var qtyElement = document.getElementById('countno')
    var qtya1 = parseFloat(qtyElement.innerText.replace('Count: ', ''))
    var qtyElement = document.getElementById('countno1')
    var qtya2 = parseFloat(qtyElement.innerText.replace('Count: ', ''))
    var qtyElement = document.getElementById('countno2')
    var qtya3 = parseFloat(qtyElement.innerText.replace('Count: ', ''))
    var qtyElement = document.getElementById('countno3')
    var qtya4 = parseFloat(qtyElement.innerText.replace('Count: ', ''))
    var totalqty = qtya1 + qtya2 + qtya3 + qtya4;
    document.getElementById('qtytot').innerHTML = 'Count: ' + totalqty;
}

function checkout() {
    if (confirm('Do you want to Proceed?\nPlease Press OK to Confirm')) {
        window.location.href = "/HTML_CSS/Shopping_Website/checkout.html";
    } else {
        if (confirm('Are you Sure?')) {
            alert('Cancelled...');
        } else {
            window.location.href = "/HTML_CSS/Shopping_Website/main2.html";
        }
    }
}