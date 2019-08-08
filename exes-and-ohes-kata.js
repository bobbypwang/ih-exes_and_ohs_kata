function XO(str) {
    let lowCase = str.toLowerCase();
    
    let xQty = lowCase.split('x').length-1;
    let oQty = lowCase.split('o').length-1;
    
    return xQty === oQty;
}