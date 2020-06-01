import React, { PureComponent } from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Select } from './components/Select';
import { Form, FormChild } from './components/Form';
import { POLITIKBEREICH } from './constants';
import './styles/App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasSearch: false,
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
    this.setState({ hasSearch: true });
  }

  onReset = () => {
    this.setState({ hasSearch: false, ...this.emptyForm });
  }

  onInputChange = e => {
    const input = e.target;
    const { name, value } = input;
    this.setState({ [name]: value });
  }

  render() {
    const { hasSearch, stichwortsuche, name, anschrift, zweck } = this.state;
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
            <select className="input">
              <option value="-- Alles --">-- Alles --</option>
              {POLITIKBEREICH.map((option, index) =>
                <option key={`option_${index}`} value={option.value}>{option.label}</option>)}
            </select>
          </FormChild>

          <FormChild label="Politikbereich NEW">
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
        </Form>
  
        <Footer />
      </div>
    );
  }
}

export default App;
