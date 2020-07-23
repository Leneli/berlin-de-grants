export default async function getGrants() {
  const url = 'https://www.berlin.de/sen/finanzen/service/zuwendungsdatenbank/index.php/index/index.json?q=Berlin';
  const response = await fetch(url);
  const { ok, status, statusText } = response;

  // https://www.berlin.de/sen/finanzen/service/zuwendungsdatenbank/index.php/index/index.json?
  // q=Berlin&
  // order=jahr DESC&
  // page=1&
  // name=YACOUB Automation GmbH&
  // geber=Senatsverwaltung für Wirtschaft, Technologie und Forschung&
  // art=Projektförderung&
  // jahr=2020&
  // anschrift=Greifswalder Straße 212, 10405 Berlin&
  // politikbereich=Wirtschaft&
  // zweck=Auswahl, Anpassung und Integration von modellbasierten Testwerkzeugen für die SIL-2-Zertifizierung von Steuerungsprodukten

  console.log('>>> API response', response);

  return new Promise((resolve, reject) => {
    if (ok) resolve(response.json());
    else reject(`Ошибка HTTP: ${status} (${statusText})`);
  })
    .then(json => {
      const { index = [], results = {} } = json;
      const { count, items_per_page: perPage } = results;

      return {
        grants: index,
        counter: count,
        perPage,
      };
    })
    .catch(error => error);
}