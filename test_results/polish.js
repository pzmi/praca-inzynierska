document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.demi div#container_indicators.demi div#highcharts-0.highcharts-container span.highcharts-title span.chart_title').innerHTML = 'Czas odpowiedzi';
document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.demi div#container_indicators.demi div#highcharts-0.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan').innerHTML = 'Liczba zapytań';

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_distrib.geant div#highcharts-2.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan').innerHTML = 'Procent zapytań';

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_distrib.geant div#highcharts-2.highcharts-container span.highcharts-title span.chart_title').innerHTML = 'Rozkład czasu odpowiedzi';

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_distrib.geant div#highcharts-2.highcharts-container span.highcharts-title span.chart_title').innerHTML = 'Rozkład czasu odpowiedzi w czasie testu';

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container.geant div#highcharts-4.highcharts-container span.highcharts-title span.chart_title.chart_title_').innerHTML = 'Percentyle czasu odpowiedzi (pozytywne)';

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container.geant div#highcharts-4.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan').innerHTML = 'Czas odpowiedzi (ms)';

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_latency.geant div#highcharts-8.highcharts-container span.highcharts-title span.chart_title.chart_title_').innerHTML = 'Percentyle opóźnienia (pozytywne)';

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_latency.geant div#highcharts-8.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan').innerHTML = 'Opóźnienie (ms)';



document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container span.highcharts-title span.chart_title').innerHTML = "Liczba aktywnych użytkowników w czasie testu";

document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item text').innerHTML = 'Użytkownicy';
document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item text tspan').innerHTML = 'Użytkownicy';
document.querySelector('html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan').innerHTML = 'Liczba użytkowników';

var changes = {
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.demi div#container_indicators.demi div#highcharts-0.highcharts-container span.highcharts-title span.chart_title': 'Czas odpowiedzi',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.demi div#container_indicators.demi div#highcharts-0.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan': 'Liczba zapytań',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_distrib.geant div#highcharts-2.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan': 'Procent zapytań',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_distrib.geant div#highcharts-2.highcharts-container span.highcharts-title span.chart_title': 'Rozkład czasu odpowiedzi',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_distrib.geant div#highcharts-2.highcharts-container span.highcharts-title span.chart_title': 'Rozkład czasu odpowiedzi w czasie testu',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container.geant div#highcharts-4.highcharts-container span.highcharts-title span.chart_title.chart_title_': 'Percentyle czasu odpowiedzi (pozytywne)',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container.geant div#highcharts-4.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan': 'Czas odpowiedzi (ms)',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_latency.geant div#highcharts-8.highcharts-container span.highcharts-title span.chart_title.chart_title_': 'Percentyle opóźnienia (pozytywne)',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_latency.geant div#highcharts-8.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan': 'Opóźnienie (ms)',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_requests.geant div#highcharts-12.highcharts-container span.highcharts-title span.chart_title': 'Liczba zapytań na sekundę',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_requests.geant div#highcharts-12.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan': 'Liczba zapytań',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_responses.geant div#highcharts-16.highcharts-container span.highcharts-title span.chart_title': 'Liczba odpowiedzi na sekundę',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_responses.geant div#highcharts-16.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan': 'Liczba odpowiedzi',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container span.highcharts-title span.chart_title': "Liczba aktywnych użytkowników w czasie testu",
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item text': 'Użytkownicy',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item text tspan': 'Użytkownicy',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_active_users.geant div#highcharts-4.highcharts-container svg g.highcharts-axis text.highcharts-yaxis-title tspan': 'Liczba użytkowników',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_latency.geant div#highcharts-8.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item text tspan': 'Użytkownicy',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container.geant div#highcharts-4.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item text tspan': 'Użytkownicy'
}

for (var prop in changes) {
  var elem = document.querySelector(prop);
  if (elem != null) {
    elem.innerHTML = changes[prop];
  }
}

var toRemove = [
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_requests.geant div#highcharts-12.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item',
	'html body div.container.details div.main div.cadre div.content div.content-in div.article div.schema.geant div#container_responses.geant div#highcharts-16.highcharts-container svg g.highcharts-legend g g g.highcharts-legend-item'
]

toRemove.forEach(function(element, index, array){
	var elem = document.querySelector(element);
	if (elem != null) {
		elem.parentNode.removeChild(elem);
	}
});