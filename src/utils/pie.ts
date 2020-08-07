function drawPieSlice(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.beginPath();
  // move to(centerx, centery)
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);

  ctx.stroke();
}

interface Options {
  canvas: HTMLCanvasElement;
  data: any;
  colors: string[];
  doughnutHoleSize: number;
}

export class PieChart {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  colors: string[];

  constructor(public options: Options) {
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext('2d')!;
    this.colors = options.colors;
  }

  draw() {
    let totalValue = 0;
    let colorIndex = 0;
    let categ;
    let val;
    for (categ of this.options.data) {
      val = categ;
      totalValue += val;
    }

    let startAngle = 0;
    for (categ of this.options.data) {
      val = categ;
      const sliceAngle = (2 * Math.PI * val) / totalValue;

      drawPieSlice(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        // radius
        Math.min(this.canvas.width / 2 - 2.5, this.canvas.height / 2 - 2.5),
        startAngle,
        startAngle + sliceAngle,
        this.colors[colorIndex % this.colors.length]
      );

      startAngle += sliceAngle;
      colorIndex++;
    }
  }
}
