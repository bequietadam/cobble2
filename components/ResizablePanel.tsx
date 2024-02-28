"use client"
import { PanInfo, motion, useDragControls, useMotionValue } from "framer-motion";
import React, { useState } from 'react';



type ResizableProps = {
    children?: React.ReactNode,
    initWidth?: number,
    minWidth?: number,
    maxWidth?: number,
    height?: number,
}

export default function ResizablePanel({
    children,
    initWidth = 400,
    minWidth = 180,
    maxWidth = 800,
    height,
}: ResizableProps) {
    const [isDragging, setIsDragging] = useState(false);
    const mWidth = useMotionValue(initWidth);

    const handleDrag = React.useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        let newWidth = mWidth.get() + info.delta.x;
        if (newWidth > minWidth && newWidth < maxWidth) {
            mWidth.set(newWidth);
        }
    }, [minWidth, maxWidth, mWidth]);

    

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
                className="w-1 h-full absolute top-0 right-0 box-border" // add "border-r-2 border-black" if needed
                style={{
                    cursor: "col-resize",
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
