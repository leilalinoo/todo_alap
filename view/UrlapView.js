class Urlap {
  adat = {};
  constructor(adat, szuloElem) {
    this.adat = adat
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.tevElem = this.szuloElem.children("form").children("#tev");
    this.hatElem = this.szuloElem.children("form").children("#hat");
    this.submitElem = this.szuloElem.children("form").children("#sub");
    this.submitElem.on("click", (event) => {
        event.preventDefault()
        this.adatGyujt()
        this.#esemenyTrigger("gyujtes")
      //  console.log(this.#adat)
    });
  }

  megjelenit() {
    let txt = `<form>
            <label for="tev">Tevékenység: </label>
            <input type="text" id="tev" name="tev"><br><br>
            <label for="hat">Határidő: </label>
            <input type="text" id="hat" name="hat"><br><br>
            <input type="submit" value="Submit" id="sub">
        </form>`;

    this.szuloElem.append(txt);
  }

  adatGyujt() {
    this.adat = {
      tevekenyseg: this.tevElem.val(),
      hatarido: this.hatElem.val(),
    };
  //  console.log(this.#adat)
  }

  #esemenyTrigger(esemenynev) {
    const gyujtes = new CustomEvent(esemenynev, { detail: this.adat });
    window.dispatchEvent(gyujtes);
  }
}
export default Urlap;
