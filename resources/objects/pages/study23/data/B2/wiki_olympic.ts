import type { DataModule } from "resources/objects/pages/study23/types";

const Wiki_olympic: DataModule = {
    name: "wiki_olympic",
    image: "../../img/B2/4. Wiki_olympic.png",
    data: [
        { x: .695, y: .335, width: 3.3, height: 2.9, data: { id: "paris", letter: "France" } },
        { x: .636, y: .488, width: 4.4, height: 2.7, data: { id: "london", letter: "England" } },
        { x: .374, y: .809, width: 3.8, height: 2.8, data: { id: "rome", letter: "Italy" } },
        { x: .517, y: .835, width: 5.4, height: 2.7, data: { id: "hamburg", letter: "Germany" } },
        { x: .807, y: .814, width: 7.5, height: 2.5, data: { id: "stade de france", letter: "France" } }
    ]
}
if(!window.dataModules)
    window.dataModules = {};
window.dataModules['wiki_olympic'] = Wiki_olympic;

export default Wiki_olympic;