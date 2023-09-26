//import Megjelenit from "./Megjelenit.js";
import { AUTOK } from "./adatok.js";
import AutoUrlap from "./AutoUrlap.js";

$(function () {
    //const SZULOELEM = $(".tarolo");
    const FORMSZULOELEM = $(".ujadat");

    new AutoUrlap(AUTOK, FORMSZULOELEM);

})