const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
// ctx.fillRect(50, 50, 100, 200);
// ctx.rect(50, 50, 100, 100);
ctx.moveTo(110, 150);
ctx.lineTo(390, 150);
ctx.stroke();
ctx.beginPath();

ctx.arc(390, 160, 10, 1.5 * Math.PI, 2 * Math.PI);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();

ctx.moveTo(400, 160);
ctx.lineTo(400, 300);
ctx.lineTo(430, 350);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();

ctx.arc(420, 352, 10, 1.8 * Math.PI, 0.4 * Math.PI);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();

ctx.moveTo(423, 361);
ctx.lineTo(85, 361);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();

ctx.arc(85, 351, 10, 0.5 * Math.PI, 1.1 * Math.PI);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();

ctx.moveTo(75, 350);
ctx.lineTo(100, 300);
ctx.lineTo(100, 160);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();

ctx.arc(110, 160, 10, 1 * Math.PI, 1.5 * Math.PI);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();

// 키보드
ctx.moveTo(130, 305);
ctx.lineTo(370, 305);
ctx.lineTo(390, 345);
ctx.lineTo(110, 345);
ctx.lineTo(130, 305);
ctx.strokeStyle = "gray";
ctx.fillStyle = "rgba(0,0,0,0.3)";
ctx.stroke();
ctx.fill();
ctx.beginPath();

// 화면
ctx.moveTo(120, 160);
ctx.lineTo(380, 160);
ctx.lineTo(380, 290);
ctx.lineTo(120, 290);
ctx.lineTo(120, 160);
ctx.strokeStyle = "gray";
ctx.fillStyle = "rgba(0,0,0,0.7)";
ctx.stroke();
ctx.fill();
ctx.beginPath();

// 애플
ctx.moveTo(200, 220);
ctx.arc(215, 220, 15, 1 * Math.PI, 1.3 * Math.PI);
ctx.arc(215, 220, 15, 1.3 * Math.PI, 1.7 * Math.PI);
ctx.arc(235, 223, 7, 1.5 * Math.PI, 1.6 * Math.PI);
ctx.arc(250, 213, 7, 1.2 * Math.PI, 1.3 * Math.PI);
ctx.arc(258, 218, 15, 1.3 * Math.PI, 1.8 * Math.PI);
ctx.arc(260, 220, 15, 1.8 * Math.PI, 2 * Math.PI);
ctx.arc(265, 230, 10, 0 * Math.PI, 0.2 * Math.PI);
ctx.arc(260, 245, 10, 2 * Math.PI, 0.2 * Math.PI);
ctx.strokeStyle = "white";
// ctx.strokeStyle = "rgba(0,0,0,0.3)";
ctx.stroke();
ctx.beginPath();
