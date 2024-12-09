import React from 'react';

const TextEffect = ({text}) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const handleEffect = (e) => {
        let iterations = 0;
    clearInterval(interval);                            
    interval = setInterval(() => {
        e.target.textContent = e.target.textContent.split("").map((letter, index) => {
                                    if(index < iterations){
                                        return e.target.dataset.value[index];
                                    }
                                    return letters[Math.floor(Math.random()*26)]
                                }).join("");

        if(iterations >= e.target.dataset.value.length) clearInterval(interval);
        iterations += 1;
    }, 50)
    }

    return (
        <p className="text_animate" onMouseOver={handleEffect} data-value={text}>{text}</p>
    )
}

export default TextEffect