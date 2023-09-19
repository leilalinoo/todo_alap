import Megjelenit from "../view/MegjelenitView.js";
import { TODOLIST2 } from "../adatok.js";
import Urlap from "../view/UrlapView.js";

class Controller {
  constructor() {
    const tarolo = $(".tarolo");
    const todo1 = new Megjelenit(TODOLIST2, tarolo);

    const ujadat = $(".ujadat");
    const urlap = new Urlap({ tevekenyseg: "", hatarido: "" }, ujadat);

    $(window).on("torles", (event) => {
      console.log(event.detail);
    });

    $(window).on("gyujtes", (event) => {
      TODOLIST2.push(event.detail);
      console.log(TODOLIST2);
      tarolo.empty();
      new Megjelenit(TODOLIST2, tarolo);
    });
  }
}
export default Controller;
