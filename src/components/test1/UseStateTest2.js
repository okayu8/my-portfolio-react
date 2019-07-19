import React, { useState } from 'react';

export default function UseStateTest2() {
    const [count, settingCount] = useState(10);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => settingCount(count - 1)}>
                Click me
            </button>
        </div>
    )

}