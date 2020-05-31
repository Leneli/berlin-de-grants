import React from 'react';
import '../../styles/footer.scss';

const Footer = () => (
  <div className="footer-wrapper">
    <h3 className="footer-title">Hilfe</h3>

    <p className="footer-text">Mit der Stichwortsuche können Sie nach den folgenden Informationen suchen: “Empfänger”, “Politikbereich”, “Anschrift” und “Zuwendungszweck”. Die Freitextsuche findet alle Einträge, die eines der gesuchten Wörter enthalten. Um nach einer genauen Wortgruppe zu suchen, schreiben Sie diese in doppelte Anführungszeichen “”.Geben Sie einen Straßennamen ein, so werden Ihnen alle Standorte in der Nähe angezeigt. In der Liste werden die Treffer nach der Entfernung zur jeweiligen Straße sortiert.Die Zusammenstellung basiert auf den Lieferungen der Senats- und Bezirksverwaltungen. Ausstehende Lieferungen werden umgehend nachgetragen. Die rechtlichen Grundlagen der Landeshaushaltsordnung finden sie hier</p>
  </div>
);

export default Footer;
