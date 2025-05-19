import { inventory } from './inventory.js';

function showOutcomeInConsole() {

//     Opdracht 1A

    const types = inventory.map((tv) => {
        return tv.type;
    });
    console.log(types);

//     opdracht 1B

    const soldOut = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    });
    console.log(soldOut);

//     opdracht 1C

    const info = inventory.find((tv) => {
        return tv.type === 'NH3216SMART';
    });
    console.log(info);

//     opdracht 1d

    const sportsViewers = inventory.map((tv) => {
        if (tv.refreshRate >= 100) {
            return {name: `${tv.brand} ${tv.name}`, suitable: true}
        } else {
            return {name: `${tv.brand} ${tv.name}`, suitable: false}
        }
    });
    console.log(sportsViewers);

//     opdracht 1e

    const largeScreen = inventory.filter((tv) => {
        return tv.availableSizes.find((size) => size >= 65);
    })
    console.log(largeScreen);

//     opdracht 1f

    const ambilight = inventory.find((tv) => {
        const optionAmbilight = tv.options.find((option) => {
            return option.name === 'ambiLight';
        });

        return optionAmbilight.applicable === true;
    });
    console.log(ambilight);
}

export default showOutcomeInConsole;

