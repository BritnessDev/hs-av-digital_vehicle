export const isEmpty = (value) => {
    if (Array.isArray(value)) {
        return value.length === 0;
    } else if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    } else {
        return !value && value !== 0;
    }
}

export const isEmptyArray = (value) => {
    let empty = true;
    if(!Array.isArray(value))
        return false;
    value.map(item => {
        if(!isEmpty(item))
            empty = false;
    })
    return empty;
}