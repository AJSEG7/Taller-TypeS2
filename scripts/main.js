import { series } from './data.js';
var seriesTbody = document.getElementById('series_data');
console.log('here');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log(seriesTbody);
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                               <td>").concat(s.name, "</td>\n                               <td>").concat(s.platform, "</td>\n                               <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
