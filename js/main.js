
//B1
/**
 * B1: input diemChuan, diemkv, diemDT, number1, number2, number3, tongDiem
 * 
 * B2:nếu điểm 1 trong 3 môn bằng 0 thì in ra kq rớt
 * lấy tổng điểm 2 môn cộng với diemkv , diemDT
 * nếu tongDiem > diemChuan  thì in ra kq đậu
 * nhỏ hơn in ra kq rớt
 * 
 * B3: in ra kq màng hình
 * 
 */
function resultNumber() {
    var diemChuan = Number(document.getElementById("numberC").value);
    var diem1 = Number(document.getElementById("number1").value);
    var diem2 = Number(document.getElementById("number2").value);
    var diem3 = Number(document.getElementById("number3").value);
    var diemKV = document.getElementById("selectKV").value;
    var diemDT = document.getElementById("selectDT").value;
    var result = "";
    var kv ;
    var dt ;
    if( diemKV == "a"){
        kv = 2;
    }else if(diemKV == "b"){
        kv =1;
    }else if ( diemKV == "c"){
        kv = 0.5;
    }else{
        kv = 0;
    }

    if( diemDT == "dt1" ){
        dt = 2.5;
    }else if(diemDT == "dt2"){
        dt =1.5;
    }else if ( diemDT == "dt3"){
        dt = 1;
    }else{
        dt = 0;
    }
  
    console.log(kv, dt);
    var total = diem1 + diem2 + diem3 + kv + dt;

    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        result = " Bạn đã rớt do có điểm bằng 0";
    }else {
        if(total >= diemChuan){
            result = " Bạn đã đậu: " + total;
        }
        else{
            result= " Bạn đã rớt: " + total;
        }
    }
    document.getElementById("textb1").innerHTML = result;
}
document.getElementById("logB1").onclick = resultNumber;

//B2
/**
 * B1: nameKH, kw, giá tiền theo mốc
 * B2: tính tiền theo từng mốc 
 * nếu bằng 0 thì show alert
 * 
 * B3: in kq ra màng hình
 */
function electricityBill(){
    var nameKH = document.getElementById("name").value;
    var kw = Number(document.getElementById("numberKw").value);
    const FIST_50 = 500;
    const T51_100 = 650;
    const T101_200 = 850;
    const T200_350 = 1100;
    const TK = 1300;
    var totalE = 0;

    if(0<kw && kw <= 50 ){
        totalE = kw *FIST_50;
    }else if(50<kw && kw<=100){
        totalE = (50* FIST_50) + T51_100 * (kw-50);
    }else if( 100<kw && kw <= 200){
        totalE = (50* FIST_50) + (50* T51_100) + T101_200 *(kw-100);
    } else if( 200<kw && kw <= 350){
        totalE = (50 * FIST_50) + (50 * T51_100) + (100 * T101_200 ) + T200_350*( kw - 200);
    }else if( kw > 350){
        totalE = (50 * FIST_50) + (50 * T51_100) + (100 * T101_200 ) + (150 * T200_350) + TK*(kw-350);       
    }else{
        alert("Nhập số Kw sai");
    }
    document.getElementById("textb2").innerHTML ="Tên Khách Hàng: "+ nameKH +" ,Tổng tiền: " + totalE.toLocaleString();
}
document.getElementById("logB2").onclick = electricityBill;