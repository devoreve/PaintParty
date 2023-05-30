import {useEffect, useRef} from "react";
import {getMousePosition} from "../utils/mouseLocator";
import CanvasRenderer from "../libs/canvas/CanvasRenderer";

export function Canvas({width, height, color, size, eventEmitter}): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRendererRef = useRef<CanvasRenderer>(null);
    let isDrawing: boolean = false;
    let lastPosition: Point;

    useEffect(() => {
        const canvas = canvasRef.current;
        canvasRendererRef.current = new CanvasRenderer(canvas);

        const resizeCanvas: Function = () => {
            const screenWidth = window.innerWidth;
            const maxWidth = 640;

            if (screenWidth < maxWidth) {
                canvas.width = screenWidth;
                canvas.height = screenWidth * 0.75;
            } else {
                canvas.width = width;
                canvas.height = height;
            }
        };

        const clearCanvasListener: Function = () => {
            canvasRendererRef.current.canvas = canvas;
            canvasRendererRef.current.clear();
        };

        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);
        eventEmitter.on("clearCanvas", clearCanvasListener);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            eventEmitter.off("clearCanvas", clearCanvasListener);
        };
    }, [eventEmitter]);


    const startDrawing: Function = (e: MouseEvent): void => {
        isDrawing = true;
        lastPosition = getMousePosition(canvasRef.current, e);
        draw(e);
    };

    const draw: Function = (e: MouseEvent): void => {
        if (!isDrawing) return;

        canvasRendererRef.current.canvas = canvasRef.current;
        const newPosition: Point = getMousePosition(canvasRendererRef.current.canvas, e);
        canvasRendererRef.current.drawLine(lastPosition, newPosition, color, size, 'round');

        lastPosition = newPosition;
    };

    const stopDrawing: Function = (e: MouseEvent): void => {
        isDrawing = false;
    };

    return (
        <canvas className="canvas panel" width={width} height={height} ref={canvasRef} onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing} onMouseOut={stopDrawing}></canvas>
    );
}