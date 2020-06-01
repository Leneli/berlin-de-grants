import React, { PureComponent } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Select } from './components/Select';
import { Form, FormChild } from './components/Form';
import { BUTTONS, POLITIKBEREICH } from './constants';
import './styles/App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const tooltip = 'Mit der Stichwortsuche können Sie nach den folgenden Informationen suchen: "Name", "Geber", "Anschrift", "Zweck", "Betrag" und "EmpfaengerID".';

    return (
      <div className="App">
        <h1>Senatsverwaltung für Finanzen | Zuwendungsdatenbank</h1>
  
        <Header visibility={true} />

        <Form title="Suche" buttons={BUTTONS}>
          <FormChild label="Stichwortsuche" tooltip={tooltip}>
            <input type="search" className="input" />
          </FormChild>

          <FormChild label="Name">
            <input type="text" className="input" />
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

          <FormChild label="Anschrift">
            <input type="text" className="input" />
          </FormChild>

          <FormChild label="Zweck">
            <input type="text" className="input" />
          </FormChild>
        </Form>
  
        <Footer />
      </div>
    );
  }
}

export default App;
