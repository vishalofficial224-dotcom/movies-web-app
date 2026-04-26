

export function button({
    name = '',
    type = 'button',
    value = 'text',
    id = '',
    className = '',
    text = '',
    onClick = null

} = {}) {

    const buttonComponent = document.createElement('button');

    buttonComponent.name = name;
    buttonComponent.type = type;
    buttonComponent.value = value;
    buttonComponent.id = id;
    buttonComponent.className = className;
    buttonComponent.innerHTML = text;
    


    buttonComponent.addEventListener("click", onClick);

    return buttonComponent;

}