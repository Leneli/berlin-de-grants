import React, { PureComponent } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Form, FormChild } from './components/Form';
import './styles/App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.formButtons = [
      {
        name: 'Suchen',
        type: 'primary',
        method: () => {},
      },
      {
        name: 'Suche zurücksetzen',
        type: 'secondary',
        method: () => {},
      },
    ];
  }

  render() {
    const tooltip = 'Mit der Stichwortsuche können Sie nach den folgenden Informationen suchen: "Name", "Geber", "Anschrift", "Zweck", "Betrag" und "EmpfaengerID".';

    return (
      <div className="App">
        <h1>Senatsverwaltung für Finanzen | Zuwendungsdatenbank</h1>
  
        <Header visibility={true} />

        <Form title="Suche" buttons={this.formButtons}>
          <FormChild label="Stichwortsuche" tooltip={tooltip}>input...</FormChild>
        </Form>
  
        <Footer />
      </div>
    );
  }
}

export default App;
