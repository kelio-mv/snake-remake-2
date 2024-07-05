import { BLOCK_SIZE, MAP_SIZE } from "./constants.js";

const APPLE_COLOR = "#dc2626";
const APPLE_BORDER_COLOR = "#000";

class Apples {
  apple = this.create();

  static randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  create() {
    const [x, y] = [Apples.randint(1, MAP_SIZE - 2), Apples.randint(1, MAP_SIZE - 2)];
    return { x: (x + 0.5) * BLOCK_SIZE, y: (y + 0.5) * BLOCK_SIZE };
  }

  replace() {
    this.apple = this.create();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.apple.x, this.apple.y, BLOCK_SIZE / 2, 0, 2 * Math.PI);
    ctx.fillStyle = APPLE_COLOR;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.apple.x, this.apple.y, BLOCK_SIZE / 2 - 0.5, 0, 2 * Math.PI);
    ctx.strokeStyle = APPLE_BORDER_COLOR;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export default Apples;