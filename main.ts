import { Serie } from './serie.js'
import { series } from './data.js'

const seriesTbody: HTMLElement = document.getElementById('series_data')!;
console.log('here')
renderSeriesInTable(series);


function renderSeriesInTable(series: Serie[]): void {
  console.log(seriesTbody);
  
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td>${s.name}</td>
                               <td>${s.platform}</td>
                               <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
  });
}
function renderDetail(serie: Serie, trElement: HTMLTableRowElement){
  const detailCard = document.getElementById('series-info')!;
  detailCard.classList.remove('d-none');
  detailCard.querySelector('.card-title')!.textContent = serie.name;
  detailCard.querySelector('.card-text')!.textContent = serie.description;
  (detailCard.querySelectorAll('.card-link')[1] as HTMLAnchorElement).href = serie.url;
  (detailCard.querySelectorAll('.card-link')[1] as HTMLAnchorElement).href = serie.image;
}