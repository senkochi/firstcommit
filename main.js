// alert('Hello World!')
// console.log("Hello World!")
let number;
document.getElementById("mySubmit").onclick = function() {
    let i = 0; // Đặt lại i về 0 mỗi khi hàm được gọi
    let result = 0; // Đặt lại result về 0
    number = document.getElementById("myNumber").value; // Thêm "document."
    
    for (; i <= number; i++) {
        result += i;
    }

    document.getElementById("main").innerHTML = result;
}

