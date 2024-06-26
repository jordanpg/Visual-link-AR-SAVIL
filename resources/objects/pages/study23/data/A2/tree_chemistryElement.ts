import type { DataModule } from "resources/objects/pages/study23/types";

const TreeChemistryElementData: DataModule = {
    name: "map_US",
    image: "../../img/A2/1. Hierarchy tree_chemistryElement.png",
    data: [
        { x: .098, y: .013, width: 3.6, height: 3.4, data: { id: "ch3-1", letter: "C" } },
        { x: .95, y: .063, width: 3.8, height: 3.1, data: { id: "ch2oh", letter: "H" } },
        { x: .395, y: .31, width: 3.3, height: 3.1, data: { id: "acetyl-coa", letter: "A" } },
        { x: .823, y: .377, width: 3.8, height: 3.4, data: { id: "o", letter: "O" } },
        { x: .886, y: .571, width: 3.8, height: 3, data: { id: "ch2", letter: "C" } },
        { x: .048, y: .865, width: 3.8, height: 3.4, data: { id: "ch3-2", letter: "C" } },
    ]
}
if(!window.dataModules)
    window.dataModules = {};
window.dataModules['tree_chemistryElement'] = TreeChemistryElementData;

export default TreeChemistryElementData;