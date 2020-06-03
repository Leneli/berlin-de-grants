import React, { PureComponent } from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Select } from './components/Select';
import { Grant } from './components/Grant';
import { Form, FormChild } from './components/Form';
import { POLITIKBEREICH } from './constants';
import './styles/App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasSearch: false,
      hideForm: false,
      counter: 43234,
      ...this.emptyForm,
    };

    this.emptyForm = {
      stichwortsuche: '',
      name: '',
      anschrift: '',
      zweck: '',
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
    this.setState({ hasSearch: true, hideForm: true });
  }

  onShowForm = () => {
    this.setState({ hideForm: false });
  }

  onHideForm = () => {
    this.setState({ hideForm: true });
  }

  onReset = () => {
    this.setState({ hasSearch: false, hideForm: false, ...this.emptyForm });
  }

  onInputChange = e => {
    const input = e.target;
    const { name, value } = input;
    this.setState({ [name]: value });
  }

  onSelectChange = () => {}

  render() {
    const { hasSearch, hideForm, counter, stichwortsuche, name, anschrift, zweck } = this.state;
    const tooltip = 'Mit der Stichwortsuche können Sie nach den folgenden Informationen suchen: "Name", "Geber", "Anschrift", "Zweck", "Betrag" und "EmpfaengerID".';

    return (
      <div className="App">
        <h1>
          <AccountBalanceIcon color="secondary" />
          &nbsp;
          Senatsverwaltung für Finanzen | Zuwendungsdatenbank
        </h1>
  
        <Header visibility={!hasSearch} />

        <Form title="Suche" buttons={this.buttons}>
          {hideForm ? (
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
                <Select list={POLITIKBEREICH} hasAll />
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

        <div className="result-wrapper">
          <h3>Ergebnisse der Suche - Zuwendungsdatenbank</h3>
          <p>Ihre Suche <b>ergab {counter} Ergebnisse</b>. Um weniger Treffer zu erhalten können Sie die Suche über die Suchmaske weiter einschränken.</p>
          
          <FormChild label="Sortieren nach">
            <Select />
          </FormChild>
          
          <div className="grants-wrapper">
            <Grant
              name={'Arbeiterwohlfahrt Berlin Kreisverband Südost e. V.'}
              geber={'Bezirksamt Neukölln'}
              art={'Projektförderung'}
              jahr={2014}
              anschrift={'Erkstrasse 1, 12043 Berlin'}
              politikbereich={'Soziales'}
              zweck={'Schuldnerberatung - Mahlower Strasse'}
              betrag={625000}
            />

            <Grant
              name={'Arbeiterwohlfahrt Berlin Kreisverband Südost e. V.'}
              geber={'Bezirksamt Neukölln'}
              art={'Projektförderung'}
              jahr={2014}
              anschrift={'Erkstrasse 1, 12043 Berlin'}
              politikbereich={'Soziales'}
              zweck={'Schuldnerberatung - Mahlower Strasse'}
              betrag={625000}
            />

            <Grant
              name={'Arbeiterwohlfahrt Berlin Kreisverband Südost e. V.'}
              geber={'Bezirksamt Neukölln'}
              art={'Projektförderung'}
              jahr={2014}
              anschrift={'Erkstrasse 1, 12043 Berlin'}
              politikbereich={'Soziales'}
              zweck={'Schuldnerberatung - Mahlower Strasse'}
              betrag={625000}
            />

            <Grant
              name={'Arbeiterwohlfahrt Berlin Kreisverband Südost e. V.'}
              geber={'Bezirksamt Neukölln'}
              art={'Projektförderung'}
              jahr={2014}
              anschrift={'Erkstrasse 1, 12043 Berlin'}
              politikbereich={'Soziales'}
              zweck={'Schuldnerberatung - Mahlower Strasse'}
              betrag={625000}
            />

            <Grant
              name={'Arbeiterwohlfahrt Berlin Kreisverband Südost e. V.'}
              geber={'Bezirksamt Neukölln'}
              art={'Projektförderung'}
              jahr={2014}
              anschrift={'Erkstrasse 1, 12043 Berlin'}
              politikbereich={'Soziales'}
              zweck={'Schuldnerberatung - Mahlower Strasse'}
              betrag={625000}
            />
          </div>
        </div>
  
        <Footer />
      </div>
    );
  }
}

export default App;
