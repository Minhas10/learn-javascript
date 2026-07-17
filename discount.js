let cartTotal=1500;
const member=true;

if(cartTotal>1000 && member){
    const discount=(cartTotal*20/100)
    console.log("Discount:",discount)
    console.log(cartTotal-discount)
    
    // console.log(cartTotal*20%);
}
else if(cartTotal>1000){
     const discount=(cartTotal*10/100)
    
    console.log("Discount:",discount)
    console.log("Final price:",cartTotal-discount)
}
else{
    console.log(cartTotal);
}