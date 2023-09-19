import Model from "../model/Model.js";
import Megjelenit from "../view/MegjelenitView.js";
import Urlap from "../view/UrlapView.js";

class Controller {
  constructor() {
    const tarolo = $(".tarolo");
   // const todo1 = new Megjelenit(TODOLIST2, tarolo);

    const MODEL = new Model()
    new Megjelenit(MODEL.getList(), tarolo)

    const ujadat = $(".ujadat");
    const urlap = new Urlap({ tevekenyseg: "", hatarido: "" }, ujadat);

    $(window).on("torles", (event) => {
      console.log(event.detail);
    });

    $(window).on("gyujtes", (event) => {
      //  MODEL.getList().push(event.detail);
        MODEL.ujAdat(event.detail)
    //  console.log(TODOLIST2);
      tarolo.empty();
      new Megjelenit(MODEL.getList(), tarolo);
    });
  }
}
export default Controller;
