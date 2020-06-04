import React, { PureComponent } from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Select } from './components/Select';
import { Result } from './components/Result';
import { Form, FormChild } from './components/Form';
import { POLITIKBEREICH } from './constants';
import './styles/App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasSearch: false,
      hideForm: false,
      ...this.emptyForm,
    };

    this.emptyForm = {
      stichwortsuche: '',
      name: '',
      anschrift: '',
      zweck: '',

      // selects
      politikbereich: '',
    };

    this.buttons = [
      {
        name: 'Suchen',
        type: 'submit',
        view: 'primary',
        method: this.onSubmit,
      },
      {
        name: 'Suche zurücksetzen',
        type: 'reset',
        view: 'secondary',
        method: this.onReset,
      },
    ];
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ hasSearch: true, /* hideForm: true */ });

    console.log('>>> Form data', this.state);
  }

  onReset = () => {
    this.setState({ hasSearch: false, hideForm: false, ...this.emptyForm });
  }

  onInputChange = e => {
    const input = e.target;
    const { name, value } = input;
    this.setState({ [name]: value });
  }

  onSelectChange = (name, value = '') => {
    this.setState({ [name]: value });
  }

  onShowForm = () => {
    // this.setState({ hideForm: false });
  }

  onHideForm = () => {
    // this.setState({ hideForm: true });
  }

  render() {
    const { hasSearch, hideForm, stichwortsuche, name, anschrift, zweck, politikbereich } = this.state;
    const tooltip = 'Mit der Stichwortsuche können Sie nach den folgenden Informationen suchen: "Name", "Geber", "Anschrift", "Zweck", "Betrag" und "EmpfaengerID".';

    // TODO: test data
    const response = {
      "results": {
        "count": "42110",
        "items_per_page": 20
      },
      "index": [
          {
              "id": "1",
              "name": "Arbeiterwohlfahrt Berlin Kreisverband Südost e. V.",
              "geber": "Bezirksamt Neukölln",
              "art": "Projektförderung",
              "jahr": "2014",
              "anschrift": "Erkstrasse 1, 12043 Berlin",
              "politikbereich": "Soziales",
              "zweck": "Schuldnerberatung - Mahlower Strasse",
              "betrag": "625000",
              "empfaengerid": "vr_014812"
          },
          {
              "id": "4",
              "name": "Brandenburg e. V.",
              "geber": "Senatsverwaltung für Arbeit, Integration und Frauen",
              "art": "Projektförderung",
              "jahr": "2014",
              "anschrift": "Sewanstraße 43, 10319 Berlin",
              "politikbereich": "Integration",
              "zweck": "Förderung der Integration und Partizipation der vietnamesischen Mitbürger in Berlin",
              "betrag": "32050",
              "empfaengerid": "vr_013127"
          },
          {
              "id": "7",
              "name": "Diakoniewerk Simeon gGmbH",
              "geber": "Bezirksamt Neukölln",
              "art": "Projektförderung",
              "jahr": "2017",
              "anschrift": "Rübelandstraße 9, 12053 Berlin",
              "politikbereich": "Integration",
              "zweck": "Stadtteilmütter in Neukölln",
              "betrag": "248200",
              "empfaengerid": "hrb_132351"
          },
          {
              "id": "10",
              "name": "DÜNN e. V.",
              "geber": "Senatsverwaltung für Gesundheit und Soziales",
              "art": "Projektförderung",
              "jahr": "2015",
              "anschrift": "Innsbrucker straße 37, 10825 Berlin",
              "politikbereich": "Gesundheit",
              "zweck": "Dünn e. V.",
              "betrag": "138116",
              "empfaengerid": "vr_009016"
          },
          {
              "id": "13",
              "name": "GSE gGmbH",
              "geber": "Senatsverwaltung für Bildung, Jugend und Familie",
              "art": "Projektförderung",
              "jahr": "2018",
              "anschrift": "Prinzenallee 74, 13357 Berlin",
              "politikbereich": "Jugend",
              "zweck": "Machbarkeitsstudie queeres Jugendzentrum",
              "betrag": "10000",
              "empfaengerid": "hrb_027560"
          },
          {
              "id": "16",
              "name": "Himmel & Erde Pankow e.V",
              "geber": "Senatsverwaltung für Bildung, Jugend und Wissenschaft",
              "art": "Projektförderung",
              "jahr": "2015",
              "anschrift": "Brehmestraße 35, 13187 Berlin",
              "politikbereich": "Jugend",
              "zweck": "Baul. Maßnahme - Schaffung von Plätzen- Kitaausbauprogramm - Kindertagesstätte Himmel & Erde Pankow e. V.",
              "betrag": "76460",
              "empfaengerid": "vr_033175"
          },
          {
              "id": "19",
              "name": "ImPULS e. V.",
              "geber": "Bezirksamt Neukölln",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Bat-Yam-Platz 1, 12353 Berlin",
              "politikbereich": "Bildung",
              "zweck": "Sprachschulungen für aktive Gropiusstädter",
              "betrag": "6607",
              "empfaengerid": "vr_024638"
          },
          {
              "id": "22",
              "name": "Lesbians aus der Türkei Berlin-Brandenburg e. V.",
              "geber": "Senatsverwaltung für Arbeit, Integration und Frauen",
              "art": "Projektförderung",
              "jahr": "2014",
              "anschrift": "Kluckstraße 11, 10785 Berlin",
              "politikbereich": "Antidiskriminierung",
              "zweck": "Miteinander - Füreinander. Diskriminierungsfreie Szenen für alle!",
              "betrag": "20000",
              "empfaengerid": "vr_022524"
          },
          {
              "id": "25",
              "name": "Lesbians aus der Türkei Berlin-Brandenburg e. V.",
              "geber": "Senatsverwaltung für Arbeit, Integration und Frauen",
              "art": "Projektförderung",
              "jahr": "2014",
              "anschrift": "Kluckstraße 11, 10785 Berlin",
              "politikbereich": "Antidiskriminierung",
              "zweck": "Treffpunkt für Lesben, Schwule und Transgender, insbesondere aus der Türkei",
              "betrag": "60000",
              "empfaengerid": "vr_022524"
          },
          {
              "id": "28",
              "name": "Neue Gesellschaft für Bildende Kunst e. V.",
              "geber": "Senatskanzlei - Kulturelle Angelegenheiten -",
              "art": "Projektförderung",
              "jahr": "2015",
              "anschrift": "Oranienstraße 25, 10999 Berlin",
              "politikbereich": "Kultur",
              "zweck": "Kunst im Untergrund \"Was ist draußen\"",
              "betrag": "85000",
              "empfaengerid": "vr_004079"
          },
          {
              "id": "31",
              "name": "Verein für Berliner Stadtmission",
              "geber": "Bezirksamt Spandau",
              "art": "Projektförderung",
              "jahr": "2018",
              "anschrift": "Lehrter Straße 68, 10557 Berlin",
              "politikbereich": "Integration",
              "zweck": "Begleitprogramm: Learning by doing",
              "betrag": "58460",
              "empfaengerid": "vr_024148"
          },
          {
              "id": "34",
              "name": "Verein zur Förderung der Kommunikation unter Gropiusstädter Frauen e. V.",
              "geber": "Bezirksamt Neukölln",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Löwensteinring 22, 12353 Berlin",
              "politikbereich": "Familie",
              "zweck": "Kinderbildungscafe",
              "betrag": "2499",
              "empfaengerid": "vr_006886"
          },
          {
              "id": "37",
              "name": "Verein zur Förderung der Kommunikation unter Gropiusstädter Frauen e. V.",
              "geber": "Bezirksamt Neukölln",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Löwensteinring 22, 12353 Berlin",
              "politikbereich": "Jugend",
              "zweck": "Service Learning",
              "betrag": "15363",
              "empfaengerid": "vr_006886"
          },
          {
              "id": "40",
              "name": "ABC Zentrum Berlin e. V.",
              "geber": "Bezirksamt Mitte",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Luise-Zietz-Straße 43, 12683 Berlin",
              "politikbereich": "Stadtentwicklung",
              "zweck": "Sachmittel für freiwilliges Engagement in\nNachbarschaften",
              "betrag": "1750",
              "empfaengerid": "vr_016692"
          },
          {
              "id": "43",
              "name": "casablanca gGmbH",
              "geber": "Bezirksamt Mitte",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Pistoriusstraße 108a, 13086 Berlin",
              "politikbereich": "Stadtentwicklung",
              "zweck": "Sachmittel für freiwilliges Engagement in\nNachbarschaften",
              "betrag": "980",
              "empfaengerid": "hrb_055650"
          },
          {
              "id": "46",
              "name": "Diakonisches Werk Tempelhof-Schöneberg",
              "geber": "Senatsverwaltung für Bildung, Jugend und Wissenschaft",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Rübelandstraße 9, 12053 Berlin",
              "politikbereich": "Jugend",
              "zweck": "Erziehungs- und Familienberatungsstellen",
              "betrag": "225888",
              "empfaengerid": "vr_014759"
          },
          {
              "id": "49",
              "name": "!K7 Records GmbH",
              "geber": "Regierender Bürgermeister - Senatskanzlei -",
              "art": "Projektförderung",
              "jahr": "2014",
              "anschrift": "Gerichtsstraße 35, 13347 Berlin",
              "politikbereich": "Kultur",
              "zweck": "Umstellung auf cloud-basierte Software \"details\" mit Schulung",
              "betrag": "5000",
              "empfaengerid": "hrb_060789"
          },
          {
              "id": "52",
              "name": "!K7 Records GmbH",
              "geber": "Regierender Bürgermeister - Senatskanzlei -",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Gerichtstraße 35, 13347 Berlin",
              "politikbereich": "Kultur",
              "zweck": "Subculture Berlin 80's",
              "betrag": "4900",
              "empfaengerid": "hrb_060789"
          },
          {
              "id": "55",
              "name": "\"Das Futterhaus\" - Berlin GmbH & Co. KG",
              "geber": "Senatsverwaltung für Arbeit, Integration und Frauen",
              "art": "Projektförderung",
              "jahr": "2015",
              "anschrift": "Am Bahnhof Westend 13, 14059 Berlin",
              "politikbereich": "Arbeit",
              "zweck": "Landeszuschuss für KMU - Lohnkostenzuschuss für \"Das Futterhaus\" - Berlin GmbH & Co. KG",
              "betrag": "3733",
              "empfaengerid": "nr_100287"
          },
          {
              "id": "58",
              "name": "\"Das Futterhaus\" - Berlin GmbH & Co. KG",
              "geber": "Senatsverwaltung für Arbeit, Integration und Frauen",
              "art": "Projektförderung",
              "jahr": "2016",
              "anschrift": "Am Bahnhof Westend 13, 14059 Berlin",
              "politikbereich": "Arbeit",
              "zweck": "Landeszuschuss für KMU - Lohnkostenzuschuss für \"Das Futterhaus\" - Berlin GmbH & Co. KG",
              "betrag": "1866",
              "empfaengerid": "nr_100287"
          }
      ],
    };
    const count = response.results.count;
    const grants = response.index;
    const perPage = response.results.items_per_page;
    // TODO: test data - END

    return (
      <div className="App">
        <h1>
          <AccountBalanceIcon color="secondary" />
          &nbsp;
          Senatsverwaltung für Finanzen | Zuwendungsdatenbank
        </h1>
  
        <Header visibility={!hasSearch} />

        <Form title="Suche" buttons={this.buttons}>
          {false ? (
            <div>
              <p onClick={this.onShowForm}>Show</p>
            </div>
          ) : (
            <div>
              <FormChild label="Stichwortsuche" tooltip={tooltip}>
                <input
                  type="search"
                  className="input"
                  name="stichwortsuche"
                  value={stichwortsuche}
                  onChange={this.onInputChange}
                />
              </FormChild>

              <FormChild label="Name">
                <input
                  type="text"
                  className="input"
                  name="name"
                  value={name}
                  onChange={this.onInputChange}
                />
              </FormChild>

              <FormChild label="Geber">
                <select className="input">
                  <option value="-- Alles --">-- Alles --</option>
                </select>
              </FormChild>

              <FormChild label="Art">
                <select className="input">
                  <option value="-- Alles --">-- Alles --</option>
                </select>
              </FormChild>

              <FormChild label="Jahr">
                <select className="input">
                  <option value="-- Alles --">-- Alles --</option>
                </select>
              </FormChild>

              <FormChild label="Politikbereich">
                <Select
                  list={POLITIKBEREICH}
                  name="politikbereich"
                  value={politikbereich}
                  onChange={this.onSelectChange}
                  hasAll
                />
              </FormChild>

              <FormChild label="Anschrift">
                <input
                  type="text"
                  className="input"
                  name="anschrift"
                  value={anschrift}
                  onChange={this.onInputChange}
                />
              </FormChild>

              <FormChild label="Zweck">
                <input
                  type="text"
                  className="input"
                  name="zweck"
                  value={zweck}
                  onChange={this.onInputChange}
                />
              </FormChild>
            </div>
          )}
        </Form>

        {(hasSearch && !hideForm) ? (
          <div>
            <p onClick={this.onHideForm}>Hide</p>
          </div>
        ) : null}

        <Result visibility={hasSearch} counter={count} perPage={perPage} grants={grants} />
  
        <Footer />
      </div>
    );
  }
}

export default App;
