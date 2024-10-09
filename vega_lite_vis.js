var vg_1 = "./fire_source_early.vg.json";
vegaEmbed("#pie1", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
    
var vg_2 = "./fire_source_late.vg.json";
vegaEmbed("#pie2", vg_2).then(function (result) {

}).catch(console.error);

var vg_3 = "./historical_bushfire_trend_temp.vg.json";
vegaEmbed("#linebar", vg_3, {"actions": false}).then(function (result){

}).catch(console.error);

var vg_4 = "./bushfire_map.vg.json";
vegaEmbed("#firemap", vg_4).then(function (result) {

}).catch(console.error);

var vg_5 = "./temperature_map.vg.json";
vegaEmbed("#tempmap", vg_5).then(function (result) {

}).catch(console.error);