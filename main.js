//import Megjelenit from "./Megjelenit.js";
import { AUTOK } from "./adatok.js";
import AutoUrlap from "./AutoUrlap.js";

$(function () {
    //const SZULOELEM = $(".tarolo");
    const FORMSZULOELEM = $(".ujadat");
    new AutoUrlap(AUTOK[0], FORMSZULOELEM, {tipus: "Autó típusa", rendszam:"Rendszám"});



})