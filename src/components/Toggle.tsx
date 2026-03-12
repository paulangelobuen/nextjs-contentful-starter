'use client'

import React, { useState } from 'react';

type ToggleProps = {
    toggle?: boolean;
}

export const Toggle = (props: ToggleProps) => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <button onClick={toggleHandler} className="py-2 px-4 bg-blue-500 text-white rounded">
                {toggle ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}