import React from 'react'

function Auft({firstname = "", surname = "", signature = "", Schadenhergang = "", Vorschäden = "", input3 = "" }) {
  return (
    <div className='main-content'>
    <div className="content px-6">
        <div className="header">
            <img src="https://www.autoveritas.de/wp-content/uploads/2021/03/2021-03-09-autoveritas-logo.png"
                className="header-img left"></img>
            <p className="right" style={{fontSize: "12px;"}}>… die neutralen Autoexperten</p>
        </div>
        <div className="bg-blue head-line" style={{marginTop: "50px;"}}>
            <span className="text-white">1. Auftrag</span>
        </div>
        <p>
            Hiermit beauftrage ich <strong>{firstname} {surname}</strong>, das Kfz-Sachverständigenbüro Autoveritas GmbH,
            Huttenstr. 27, 10553 Berlin mit der Erstattung eines Schadengutachtens unter Haftpflichtgesichtspunkten. Es
            wurde
            vereinbart, dass sich die Kosten für das Gutachten gemäß Urteil des BGH (VI ZR 50/15) aus einem
            Grundhonorar,
            das sich
            aus der vom Auftragnehmer ermittelten Schadenhöhe ergibt, sowie den erforderlichen Nebenkosten
            zusammensetzen.
            Den untenstehenden Auszug aus der Honorartabelle habe ich zur Kenntnis genommen.
        </p>

        <div className="row bg-blue head-line mt-4">
            <span className="text-white">2. Zahlungsanweisung</span>
        </div>

        <p>
            Ich weise die Schadensersatzschuldner (Fahrer / Halter / Versicherungsnehmer / Haftpflicht-Versicherer)
            sowie
            meinen
            Rechtsbeistand (sofern vorhanden) an, aus der Entschädigungsleistung direkt an das Sachverständigenbüro die
            Kosten
            für die Erstellung des Schadensgutachtens in Höhe von ____________ € zu zahlen.
        </p>

        <div className="row flex-end">
            vorsteuerabzugsberechtigt: ja nein
        </div>

        <div className="row bg-blue head-line">
            <span className="text-white">3. Auszug aus der Honorartabelle</span>
        </div>

        <p>
            Ermittlungsgrundlage für das Honorar sind im Reparaturfall die vom Auftragnehmer ermittelten Reparaturkosten
            netto
            plus Wertminderung und im Totalschaden der ermittelte Wiederbeschaffungswert brutto.
        </p>

        <table className="customers">
            <thead>
                <tr>
                    <th>
                        Schaden höhe
                    </th>
                    <th>
                        Honorar netto
                    </th>
                    <th>
                        Schaden höhe
                    </th>
                    <th>
                        Honorar netto
                    </th>
                    <th>
                        Honorar brutto
                    </th>
                    <th>
                        Schaden höhe
                    </th>
                    <th>
                        Honora rnetto
                    </th>
                    <th>
                        Honora rnetto
                    </th>
                    <th>
                        Honorar brutto
                    </th>
                    <th>
                        Schaden höhe
                    </th>
                    <th>
                        Honora rnetto
                    </th>
                    <th>
                        Honora rbrutto
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
                <tr>
                    <td>1.000</td>
                    <td>341</td>
                    <td>405,79</td>
                    <td>4.750</td>
                    <td>716</td>
                    <td>851,45</td>
                    <td>11.000</td>
                    <td>1.100</td>
                    <td>1.309,00</td>
                    <td>22.000</td>
                    <td>1.738</td>
                    <td>2.067,63</td>
                </tr>
            </tbody>
        </table>

        <div className="w-full" >
            <table className="customers left" style={{width: "50% !important;", marginTop: "10px;"}}>
                <thead>
                    <tr>
                        <th>
                            Nebenkosten
                        </th>
                        <th>
                            netto
                        </th>
                        <th>
                            brutto
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bewertung</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Fotokosten Stück</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Fotokosten Stück (Duplikat)</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Fehlerspeicher auslese</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Lackschichtmessung</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>EDV-Abrufgebühr</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                </tbody>
            </table>

            <table className="customers right" style={{width: "40% !important", marginTop: "10px"}}>
                <thead>
                    <tr>
                        <th>
                            Nebenkosten
                        </th>
                        <th>
                            netto
                        </th>
                        <th>
                            brutto
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bewertung</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Fotokosten Stück</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Fotokosten Stück (Duplikat)</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Fehlerspeicher auslese</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>
                    <tr>
                        <td>Lackschichtmessung</td>
                        <td>10,00</td>
                        <td>11,90</td>
                    </tr>

                </tbody>
            </table>
        </div>


        <p style={{marginTop: "130px;"}}>
            Anfallende Kosten für Achsvermessung, Karosserievermessung, Verbringung, Teilepreis-Beschaffung, Demontage
            etc.
            werden
            gesondert, ggf. zuzüglich eines Bearbeitungsaufschlages, in Rechnung gestellt.
            Die vollständige Honorartabelle kann jederzeit im Internet unter www.autoveritas.de eingesehen werden und
            wurde
            mir zusammen
            mit den AGB sowie die Erklärung zum Widerrufsrecht und zum Datenschutz übersandt.
        </p>

        <p>
            Untersuchungen des Fahrzeuges hinsichtlich möglicher reparierter Vorschäden sollen ausdrücklich vorgenommen
            werden, da ich die
            eine belastbare Aussage hierzu nicht treffen kann.
            Verschwiegene Vorschäden führen zur Unbrauchbarkeit des Gutachtens, die Sachverständigenkosten werden dann
            nicht
            mehr durch
            den Versicherer übernommen. In diesem Fall werden diese durch mich persönlich an das Sachverständigenbüro
            ausgeglichen.
        </p>

        <div className="signature" style={{marginTop: "10px;"}}>
            <div className="left">
                <div className="left-signature" style={{width: "350px", height: "50px", fontWeight: "bold", fontSize: "20px"}}>
                    {input3}</div>
                <hr />
                <span>(Ort, Datum)</span>
            </div>

            <div className="right flex flex-row">

                <div className="flex flex-col">
                    <img src={signature} style={{width: "350px", height: "50px"}} />
                    <hr />
                    <span>(Unterschrift)</span>
                </div>
            </div>
        </div>

        <div className="-mx-6" style={{marginTop: "100px;"}}>
            <div className="row justify-between items-center text-center">
                <div className="footer left">
                    <p>Autoveritas GmbH …die neutralen Autoexperten</p>
                    <p className="mt-2">Huttenstraße 27, 10553 Berlin</p>
                    <p>Tel.: 030 / 54905810 | Fax: 030 / 549058195</p>
                </div>
                <img src="https://i.ibb.co/8gwWq24/footer-logo.png" alt="footer-logo" className="footer-img" />
                <div className="footer text-right right">
                    <p>Geschäftsführerin: Bianca Schäftner</p>
                    <p className="mt-2">Amtsgericht Charlottenburg - HRB 188120 B</p>
                    <p>www.autoveritas.de | berlin@autoveritas.de</p>
                </div>
            </div>
        </div>

        <div className="header">
            <img src="https://www.autoveritas.de/wp-content/uploads/2021/03/2021-03-09-autoveritas-logo.png"
                className="header-img left"></img>
            <p className="right" style={{fontSize: "12px"}}>… die neutralen Autoexperten</p>
        </div>


        <h3 style={{marginTop:"40px;"}}>Anmerkungen zum Unfallschaden</h3>
        <p>
            Das hier in Rede stehende Fahrzeug ist nach dem Unfallereignis nicht mehr fahrbereit. Aus Sicherheitsgründen
            kann das Fahrzeug am
            Straßenverkehr nicht mehr teilnehmen.
        </p>


        <p>Schadenhergang</p>
        <p style={{minHeight: "30px"}}>
            {Schadenhergang}
        </p>


        <p>Vorschäden</p>
        <p style={{minHeight: "30px"}}>
            {Vorschäden}
        </p>

        <h4>Der Sachverständige hat mich über die Plausibilität aufgeklärt. Alle reparierten und nicht reparierten Vorschäden habe ich wahrheitsgemäß angegeben.</h4>

        <div className="signature" style={{marginTop:"20px;"}}>
            <div className="left">
                <div className="left-signature" style={{width: "150px", height: "50px", fontWeight: "bold", fontSize: "14px"}}>
                    {input3}</div>
                <hr />
                <span>(Ort, Datum)</span>
            </div>

            <div className="right flex flex-row">

                <div className="flex flex-col">
                    <img src={signature} style={{width: "150px", height: "50px"}} />
                    <hr />
                    <span>(Unterschrift)</span>
                </div>
            </div>
        </div>



        <h3 style={{marginTop: "80px;"}}>Widerrufserklärung</h3>

        <p>Nur bei Auftragserteilung außerhalb der Geschäftsräume
Wird der Vertrag außerhalb der Geschäftsräume des oben genannten Sachverständigenbüros geschlossen, haben Kunden, die Verbraucher
sind, ein 14-tägiges Widerrufsrecht.
Mit genanntem Datum habe ich das Muster-Widerrufsformular erhalten und wurde über mein Widerrufsrecht belehrt.
        </p>

        <div className="signature" style={{marginTop:"20px;"}}>
            <div className="left">
                <div className="left-signature" style={{width: "150px", height: "50px", fontWeight: "bold", fontSize: "20px"}}>
                    {input3}</div>
                <hr />
                <span>(Ort, Datum)</span>
            </div>

            <div className="right flex flex-row">

                <div className="flex flex-col">
                    <img src={signature} style={{width: "150px",height: "50px"}} />
                    <hr />
                    <span>(Unterschrift)</span>
                </div>
            </div>
        </div>


        <p style={{marginTop: "80px;"}}>
            Verlust des Widerrufsrechts:
            Ich stimme ausdrücklich zu, dass das Sachverständigenbüro Autoveritas GmbH mit der Dienstleistung,
            Erstellung
            des Kfz-Gutachtens, sofort
            beginnt, obwohl die Widerrufsfrist noch nicht abgelaufen ist und bin in Kenntnis, dass mein Widerrufsrecht
            erlischt, wenn die Dienstleistung
            vollständig erbracht ist (§ 356 Abs. 4 BGB).
        </p>

        <div className="signature" style={{marginTop:"20px;"}}>
            <div className="left">
                <p>Mit dieser Unterschrift verzichte ich auf mein Widerrufsrecht</p>
            </div>
            <div className="right" >

                <div className="flex flex-col">
                    <img src={signature} style={{width: "150px", height: "50px"}} />
                    <hr />
                    <span>(Unterschrift)</span>
                </div>
            </div>
        </div>


        <h3 style={{marginTop: "80px;"}}>Datenschutzerklärung</h3>

        <p>
            Datenschutzerklärung gemäß DSGVO
            Mit der Erklärung zum Datenschutz informieren wir Sie entsprechend den gesetzlichen Bestimmungen darüber,
            welche
            personenbezogenen Daten von Ihnen gespeichert werden. Daher erfolgt die Erhebung, Speicherung, Verarbeitung
            oder
            Übermittlung
            von Daten unserer Kunden immer in Übereinstimmung mit den geltenden Datenschutzbestimmungen und übrigen
            Bestimmungen.
            Datenschutzrechtliche Einwilligungserklärungen
            Die nachstehenden Einwilligungserklärungen erfolgen freiwillig und können jederzeit widerrufen werden.
            Einzelheiten zum
            Datenschutz können Sie dem Infoblatt zum Datenschutz entnehmen.
            Ich bin damit einverstanden, dass meine vorstehend und umseitig genannten Daten zu Zwecken der
            Gutachtenerstellung
            und der weiteren Vorgangsbearbeitung genutzt, gespeichert und ggf. an die beauftragte Reparaturwerkstatt
            sowie
            den
            beauftragten Rechtsanwalt weitergeleitet werden.
        </p>

        <div className="signature" style={{marginTop:"10px;"}}>
            <div className="left">
                <div className="left-signature" style={{width: "150px", height: "50px", fontWeight: "bold", fontSize: "20px"}}>
                    {input3}</div>
                <hr />
                <span>(Ort, Datum)</span>
            </div>

            <div className="right flex flex-row">

                <div className="flex flex-col">
                    <img src={signature} style={{width: "150px", height: "50px"}} />
                    <hr />
                    <span>(Unterschrift)</span>
                </div>
            </div>
        </div>

        <div className="-mx-6" style={{marginTop: "80px"}}>
            <div className="row justify-between items-center text-center">
                <div className="footer left">
                    <p>Autoveritas GmbH …die neutralen Autoexperten</p>
                    <p className="mt-2">Huttenstraße 27, 10553 Berlin</p>
                    <p>Tel.: 030 / 54905810 | Fax: 030 / 549058195</p>
                </div>
                <img src="https://i.ibb.co/8gwWq24/footer-logo.png" alt="footer-logo" className="footer-img" />
                <div className="footer text-right right">
                    <p>Geschäftsführerin: Bianca Schäftner</p>
                    <p className="mt-2">Amtsgericht Charlottenburg - HRB 188120 B</p>
                    <p>www.autoveritas.de | berlin@autoveritas.de</p>
                </div>
            </div>
        </div>
    </div>
    <style jsx>{`

    .content {
        width: 8.27in; /* set the width to A4 size */
        height: calc(8.27in * 11.69 / 8.27); /* set the height based on the width-to-height scale */
        padding: 15px 10px 15px 10px;
        background: white;
    }

    .px-6
    {
        padding-left:1.5rem;
        padding-right:1.5rem
    }

    .left {
        float: left;
    }
    
    .right {
        float: right;
    }
    
    .center {
        text-align: center;
    }
    
    table {
        font-size: 10px;
    }
    
    .head-line {
        padding: 5px;
        font-size: 10px;
    }
    
    .bg-blue {
        background-color: #1a5ecb;
    }
    
    div {
        font-size: 12px;
    }
    
    :root {
        --main-color: #1a5ecb;
    }
    
    p {
        margin-top: 8px;
        margin-bottom: 8px;
        font-size: 10px;
    }
    
    .absolute {
        position: absolute;
    }
    
    .relative {
        position: relative;
    }
    
    .w-full {
        width: 100%;
    }
    
    .header {
        width: 100%;
    }
    
    .header-img {
        width: 150px;
    }
    
    .header p {
        font-size: 22px;
        color: var(--main-color);
    }
    
    .row {
        display: flex;
    }
    
    .gap-6 {
        gap: 24px;
    }
    
    .gap-3 {
        gap: 12px;
    }
    
    .justify-between {
        justify-content: space-between;
    }
    
    .items-end {
        align-items: end;
    }
    
    .items-center {
        align-items: center;
    }
    
    .col {
        display: flex;
        flex-direction: column;
    }
    
    .font-bold {
        font-weight: 600;
    }
    
    .-l-0 {
        left: 0px;
    }
    
    .t-5 {
        top: 20px;
    }
    
    .-mx-6 {
        margin-left: -24px;
        margin-right: -24px;
    }
    
    .mt-2 {
        margin-top: 8px;
    }
    
    .mt-4 {
        margin-top: 16px;
    }
    
    .mt-6 {
        margin-top: 24px;
    }
    
    .ml-6 {
        margin-left: 24px;
    }
    
    .ml-2 {
        margin-left: 8px;
    }
    
    .checkbox-container {
        display: flex;
        gap: 15px;
    }
    
    .checkbox-container div {
        display: flex;
        align-items: center;
        color: var(--main-color);
    }
    
    .checkbox-container div p {
        margin-left: 2px;
    }
    
    .checkbox {
        width: 16px;
        height: 18px;
        border: 1px solid var(--main-color);
        margin-right: 2px;
    }
    
    .border-black {
        border: 1px solid black;
    }
    
    .p-2 {
        padding: 8px;
    }
    
    .text-lg {
        font-size: 20px;
    }
    
    .text-sm {
        font-size: 14px;
    }
    
    .text-black {
        color: black;
    }
    
    .text-white {
        color: white;
    }
    
    .text-primary {
        color: var(--main-color);
    }
    
    .select-box {
        width: 30px;
        height: 28px;
        padding: 4px;
    }
    
    .w-25 {
        width: 25%;
    }
    
    .w-40 {
        width: 40%;
    }
    
    .w-45 {
        width: 45%;
    }
    
    .w-43 {
        width: 43%;
    }
    
    .w-57 {
        width: 57%;
    }
    
    .w-55 {
        width: 55%;
    }
    
    .w-60 {
        width: 60%;
    }
    
    .w-50 {
        width: 50%;
    }
    
    .w-75 {
        width: 75%;
    }
    
    .w-full {
        width: 100%;
    }
    
    .min-h-23 {
        min-height: 92px;
    }
    
    .min-h-30 {
        min-height: 120px;
    }
    
    .footer p {
        color: grey;
        letter-spacing: -0.6px;
    }
    
    .footer-img {
        height: 70px;
        /* width: 150px; */
    }
    
    .text-center {
        text-align: center;
    }
    
    .text-right {
        text-align: right;
    }
    
    .checkmark-black {
        width: 20px;
        height: 20px;
    }
    
    .textbox-container {
        min-height: 455px;
    }
    
    .customers {
        border-collapse: collapse;
        width: 100%;
    }
    
    .customers td,
    .customers th {
        border: 1px solid #ddd;
        padding: 1px;
    }
    
    .customers tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    
    .customers tr:hover {
        background-color: #ddd;
    }
    
    .customers th {
        padding: 2px;
        text-align: left;
        background-color: #8b8b8b;
        color: black;
    }
    
    .flex {
        display: flex;
    }    
    `}

    </style>
</div>
  )
}

export default Auft
