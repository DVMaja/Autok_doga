class AutoUrlap {
    #adat = []

    constructor(adat, SzuloElem) {
        this.#adat = adat;
        this.SzuloElem = SzuloElem;

        this.#urlapLetrehoz();
        this.formElem = this.szuloElem.children("form");

        this.submitGomb = this.formElem.children("div").children("#submit");
        this.tevekenyseg = this.formElem.children("div").children("#tipus");
        this.hatarido = this.formElem.children("div").children("#rendszam");      

        
        this.submitGomb.on("click", (event) => {
            console.log("katt");
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
            <input> type="text" id="${key}" name="${key}" value="valami" </input>
            </div>`;
        }
        txt += `<div>
                <input type="submit" value="Új elem">
                </div>`

        this.formElem.html(txt);


    }

    #esemenyTrigger() {
        const esemenyem = new CustomEvent("ujAdatHozzaAdas", { detail: this.#adat });
        window.dispatchEvent(esemenyem);
    }
}
export default AutoUrlap;