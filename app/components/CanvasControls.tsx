import {Color} from "../layout";

export function CanvasControls({onColorChange, onSizeChange, eventEmitter}): JSX.Element {
    const colors: Array<Object> = [{
        id: 0,
        value: Color.black
    }, {
        id: 1,
        value: Color.red
    }, {
        id: 2,
        value: Color.orange
    }, {
        id: 3,
        value: Color.yellow
    }, {
        id: 4,
        value: Color.green
    }, {
        id: 5,
        value: Color.blue
    }, {
        id: 6,
        value: Color.purple
    }];

    const onPickColor: Function = (e: MouseEvent): void => {
        if (e.currentTarget instanceof HTMLElement) {
            const element: HTMLElement = e.currentTarget;
            const color: string = getComputedStyle(element).getPropertyValue('background-color');
            onColorChange(color);
        }
    }

    const onPickSize: Function = (e: MouseEvent): void => {
        if (e.currentTarget instanceof HTMLInputElement) {
            const element: HTMLInputElement = e.currentTarget;
            const size: number = Number(element.value);
            onSizeChange(size);
        }
    }

    const onClearCanvas: Function = (e: MouseEvent): void => {
        eventEmitter.emit("clearCanvas", e);
    }

    const colorItems: Array<JSX.Element> = colors.map(color => <li onClick={onPickColor} key={color.id} className={`color-sample ${color.value}`}></li>);

    return (
        <div className="flex justify-content-evenly mxy-1">
            <ul className="mt-1">
                {colorItems}
            </ul>
            <input type="range" id="thickness-slider" min="1" max="20" defaultValue={"1"} onChange={onPickSize} />
            <div className="flex justify-content-center">
                <button onClick={onClearCanvas} className="button button-primary">Effacer</button>
            </div>
        </div>
    )
}