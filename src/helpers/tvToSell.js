import tvSold from "./SoldTV.js";
import stockInitial from "./InitialStock.js";

function toSellTvs() {
    let stock = stockInitial();
    let sold = tvSold();
    return stock - sold;
}

export default toSellTvs;