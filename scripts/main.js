import { series } from './data.js';
var seriesTbody = document.getElementById('series_data');
console.log('here');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log(seriesTbody);
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                               <td>").concat(s.name, "</td>\n                               <td>").concat(s.platform, "</td>\n                               <td>").concat(s.seasons, "</td>");
        trElement.getElementsByTagName('td')[1].addEventListener('click', function () { return renderDetail(s); });
        seriesTbody.appendChild(trElement);
    });
}
function renderDetail(serie) {
    var detailCard = document.getElementById('series-info');
    detailCard.classList.remove('d-none');
    detailCard.querySelector('.card-title').textContent = serie.name;
    detailCard.querySelector('.card-text').textContent = serie.description;
    detailCard.querySelectorAll('.card-link')[1].href = serie.url;
    detailCard.querySelectorAll('.card-link')[1].href = serie.image;
}
