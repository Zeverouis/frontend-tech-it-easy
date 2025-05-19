function screenSizes(screenSizeArray){
    let screenSize = '';

    for (let i = 0; i < screenSizeArray.length; i++){
        const screenInches = screenSizeArray[i];
        const screenCM = Math.round(screenSizeArray[i] * 2.54);

        screenSize = screenSize + `${screenInches} inch (${screenCM} cm)`;

        if (i < screenSizeArray.length - 1){
            screenSize = `${screenSize} | `;
        }
    }

    return screenSize;
}

export default screenSizes