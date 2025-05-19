import './App.css';
import tvSold from "./helpers/SoldTV.js";
import initialStock from "./helpers/InitialStock.js";
import toSellTvs from "./helpers/tvToSell.js";
import generateTV from "./helpers/generateTVProduct.js";
import screenSize from "./helpers/generateScreenSize.js";
import generatePrice from "./helpers/generateTVPrice.js";
import { bestSellingTv, inventory } from "./constants/inventory.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import showOutcomeInConsole from './constants/oefenbestand.js';

function App() {
    showOutcomeInConsole();

    function sortBestSellers() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        });

        console.log("Meest verkochte eerst", inventory);
    }

    function sortCheapestFirst(){
        inventory.sort((a, b) => {
            return a.price - b.price;
        });
        console.log("Goeikoopste #1 jonguh!", inventory);
    }
    function sortSportGood(){
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate
        });
        console.log("Verversingssnelheid meeste eerst, is wel goeie voor den sport enzo!", inventory);
    }

    function sortSizes(){
        inventory.sort((a, b) => {
            return b.availableSizes[b.availableSizes.length - 1] - a.availableSizes[a.availableSizes.length - 1];
        });
        console.log("Grootste tv eerst whoo!", inventory);
    }

    return (
        <>
            <main className="main-container">
                <section>
                    <h1>Verkoop/inkoop overzicht</h1>
                    <p id="tvSold">totaal aantal verkochte tvs {tvSold()}</p>
                    <p id="stockInitial">totaal aantal tvs in opslag {initialStock()}</p>
                    <p id="toSellTvs">totaal nog te verkopen tvs {toSellTvs()}</p>
                </section>

                <section>
                    <h2>Best verkochte TV van dit moment!</h2>
                    <article id="tvHighlight">
                        <img src={bestSellingTv.sourceImg} alt="Afbeelding van TV" />
                        <div id="tvHightlightInfo">
                            <h3>{generateTV(bestSellingTv)}</h3>
                            <p id="tvHighlightPrice">{generatePrice(bestSellingTv.price)}</p>
                            <p>{screenSize(bestSellingTv.availableSizes)}</p>
                            <ul id="tvHightlightOptions">
                                <li><img id="icons" src={check} alt="checkmark" />Wifi</li>
                                <li><img id="icons" src={minus} alt="minteken" />Speech</li>
                                <li><img id="icons" src={check} alt="checkmark" />HDR</li>
                                <li><img id="icons" src={check} alt="checkmark" />Bluetooth</li>
                                <li><img id="icons" src={minus} alt="minteken" />Ambilight</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <section>
                    <h2>Onze merken!</h2>
                    <ul>
                        {inventory.map((tv) => {
                            return (
                                <li key="brands">
                                    {tv.type} {tv.brand}
                                </li>
                            );
                        })}
                    </ul>

                    <button type="button" onClick={sortBestSellers}>
                        Meest verkocht eerst
                    </button>
                    <button type="button" onClick={sortCheapestFirst}>
                        Goedkoopste eerst
                    </button>
                    <button type="button" onClick={sortSportGood}>
                        Meest geschikt voor sport eerst
                    </button>
                    <button type="button" onClick={sortSizes}>
                        Grootste tv eerst
                    </button>


                    <h2>Onze TVs!</h2>
                    {inventory.map((tv) => (
                        <article id="tvHighlight" key={tv.type}>
                            <img src={tv.sourceImg} alt="Afbeelding van TV" />
                            <div id="tvHightlightInfo">
                                <h3>{generateTV(tv)}</h3>
                                <p id="tvHighlightPrice">{generatePrice(tv.price)}</p>
                                <p>{screenSize(tv.availableSizes)}</p>
                                <ul id="tvHightlightOptions">
                                    {tv.options.map((option) => {
                                        if (option.applicable === true) {
                                            return (
                                                <li key={`${tv.type}-${option.name}`}>
                                                    <img id="icons" src={check} alt="Checkmark"/>
                                                    {option.name}
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={`${tv.type}-${option.name}`}>
                                                    <img id="icons" src={minus} alt="Minteken"/>
                                                    {option.name}
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}

export default App;
