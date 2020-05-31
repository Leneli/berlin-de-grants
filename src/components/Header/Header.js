import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  visibility: PropTypes.bool,
};

const defaultProps = {
  visibility: true,
};

const Header = ({ visibility }) => {
  if (!visibility) return null;

  return (
    <div>
      <p>In der Zuwendungsdatenbank werden die von den Behörden ausgereichten Zuwendungen an juristische Personen veröffentlicht (ab einem Zuwendungsbetrag i. H. v. 100 Euro rückwirkend für die letzten 5 Jahre), aktuell die Zuwendungen des Jahres 2018. Dies erfolgt jeweils zum 30. Juni eines jeden Jahres. Zuwendungen an natürliche Personen und Gesellschaften bürgerlichen Rechts werden jeweils pro Politikbereich in einer Summe veröffentlicht. Die Zuwendungsdatenbank ist ein bloßes Medium der Berichterstattung, die Senatsverwaltung für Finanzen fungiert hier als Administrator.</p>

      <p>Die Zuwendungen selbst werden in eigener fachlicher Zuständigkeit von den einzelnen Behörden im Rahmen der zur Verfügung stehenden Haushaltsmittel vergeben. Dafür gelten einheitlich für alle Behörden die Vorgaben der Landeshaushaltsordnung (insbesondere §§ 23, 44 Landeshaushaltsordnung: Leistungen an Stellen außerhalb der Verwaltung Berlins, erhebliches Interesse Berlins an der Aufgabenerfüllung, das ohne die Zuwendungen nicht oder nicht im notwendigen Umfang erfüllt werden kann).</p>

      <p>Der Nachweis über die zweckgerichtete Verwendung erfolgt durch die Zuwendungsempfänger ebenfalls gegenüber den zuwendungsgebenden Stellen.</p>

      <p>Sie haben mit der Suchfunktion die Möglichkeit, gezielt Informationen zu verschiedenen Aspekten der Zuwendungsvergabe (Erweiterte Suche) zu suchen. Derzeit sind die Zuwendungen für die Jahre 2014 bis 2018 eingestellt, die Datenbank wird regelmäßig aktualisiert (letztmalig am 27.06.2019).</p>

      <p>Für eine Gesamtübersicht der bisher eingestellten Informationen (Nummern 9.4.1 in Verbindung mit 1.5 der AV zum § 44 LHO) führen Sie die Suche aus, ohne Suchbegriffe einzutragen.</p>
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
