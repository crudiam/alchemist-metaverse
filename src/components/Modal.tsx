import { forwardRef, useImperativeHandle, useState, ForwardRefRenderFunction, useCallback, useEffect,  ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';


const StyledModalWrapper = styled.div`
    background: rgba(0, 0, 0, 0.7);

    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content:center;
    align-items: center;


`;

const portalRoot = document.getElementById('portal-root') as HTMLElement;

export interface ModalHandle {
    open: () => void;
    close: () => void;
}

const Modal: ForwardRefRenderFunction<ModalHandle, ReactNode> = ({ children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(()  => setIsOpen(true), [])
    const close = useCallback(()  => null /** setIsOpen(false) **/, [])

    useImperativeHandle(ref, () => ({open, close }), [open, close]);

    const handleESC = useCallback((event: KeyboardEvent) => {
        // if (event.key === 'Escape') {
        //     setIsOpen(false);
        // }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleESC, false);
        }

        return () => document.removeEventListener('keydown', handleESC, false);
    }, [handleESC, isOpen]);


    const handleWrapperClick = e => {
        if (e.target.className.includes('book-page')) {
            return;
        }

        e.stopPropagation();
        close();
    };

    const child = (
        <StyledModalWrapper onClick={handleWrapperClick}>
            {children}
        </StyledModalWrapper>
    )    

    return createPortal(isOpen ? child : null, portalRoot);
};

export default forwardRef(Modal);
