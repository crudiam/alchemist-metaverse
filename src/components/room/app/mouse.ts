
import * as THREE from "three";
import { DIMENTIONS } from ".";

const OBJECTS = {
    OPEN_BOOK: 'open_book_2',
    DOCUMENTATION: 'Cube',
}

const HOVER_EFFECTS = {
    IN: (elem) => (elem.position.z -= 0.1),
    OUT: (elem) => (elem.position.z += 0.1),
}


export function setupMouseListeners(camera, scene): () => void {
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const hoveredObjects = {};
    /**
     * @todo: setup a proper state management
     */
    const state = {
        hovered: { openBook: false, documentation: false },
        display: { openBook: false, documentation: false }
    };

    raycaster.layers.enable(1);

    const onMouseMove = (event) => {
        if (state.display.openBook || state.display.documentation) {
            return;
        }

        mouse.x = (event.clientX / DIMENTIONS.WIDTH) * 2 - 1;
        mouse.y = (event.clientY / DIMENTIONS.HEIGHT) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children, true);
        const hoveredUUIDs = intersects.map(e => e.object.name);

        for (let i = 0; i < intersects.length; i++) {
            const current = intersects[i].object;

            if (hoveredObjects[current.name]) {
                continue; // already hovered
            }

            if (current.name === OBJECTS.OPEN_BOOK) {
                state.hovered.openBook = true;
                HOVER_EFFECTS.IN(current);
            }

            if (current.name === OBJECTS.DOCUMENTATION) {
                state.hovered.documentation = true;
                HOVER_EFFECTS.IN(current);
            }

            hoveredObjects[current.name] = current;
        }

        for (let name of Object.keys(hoveredObjects)) {
            let idx = hoveredUUIDs.indexOf(name);

            if (idx === -1) {
                if (name === OBJECTS.OPEN_BOOK) {
                    state.hovered.openBook = false;
                    HOVER_EFFECTS.OUT(hoveredObjects[name]);
                }

                if (name === OBJECTS.DOCUMENTATION) {
                    state.hovered.documentation = false;
                    HOVER_EFFECTS.OUT(hoveredObjects[name]);
                }

                delete hoveredObjects[name];
            }
        }
    }

    const handleMouseDown = () => {
        if (state.display.documentation || state.display.openBook) {
            return;
        }

        if (state.hovered.openBook) {
            state.display.openBook = true;
            state.hovered.openBook = false;

            console.log('open the open book');
        } else if (state.hovered.documentation) {
            state.display.documentation = true;
            state.hovered.documentation = false;

            console.log('open the documentation book');
        }
    }


    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mousedown', handleMouseDown);


    return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
    };
}