

export function input({
    id = '',
    className = '',
    type = '',
    placeholder = '',
    value = '',
    onInput = null
} = {}) {

    const inputComponent = document.createElement('input');

    inputComponent.id = id;
    inputComponent.className = className;
    inputComponent.type = type;
    inputComponent.placeholder = placeholder;
    inputComponent.value = value;
    

    inputComponent.addEventListener("input", onInput)

    return inputComponent;

}