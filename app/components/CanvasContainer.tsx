'use client';

import {Canvas} from "./Canvas";
import {CanvasControls} from "./CanvasControls";
import {useState} from "react";
import EventEmitter from "events";

export function CanvasContainer() {
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(1);
    const [eventEmitter, setEventEmitter] = useState(new EventEmitter());

    function changeColor(newColor: string) {
        setColor(newColor);
    }

    function changeSize(newSize: number) {
        setSize(newSize);
    }

    return (
        <section className="flex column">
            <Canvas color={color} size={size} width={640} height={480} eventEmitter={eventEmitter} />
            <CanvasControls onColorChange={changeColor} onSizeChange={changeSize} eventEmitter={eventEmitter} />
        </section>
    );
}