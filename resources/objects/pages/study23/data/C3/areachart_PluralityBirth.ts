import type { DataModule } from "resources/objects/pages/study23/types";

const Areachart_PluralityBirth: DataModule = {
    name: "areachart_PluralityBirth",
    image: "../../img/C3/2. Area chart_PluralityBirth.png",
    data: [        
        { x: .233, y: .112, width: 7, height: 4.2, data: { id: "quintuplets", letter: "Prime Numbers" } },
        { x: .577, y: .117, width: 5, height: 3.7, data: { id: "triplets", letter: "Prime Numbers" } },
        { x: .652, y: .117, width: 4.5, height: 3.8, data: { id: "twins", letter: "Prime Numbers" } }
    ]
}
if(!window.dataModules)
    window.dataModules = {};
window.dataModules['areachart_PluralityBirth'] = Areachart_PluralityBirth;

export default Areachart_PluralityBirth;