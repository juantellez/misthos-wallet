include ViewCommon;

let title = {js|datenschutzerklärung|js};
let section1 = {js|Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).|js};
let section2Heading = {js|Verantwortlicher|js};
let section3Heading = {js|Arten der verarbeiteten Daten:|js};
let section3 =
  <ul>
    <li> {{js|Bestandsdaten (z.B., Namen, Adressen).|js} |> text} </li>
    <li> {{js|Kontaktdaten (z.B., E-Mail, Telefonnummern).|js} |> text} </li>
    <li>
      {{js|Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).|js} |> text}
    </li>
    <li>
      {
        {js|Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).|js}
        |> text
      }
    </li>
    <li>
      {
        {js|Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).|js}
        |> text
      }
    </li>
  </ul>;
let section4Heading = {js|Kategorien betroffener Personen|js};
let section4 = {js|Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer“).|js};
let section5Heading = {js|Zweck der Verarbeitung|js};
let section5 =
  <ul>
    <li>
      {
        {js|Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.|js}
        |> text
      }
    </li>
    <li>
      {
        {js|Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.|js}
        |> text
      }
    </li>
    <li> {{js|Sicherheitsmaßnahmen.|js} |> text} </li>
    <li> {{js|Reichweitenmessung/Marketing|js} |> text} </li>
  </ul>;
let section6Heading = {js|Verwendete Begrifflichkeiten|js};
let section6P1 = {js| „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
  |js};
let section6P2 = {js| „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.  |js};
let section6P3 = {js| „Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.  |js};

let section6P4 = {js| „Profiling“ jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.  |js};

let section6P5 = {js| Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.  |js};

let section6P6 = {js| „Auftragsverarbeiter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.|js};

let section7Heading = {js|Maßgebliche Rechtsgrundlagen|js};
let section7 = {js|Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.|js};

let section8Heading = {js|Sicherheitsmaßnahmen|js};
let section8P1 = {js|Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.|js};
let section8P2 = {js|Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen (Art. 25 DSGVO).|js};

let section9Heading = {js|Zusammenarbeit mit Auftragsverarbeitern und Dritten|js};
let section9P1 = {js|Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).|js};
let section9P2 = {js|Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.|js};
let section10Heading = {js|Übermittlungen in Drittländer|js};
let section10 = {js|Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln“).|js};
let section11Heading = {js|Rechte der betroffenen Personen|js};
let section11P1 = {js|Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 DSGVO.|js};
let section11P2 = {js|Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.|js};
let section11P3 = {js|Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen.|js};
let section11P4 = {js|Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.|js};
let section11P5 = {js|Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.|js};

let section12Heading = {js|Widerrufsrecht|js};
let section12 = {js|Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen|js};

let section13Heading = {js|Widerspruchsrecht|js};
let section13 = {js|Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art. 21 DSGVO jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.|js};

let section14Heading = {js|Cookies und Widerspruchsrecht bei Direktwerbung|js};
let section14P1 = {js|Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies“).|js};
let section14P2 = {js|Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.|js};
let section14P3 = {js|Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.|js};
let section14P4 =
  <p>
    {
      {js|Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite |js}
      |> text
    }
    <a href="http://www.aboutads.info/choices/" target="_blank">
      {"http://www.aboutads.info/choices/" |> text}
    </a>
    {"oder die EU-Seite " |> text}
    <a href="http://www.youronlinechoices.com/" target="_blank">
      {"http://www.youronlinechoices.com/" |> text}
    </a>
    {
      {js| erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.|js}
      |> text
    }
  </p>;

let section15Heading = {js|Löschung von Daten|js};
let section15P1 = {js|Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.|js};
let section15P2 = {js|Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB (Handelsbriefe).|js};
let section15P3 = {js|Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB (Handelsbriefe).|js};
let section15P4 = {js|Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben, etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei Unterlagen im Zusammenhang mit elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch genommen wird.|js};

let section16Heading = {js|Kontaktaufnahme|js};
let section16P1 = {js|Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet. Die Angaben der Nutzer können in einem Customer-Relationship-Management System ("CRM System") oder vergleichbarer Anfragenorganisation gespeichert werden.|js};
let section16P2 = {js|Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.|js};

let section17Heading = {js|Google Analytics|js};
let section17P1 =
  <p>
    {
      {js|Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google LLC („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.|js}
      |> text
    }
    {
      {js|. Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäisches Datenschutzniveau einzuhalten (|js}
      |> text
    }
    <a
      href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
      target="_blank">
      {
        "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
        |> text
      }
    </a>
  </p>;
let section17P2 = {js|Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.|js};
let section17P3 = {js|Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
|js};
let section17P4 =
  <p>
    {
      {js|Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren:|js}
      |> text
    }
    <a href=" http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">
      {" http://tools.google.com/dlpage/gaoptout?hl=de" |> text}
    </a>
  </p>;

let section17P5 =
  <p>
    {
      {js|Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google |js}
      |> text
    }
    <a href=" https://policies.google.com/technologies/ads" target="_blank">
      {"https://policies.google.com/technologies/ads" |> text}
    </a>
    {
      {js|sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google|js}
      |> text
    }
    <a href=" https://adssettings.google.com/authenticated" target="_blank">
      {"https://adssettings.google.com/authenticated" |> text}
    </a>
  </p>;

let section17P6 = {js|Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.|js};

let section18Heading = {js|Newsletter|js};
let section18P1 = {js|Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres Newsletters sowie das Anmelde-, Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte auf. Indem Sie unseren Newsletter abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.|js};
let section18P2 = {js|Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren Leistungen und uns.|js};
let section18P3 = {js|Double-Opt-In und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.|js};
let section18P4 = {js|Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre E-Mailadresse angeben. Optional bitten wir Sie einen Namen, zwecks persönlicher Ansprache im Newsletters anzugeben.|js};
let section18P5 = {js|Der Versand des Newsletters und die mit ihm verbundene Erfolgsmessung erfolgen auf Grundlage einer Einwilligung der Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 Nr. 3 UWG oder falls eine Einwilligung nicht erforderlich ist, auf Grundlage unserer berechtigten Interessen am Direktmarketing gem. Art. 6 Abs. 1 lt. f. DSGVO i.V.m. § 7 Abs. 3 UWG.|js};
let section18P6 = {js|Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO. Unser Interesse richtet sich auf den Einsatz eines nutzerfreundlichen sowie sicheren Newslettersystems, das sowohl unseren geschäftlichen Interessen dient, als auch den Erwartungen der Nutzer entspricht und uns ferner den Nachweis von Einwilligungen erlaubt.|js};
let section18P7 = {js|Kündigung/Widerruf - Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters. Wir können die ausgetragenen E-Mailadressen bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern bevor wir sie löschen, um eine ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.|js};

let section19Heading = {js|Newsletter - Mailchimp|js};
let section19P1 =
  <p>
    {
      {js|Der Versand der Newsletter erfolgt mittels des Versanddienstleisters „MailChimp“, einer Newsletterversandplattform des US-Anbieters Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Die Datenschutzbestimmungen des Versanddienstleisters können Sie hier einsehen: |js}
      |> text
    }
    <a href="https://mailchimp.com/legal/privacy/" target="_blank">
      {"https://mailchimp.com/legal/privacy/" |> text}
    </a>
    {
      {js|. The Rocket Science Group LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäisches Datenschutzniveau einzuhalten (|js}
      |> text
    }
    <a
      href="https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active"
      target="_blank">
      {
        "https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active"
        |> text
      }
    </a>
    {
      {js|). Der Versanddienstleister wird auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO und eines Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3 S. 1 DSGVO eingesetzt.|js}
      |> text
    }
  </p>;
let section19P2 = {js|Der Versanddienstleister kann die Daten der Empfänger in pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer, zur Optimierung oder Verbesserung der eigenen Services nutzen, z.B. zur technischen Optimierung des Versandes und der Darstellung der Newsletter oder für statistische Zwecke verwenden. Der Versanddienstleister nutzt die Daten unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder um die Daten an Dritte weiterzugeben.|js};

let section20Heading = {js|Onlinepräsenzen in sozialen Medien|js};
let section20P1 = {js|Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf der jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien deren jeweiligen Betreiber.|js};
let section20P2 = {js|Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.|js};
let section20P3 = {js|Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern um eine Einwilligung in die Datenverarbeitung gebeten werden (d.h. ihr Einverständnis z.B. über das Anhaken eines Kontrollkästchens oder Bestätigung einer Schaltfläche erklären) ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
|js};
let section20P4 = {js|Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.|js};
let section20P5 = {js|Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
|js};

let section20P6 = {js|- Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) |js};

let section20P7 =
  <p>
    {{js|Datenschutzerklärung: |js} |> text}
    <a href="https://www.google.com/policies/privacy/" target="_blank">
      {"https://www.google.com/policies/privacy/" |> text}
    </a>
    {{js|, Opt-Out: |js} |> text}
    <a href="https://adssettings.google.com/authenticated" target="_blank">
      {"https://adssettings.google.com/authenticated" |> text}
    </a>
    {"." |> text}
    {{js|, Privacy Shield:  |js} |> text}
    <a
      href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
      target="_blank">
      {
        "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
        |> text
      }
    </a>
    {"." |> text}
  </p>;

let section20P8 = {js|- Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA)|js};
let section20P9 =
  <p>
    {{js|Datenschutzerklärung: |js} |> text}
    <a href="https://twitter.com/de/privacy" target="_blank">
      {"https://twitter.com/de/privacy" |> text}
    </a>
    {", Opt-Out: " |> text}
    <a href="https://twitter.com/personalization" target="_blank">
      {"https://twitter.com/personalization" |> text}
    </a>
    {". Privacy Shield" |> text}
    <a
      href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
      target="_blank">
      {
        "https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
        |> text
      }
    </a>
  </p>;

let section20P10 = {js|- LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland) |js};
let section20P11 =
  <p>
    {{js|Datenschutzerklärung: |js} |> text}
    <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">
      {"https://www.linkedin.com/legal/privacy-policy" |> text}
    </a>
    {", Opt-Out: " |> text}
    <a
      href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
      target="_blank">
      {
        "https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
        |> text
      }
    </a>
    {". Privacy Shield" |> text}
    <a
      href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"
      target="_blank">
      {
        "https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"
        |> text
      }
    </a>
  </p>;

let section21Heading = {js|Sentry - Open Source Error Tracking|js};
let section21P1 = {js|Mit Hilfe des Error-Trackings stellen wir die Verfügbarkeit und Integrität unseres Onlineangebotes sicher und verwenden die dabei verarbeiteten Daten, um unser Onlineangebot technisch zu optimieren.|js};
let section21P2 =
  <p>
    {
      {js|Zu diesen Zwecken setzen wir den Dienst Sentry von der Firma Functional Software, Inc. dba Sentry, 132 Hawthorne Street, San Francisco, CA 94107. Die Firma Functional Software ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten |js}
      |> text
    }
    <a
      href="https://www.privacyshield.gov/participant?id=a2zt0000000TNDzAAO"
      target="_blank">
      {
        "https://www.privacyshield.gov/participant?id=a2zt0000000TNDzAAO"
        |> text
      }
    </a>
  </p>;
let section21P3 = {js|Sentry ist eine Open-Source Echtzeit-Fehlerverfolgungsplattform für Web-Apps, mobilen Apps und Spiele und bietet die Entwicklern den nötigen Einblick, um Fehler und Abstürze zu reproduzieren und zu beheben.|js};
let section21P4 = {js|Wir setzen Sentry auf Grundlage unserer berechtigten Interessen an der Sicherheit, Fehlerfreiheit und Optimierung unseres Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO ein.
|js};
let section21P6 =
  <p>
    {
      {js|Weitere Informationen zur Verarbeitung personenbezogener Daten durch Sentry, erhalten Sie in der Datenschutzerklärung des Dienstes:|js}
      |> text
    }
    <a href="https://sentry.io/privacy/" target="_blank">
      {"https://sentry.io/privacy/" |> text}
    </a>
  </p>;

let section22 =
  <p>
    <a href="https://datenschutz-generator.de/" target="_blank">
      {
        {js|Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke|js}
        |> text
      }
    </a>
  </p>;
