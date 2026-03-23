import { Collapse } from "@mui/material"
import clsx from "clsx"
import React from 'react'

interface CollapseContainerProps {
    className?: string,
    collapsed?: boolean,
    children?: React.ReactNode,
    headerComponent: React.ReactNode
}

const CollapseContainer = ({ children, className, collapsed = false, headerComponent }: CollapseContainerProps) => {
    return (
        <div className={clsx(className)}>
            {headerComponent}
            <Collapse in={collapsed}>
                {children}
            </Collapse>
        </div>
    )
}

export default CollapseContainer