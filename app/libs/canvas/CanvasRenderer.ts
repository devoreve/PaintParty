export default class CanvasRenderer {
    private _canvas: HTMLCanvasElement;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    public drawLine(origin: Point, end: Point, color: string = 'black', size: number = 1, cap: CanvasLineCap = 'butt'): void {
        const context = this.canvas.getContext('2d');

        context.beginPath();
        context.moveTo(origin.x, origin.y);
        context.lineTo(end.x, end.y);
        context.strokeStyle = color;
        context.lineWidth = size;
        context.lineCap = cap;
        context.stroke();
    }

    public clear(): void {
        this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public get canvas() {
        return this._canvas;
    }

    public set canvas(canvas) {
        this._canvas = canvas;
    }
}