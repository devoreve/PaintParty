export function getMousePosition(element: HTMLElement, e: MouseEvent): Point {
    const rect: DOMRect = element.getBoundingClientRect();
    const scaleX: number = element.width / rect.width;
    const scaleY: number = element.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}