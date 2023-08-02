import React from 'react'

function Voll({ firstname = "", surname = "", city="", streen_no = "", zipcode = "", telephone = "", input1 = "", input2 = "", input3 = "", signature = "" }) {
  return (
    <div className='main-content'>
      <div className='content px-6'>
		<header>
			<h1 class="tx-center title">{firstname +' ' + surname}</h1>
			<h4 class="tx-center sub-title">Rechtsanwälte für Verkehrsrecht</h4>
			<hr class="header-hr" />
		</header>

		<div class="subheader left">
			<h5>{firstname + ' ' + surname}</h5>
			<h5>Rechtsanwälte für Verkehrsrecht</h5>
			<h5>{ streen_no }</h5>
			<h5>{ zipcode } { city }</h5>
			<h5>Tel.: { telephone }</h5>
			<h5>Fax: 040 / 414 96 18-30</h5>
		</div>

		<div class="contain">
			<h2 class="tx-center">VOLLMACHT</h2>
			
			<h3 class="input-label">{firstname + ' ' + surname} Rechtsanwälte für Verkehrsrecht wird hiermit in Sachen:</h3>
			<h4 class="bold">{ input1 }</h4>
			<span>wegen: Verkehrsunfall vom</span> <span class="bold">{ input2 }</span>
			<h4 class="bold">sowohl Vollmacht zur außergerichtlichen Vertretung aller Art als auch Prozessvollmacht für alle
				Verfahren in
				allen Instanzen erteilt.</h4>

			<h4>Diese Vollmacht erstreckt sich insbesondere auf folgende Befugnisse:</h4>
			<ul>
				<li>Außergerichtliche Vertretung, Geltendmachung von Ansprüchen gegen Schädiger, Fahrzeughalter und deren
					Versicherer und Akteneinsicht.</li>
				<li>Begründung und Aufhebung von Vertragsverhältnissen und Abgabe und Entgegennahme von einseitigen
					Willenserklärungen (z. B. Kündigungen).</li>
				<li>Vertretung im privaten und gesetzlichen Schlichtungsverfahren.</li>
				<li>Prozessführung (u. a. nach §§ 81 ff. ZPO)</li>
				<li>Antragstellung in Scheidungs- und Scheidungsfolgesachen, Abschluss von Vereinbarungen über
					Scheidungsfolgen sowie Stellung von Anträgen auf Erteilung von Renten- und sonstigen
					Versorgungsauskünften.</li>
				<li>Vertretung und Verteidigung in Strafsachen und Bußgeldsachen (§§ 302, 274 StPO) einschließlich der
					Vorverfahren sowie (für den Fall der Abwesenheit) Vertretung nach § 411 II StPO und mit ausdrücklicher
					Ermächtigung auch nach §§ 233 I, 234 StPO und Stellung von Straf- und anderen nach der
					Strafprozessordnung zulässigen Anträgen.</li>
				<li>Bei Anträgen nach dem Gesetz über die Entschädigung für Strafverfolgungsmaßnahmen gilt die Vollmacht
					auch für das Betragsverfahren.</li>
				<li>Vertretung vor Verwaltungs-, Sozial- und Finanzbehörden und -gerichten.</li>
				<li>Vertretung vor den Arbeitsgerichten.</li>
				<li>Beilegung des Rechtsstreits oder außergerichtlicher Verhandlungen durch Vergleich, sonstige Einigung,
					Verzicht oder Anerkenntnis.</li>
				<li>Einlegung und Rücknahme von Rechtsmitteln sowie Verzicht auf solche.</li>
				<li>Einlegung und Rücknahme von Rechtsmitteln sowie Verzicht auf solche.</li>
				<li>Alle Neben- und Folgeverfahren, z. B. Arrest und einstweilige Verfügung, Kostenfestsetzung,
					Zwangsvollstreckung einschließlich der aus ihr erwachsenden besonderen Verfahren, Insolvenz,
					Zwangsversteigerung, Zwangsverwaltung und Hinterlegung.</li>
				<li>Empfangnahme und Freigabe von Geld, Wertsachen, Urkunden und Sicherheiten, insbesondere des
					Streitgegenstandes, von Kautionen, Entschädigungen und der vom Gegner, von der Justizkasse oder anderen
					Stellen zu erstattenden Kosten und notwendigen Auslagen.</li>
				<li> Übertragung der Vollmacht ganz oder teilweise auf andere.</li>
			</ul>
		</div>

		<div class="signature">
			<div class="left">
				<div style={{width: "150px", height: "50px"}}> { input3 } </div>

				<hr />
				<span>(Ort, Datum)</span>
			</div>

			<div class="right flex flex-row" style={{alignItems: 'end'}}>

				<div class="flex flex-col">
					<img width='150' height='50' src={signature} />  
					<hr />
					<span>(Unterschrift)</span>
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
		body {
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			font-family: sans-serif;
		}
		
		.tx-center {
			text-align: center;
		}
		
		.title {
			margin-top: 0;
			margin-bottom: 0;
		}
		
		.sub-title {
			margin-top: 0;
		}
		
		.header-hr {
			width: 100%;
			margin: 0 auto;
		}
		
		.subheader {
			margin-top: 20px;
		}
		
		.input-label {
			margin: 2px 0;
		}
		
		.subheader h5 {
			margin: 5px 0;
		}
		
		.information h5 {
			margin-top: 5px;
			margin-bottom: 5px;
		}
		
		.bold {
			font-weight: bold;
		}
		
		.tx-right {
			text-align: right;
		}
		
		ul {
			list-style: decimal;
		}
		
		.signature {
			/* display: flex; */
			/* flex-direction: row; */
			/* justify-content: space-between; */
		}
		
		.signature .left {
			width: 40%;
			position: absolute;
		}
		
		
		.signature .right {
			width: 40%;
			position: absolute;
			right: 0;
		}
		
		.signature h5 {
			margin-bottom: 3px;
		}
		
		.signature .right div {
			display: flex;
		}
		
		.flex {
			display: flex;
			width: 100%;
		}
		
		.flex-col {
			flex-direction: column;
		}
		
		.flex-row {
			flex-direction: row;
		}
		
		.x {
			padding-top: 25px;
			margin-right: 20px;
			color: red;
		}
		
		hr {
			background: black;
			height: 0.5px;
			width: 100%;
		}
		
		.sig-left {
			width: 150px;
			text-align: right;
			display: inline-block;
		}
		
		.mt-5 {
			margin-top: 10px;
		}
		
		.ml-5 {
			margin-left: 10px;
		}
		
		.inline-block {
			display: inline-block;
		}
		
		.w-full {
			width: 100%;
		}
		
		.left-signature {
			display: inline-block;
		}
		
		.right-signature { 
			width: fit-content;
			display: inline-block;
		}
		
		ul li {
			font-size: 12px;
		}
		h4 {
			font-size: 13px;
		}
		
		h3 {
			font-size: 14px;
		}
		h2 {
			font-size: 15px;
		}
	`}
	</style>
    </div>
  )
}

export default Voll
