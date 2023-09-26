class AutoUrlap {
    #adat = []

    constructor(adat, SzuloElem) {
        this.#adat = adat;
        this.SzuloElem = SzuloElem;

        //console.log("HAho")

        this.formElem = this.SzuloElem.children("form");
        this.#urlapLetrehoz();
        console.log(this.formElem);


        this.submitGomb = this.formElem.children("div").children("#submit");
        this.tevekenyseg = this.formElem.children("div").children("#tipus");
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

        for (const key in this.#adat) {
            txt += `<div">
            <label for="${key}"> ${this.#adat[key]}</label>
            <input> type="text" id="${key}" name="${key}" value="${this.#adat[key]}" </input>
            </div>`;
        }
        txt += `<div>
                <input type="submit" value="Új elem">
                </div>`;

        //console.log(txt);
        this.formElem.html(txt);
    }

    #esemenyTrigger() {
        const esemenyem = new CustomEvent("ujAdatHozzaAdas", { detail: this.#adat });
        window.dispatchEvent(esemenyem);
    }
}
export default AutoUrlap;