import {CanvasContainer} from "../../components/CanvasContainer";
import {ChatContainer} from "../../components/ChatContainer";

export default function Page(): JSX.Element {
    return (
        <>
            <h1 className="text-center">Paint Party !</h1>
            <div className="flex flex-wrap justify-content-center align-items-center mt-2">
                <CanvasContainer />
                <ChatContainer />
            </div>
        </>
    );
}