/*Đề bài: kiểm tra tính hợp lệ của một email
* - Bắt đầu bằng một ký tự
* - Không chứa các ký tự đặc biệt
* - Có một ký tự @ ngăn cách tên email và domain
* - Domain phải hợp lệ
* */

function checkValidateEmail() {
    let input = prompt("Nhập email: ");
    let patt = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$;/;
    let str = patt.test(input);

    if(str === true){
        alert("Email " + input + " hợp lệ");
    }else{
        alert("Email " + input + " không hợp lệ");
    }
}

checkValidateEmail();