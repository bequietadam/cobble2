"use client"
import useDocumentClientSize from "@hooks/useDocumentClientSize";
import { PanInfo, motion, useDragControls, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from 'react';



type ResizableProps = {
    children?: React.ReactNode,
    initWidth?: number,
    minWidth?: number,
    maxWidth?: number,
    setResizeValue?: (value: number) => void;
}

export default function ResizablePanel({
    children,
    initWidth = 400,
    minWidth = 180,
    maxWidth = 800,
    setResizeValue = () => {},
}: ResizableProps) {
    const { width } = useDocumentClientSize();
    const [isDragging, setIsDragging] = useState(false);
    const mWidth = useMotionValue(
        initWidth > maxWidth ? maxWidth : initWidth < minWidth ? minWidth : initWidth
    );
    const handleDrag = React.useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const newWidth = mWidth.get() + info.delta.x;
        if (newWidth > maxWidth) {
            mWidth.set(maxWidth),
            setResizeValue(maxWidth)
        } else if (newWidth < minWidth) {
            mWidth.set(minWidth);
            setResizeValue(minWidth);
        } else {
            mWidth.set(newWidth);
            setResizeValue(newWidth);
        }
    }, [minWidth, maxWidth, mWidth, setResizeValue]);

    useEffect(() => {
        const newWidth = mWidth.get();
        if (newWidth > maxWidth) {
            mWidth.set(maxWidth),
            setResizeValue(maxWidth)
        } 
    }, [maxWidth, mWidth, setResizeValue])
    

    return (
        <div className={'flex  flex-col relative overflow-hidden min-h-0'}>
            <motion.div
                className="flex"
                style={{
                    width: mWidth,
                    cursor: isDragging ? "col-resize" : "", //put on body tag instead
                }}
                onDoubleClick={() => {
                    mWidth.set(initWidth);
                }}
            >{children}</motion.div>
            <motion.div
                className="w-1 h-full absolute top-0 right-0 box-border z-0" // add "border-r-2 border-black" if needed
                style={{
                    cursor: "col-resize",
                    touchAction: "none"
                }}
                drag="x"
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0}
                dragMomentum={false}
                onDrag={handleDrag}
                onDragEnd={() => {
                    setIsDragging(false);
                }}
                onDragStart={() => {
                    setIsDragging(true);
                }}
            >
            </motion.div>
        </div>
    );
}
