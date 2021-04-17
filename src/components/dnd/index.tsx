import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DnDContainer from "./container";

const DnDContext = () =>  (
    <DndProvider backend={HTML5Backend}>
        <DnDContainer />
    </DndProvider>
);

export default DnDContext;