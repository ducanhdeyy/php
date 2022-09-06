// //Khai báo biến
// var fullName = 'Nguyen Duc Anh'
// var age = 26;
// alert(fullName);
// alert(age);
/*Một số hàm build-in
1. alert
2. console
3.  confirm
4.  prompt
5.
6.set interval
*/
// var fullName = 'Nguyen Duc Anh';
2.
// console.log(fullName)
// console.warn('fullName');
// console.warn(fullName);
3.
// confirm('Xac nhan ban du tuoi!');
4.
// prompt('Xac nhan ban du tuoi!');
5.
// setTimeout(function() {
//     alert('thong bao');
// }, 1000);
6.
// setInterval(function() {
//     console.log('thong bao');
// }, 1000);
/**
 Giới thiệu về toán tử trong js
 1. Toán tử số học
 2. Toán tử gán
 3. Toán tử so sánh
 4. Toán tử logic
 */
/*
1.
var a = 1 + 2;
console.log(a);
2.
var fullName = 'Nguyen Duc Anh';
console.log(fullName);
3.
var a = 2;
var b = 3;
if (a < b) {
    console.log('Anh');
}
4.
var a = 1;
var b = 2;
if (a > 0 && b > 0) {
    console.log('a & b lon hon 0');
}
*/
/*
// if - else
if (false) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}
*/
/*
Kiểu dữ liệu trong Js
1. Dữ liệu nguyên thủy
-Number 
var a = 1;
var b = 2;
-String
var fullName = 'Duc Anh';
console.log(fullName);
-Boolean
var isSuccess = false/true
-undefined
var age;
console.log(age);
-null
var isNull = null;
-Symbol
var id = Symbol('id');
2. Dữ liệu phức tạp
-function
-Object
*/
var fullName = 'Nguyen Duc Anh'
console.log(fullName.length); //dem ki tu
var firstName = 'Nguyen';
var lastName = 'Duc Anh';
console.log(`Toi la: ${firstName} ${lastName}`); //nối chuỗi

//Mảng trong Js - Array
var languages = [
    'javascrips',
    'PHP',
    'Ruby',
    'Dart',
    null,
    undefined,
    function() {

    },
    {},
    123
];
console.log(languages);
console.log(typeof languages); //kiểu dữ liệu
console.log(Array.isArray(languages)); //kiểm tra xem có phải là array hay không
console.log(languages.length);
console.log(languages[0]); //hiển thị phần tử trong mảng

// Hàm trong Js(function)
function showDialog() {
    //code
    console.log('Hi, xin chao cac ban');
}
showDialog();
// Các loại function
function showMessage() {
    console.log('Declaration function');
}

var showMessage2 = function() {
    console.log('Expression function');
}
showMessage();
// Object trong Js
var emailKey = 'lanhnhubang2k2@gmail.com'
var myInfo = {
    name: 'Duc Anh',
    age: 18,
    address: 'Ha Noi, VN'
        // [emailKey]: 'lanhnhubang2k2@gmail.com' //thêm key và value cách 2
};

myInfo.email = 'lanhnhubang2k2@gmail.com'; //thêm key và values mới vào trong Obj
console.log(myInfo);
console.log(myInfo.name); //lấy value(nếu k có key thì sẽ trả ra udf);
var myKey = 'address';
console.log(myInfo[myKey]);