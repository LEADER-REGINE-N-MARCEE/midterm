import React from 'react'

function formatter({name}) {
    const trimSpaceBackEnd = name.replace(/\s/g,'');
    const firstLetterCapUI = name.charAt(0).toUpperCase() + name.slice(1);
}

export function Label({name}) {
    formatter({name});
    return <label for={trimSpaceBackEnd}>{firstLetterCapUI}: </label>
}

export function Button({name}) {
    return <button>{name}</button>
}

export function Header({name}) {
    formatter({name});
    return <h1 className={name}>{name}</h1>
}