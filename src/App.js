import React, { PureComponent } from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Select } from './components/Select';
import { Result } from './components/Result';
import { Form, FormChild } from './components/Form';
import { POLITIKBEREICH, GEBER, JAHR, ART } from './constants';
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
      orderby: '',
      politikbereich: '',
      geber: '',
      jahr: '',
      art: '',
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
    const {
      hasSearch,
      hideForm,
      stichwortsuche,
      name,
      anschrift,
      zweck,
      politikbereich,
      geber,
      jahr,
      art,
      orderby,
    } = this.state;
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
                <Select
                  list={GEBER}
                  name="geber"
                  value={geber}
                  onChange={this.onSelectChange}
                  hasAll
                />
              </FormChild>

              <FormChild label="Art">
                <Select
                  list={ART}
                  name="art"
                  value={art}
                  onChange={this.onSelectChange}
                  hasAll
                />
              </FormChild>

              <FormChild label="Jahr">
                <Select
                  list={JAHR}
                  name="jahr"
                  value={jahr}
                  onChange={this.onSelectChange}
                  hasAll
                />
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

        {hasSearch && (
          <Result
            orderName={'orderby'}
            orderValue={orderby}
            onOrderSelect={this.onSelectChange}
            q={{
              stichwortsuche,
              name,
              anschrift,
              zweck,
              politikbereich,
              geber,
              jahr,
              art,
              orderby,
            }}
          />
        )}
  
        <Footer />
      </div>
    );
  }
}

export default App;
