
// 开始按钮
document.getElementById("btnStart").onclick = function () {timing()
};

// 闪函数
function startPlay() {
    let arr = ['y1', 'y2', 'y3',
        'y4', 'y5', 'y6',
        'y7', 'y8', 'y9'];
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.backgroundColor = "#fea500";
    }

    var grid1;
    var grid2;
    var grid3;
    while (true) {
        const num1 = Math.floor(Math.random()*arr.length);
        const num2 = Math.floor(Math.random()*arr.length);
        const num3 = Math.floor(Math.random()*arr.length);
        grid1 = arr[num1];
        grid2 = arr[num2];
        grid3 = arr[num3];

        if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
            console.log(num1);
            console.log(num2);
            console.log(num3);
            document.getElementById(grid1).style.backgroundColor= "#f00";
            document.getElementById(grid2).style.backgroundColor= "#0f0";
            document.getElementById(grid3).style.backgroundColor= "#00f";
            return;
        }

    }
}

// 定时闪函数， 函数不用加括号
var id;
function timing() {
    id = window.setInterval(startPlay, 1000);
}

// 结束闪函数
document.getElementById("btnStop").onclick = function () { stopPlay() };
function stopPlay() {
    let arr = ['y1', 'y2', 'y3',
        'y4', 'y5', 'y6',
        'y7', 'y8', 'y9'];
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.backgroundColor = "#fea500";
    }

    // 结束定时闪函数
    window.clearInterval(id);
}