import {useEffect, useRef} from "react";
import {getMousePosition} from "../utils/mouseLocator";
import CanvasRenderer from "../libs/canvas/CanvasRenderer";

export function Canvas({width, height, color, size, eventEmitter}): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRenderer = new CanvasRenderer(canvasRef.current);
    let isDrawing: boolean = false;
    let lastPosition: Point;

    useEffect(() => {
        const clearCanvasListener: Function = () => {
            canvasRenderer.canvas = canvasRef.current;
            canvasRenderer.clear();
        };

        eventEmitter.on("clearCanvas", clearCanvasListener);

        return () => {
            eventEmitter.off("clearCanvas", clearCanvasListener);
        };
    }, [eventEmitter, canvasRenderer]);


    const startDrawing: Function = (e: MouseEvent): void => {
        isDrawing = true;
        lastPosition = getMousePosition(canvasRef.current, e);
        draw(e);
    };

    const draw: Function = (e: MouseEvent): void => {
        if (!isDrawing) return;

        canvasRenderer.canvas = canvasRef.current;
        const newPosition: Point = getMousePosition(canvasRenderer.canvas, e);
        canvasRenderer.drawLine(lastPosition, newPosition, color, size, 'round');

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