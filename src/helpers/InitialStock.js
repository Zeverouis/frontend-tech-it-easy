import {inventory} from "../constants/inventory.js";

function stockInitial() {
    let total = 0;

    for (let i = 0; i < inventory.length; i++) {
        total = total + inventory[i].originalStock;
    }
    return total;
}

export default stockInitial;