const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

// 落ちるブロック
let block = {
  x: 4,
  y: 0
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(
    block.x * BLOCK_SIZE,
    block.y * BLOCK_SIZE,
    BLOCK_SIZE,
    BLOCK_SIZE
  );
}

function update() {
  block.y++;
  draw();
}

// 0.5秒ごとに落ちる
setInterval(update, 500);
