class AutoUrlap {
    #adat = []
    #formKod = [];

    constructor(adat, SzuloElem, formKod) {
        this.#adat = adat;
        this.SzuloElem = SzuloElem;
        this.#formKod = formKod;
        //console.log("HAho")

        this.formElem = this.SzuloElem.children("form");
        this.#urlapLetrehoz();
        //console.log(this.formElem);

        this.submitGomb = this.formElem.children("div").children("#submit");
        this.tipus = this.formElem.children("div").children("#tipus");
        this.hatarido = this.formElem.children("div").children("#rendszam");


        this.submitGomb.on("click", (event) => {
            event.preventDefault();
            this.#adatgyujt();
            this.#esemenyTrigger("ujAdatHozzaAdas");
        })
    }

    #adatgyujt() {
        for (const key in this.#adat) {
            this.#adat[key] = $(`#${key}`).val();
        }
    }

    #urlapLetrehoz() {
        let txt = "";
        //console.log(this.#adat);
        for (const key in this.#formKod) {
            txt += `<div">
            <label for="${key}"> ${this.#formKod[key]}</label>
            <input type="text" id="${key}" name="${key}" value="${this.#adat[key]}" >
            </div>`;
        }
        txt += `<div>
                <input type="submit" value="Új elem">
                </div>`;
        
        this.formElem.html(txt);
    }

    #esemenyTrigger() {
        const esemenyem = new CustomEvent("ujAdatHozzaAdas", { detail: this.#adat });
        window.dispatchEvent(esemenyem);
    }
}
export default AutoUrlap;