import React, { useState, useEffect } from 'react';

export default function UseEffectTest() {
    const [word, setWord] = useState('');

    useEffect(() => {
        document.title = `${word}`;
    })

    return (
        <div>
            <p>input word : {word}</p>
            <input type="text" name="atext" value={word}
                onChange={(e) => setWord(e.target.value)} />
        </div >
    );
} 