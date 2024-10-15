var vg_1 = "./butterfly_chart.vg.json";
vegaEmbed("#pie1", vg_1, {"actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "./historical_bushfire_trend_temp.vg.json";
vegaEmbed("#linebar", vg_3).then(function (result){

}).catch(console.error);

var vg_4 = "./bushfire_map.vg.json";
vegaEmbed("#firemap", vg_4).then(function (result) {

}).catch(console.error);

var vg_5 = "./temperature_map.vg.json";
vegaEmbed("#tempmap", vg_5).then(function (result) {

}).catch(console.error);