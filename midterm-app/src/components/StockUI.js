import React from 'react'

export function Label({name}) {
    const trimSpaceBackEnd = name.replace(/\s/g,'');
    const firstLetterCapUI = name.charAt(0).toUpperCase() + name.slice(1);
    return <label for={trimSpaceBackEnd}>{firstLetterCapUI}: </label>
}

export function Button({name}) {
    return <button>{name}</button>
}