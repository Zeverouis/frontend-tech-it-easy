import './App.css';
import tvSold from "./helpers/SoldTV.js";
import initialStock from "./helpers/InitialStock.js";
import toSellTvs from "./helpers/tvToSell.js";

function App() {
    return (
        <>
            <h1>Begin hier met met maken van de applicatie!</h1>
            <p id= "tvSold">totaal aantal verkochte tvs {tvSold()}</p>

            <p id= "stockInitial">totaal aantal tvs in opslag {initialStock()}</p>

            <p id= "toSellTvs">totaal nog te verkopen tvs {toSellTvs()}</p>
        </>
    )
}

export default App
