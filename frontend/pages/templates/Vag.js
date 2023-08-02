import React from 'react'

function Vag({contact_type = "", streen_no = "", city="", zipcode = "", signature="", telephone = "", input1 = "", input2 = "", input3 = ""}) {
  return (
    <div className='main-content'>
      
	<div className='content px-6'>
	<h1 class="tx-center">VOLLMACHT</h1>

	<div class="information">
		<h4> { contact_type }</h4>
		<h4>{ streen_no }</h4>
		<h4>{ zipcode } { city }</h4>

		<h4>Tel: { telephone }, Fax: 09144/94932</h4>
	</div>

	<div class="tx-right information bold">
		<h5>Zustellungen werden nur an den/die</h5>
		<h5>Bevollmächtige(n) erbeten!</h5>
	</div>

	<div class="">
		<span class="sig-left">wird hiermit In Sachen</span>
		<span class="bold ml-5">{input1}</span>
	</div>

	<div class="mt-5">
		<span class="sig-left">Unfall vom:</span>
		<span class="bold ml-5">{input2}</span>
	</div>

	<span class="mt-5 inline-block w-full">wegen</span>
	<span class="mt-5 inline-block w-full">Vollmacht erteilt</span>
	<ul>
		<li>zur Prozessführung (u. a. nach §§ 81 ff. ZPO) einschließlich der Befugnis zur Erhebung und
			Zurücknahme von Widerklagen;</li>
		<li>zur Antragstellung in Scheidungs- und Scheidungsfolgesachen, zum Abschluss von
			Vereinbarungen über Scheidungsfolgen sowie Stellung von Anträgen auf Erteilung von Rentenund sonstigen Versorgungsauskünften;</li>
		<li>zur Vertretung und Verteidigung in Strafsachen und Bußgeldsachen (§§ 302, 374 StPO)
			einschließlich der Vorverfahren sowie (für den Fall der Abwesenheit) zur Vertretung nach § 411
			StPO und mit ausdrücklicher Ermächtigung auch nach §§ 233 I, 23 StPO, zur Stellung von Strafund anderen nach der Strafprozessordnung zulässigen Anträgen und von Anträgen nach dem
			Gesetz über die Entschädigung für Strafverfolgungsmaßnahmen, insbesondere auch für das
			Betragsverfahren;</li>
		<li>zur Vertretung in sonstigen Verfahren und bei außergerichtlichen Verhandlungen aller Art
			(insbesondere In Unfallsachen zur Geltendmachung von Ansprüchen gegen Schädiger,
			Fahrzeughalter und deren Versicherer);</li>
		<li>zur Begründung und Aufhebung von Vertrags Verhältnissen und zur Abgabe und
			Entgegenahme von einseitigen Willenserklärungen (z. B. Kündigungen) im Zusammenhang mit
			der oben unter „wegen…“ genannten Angelegenheit.</li>
	</ul>

	<span>Die Vollmacht gilt für alle Instanzen und erstreckt sich auch auf Neben- und Folgesachen aller Art (z. B.
		Arrest und einstweilige Verfügung, Kostenfestsetzungs-, Zwangsvollstreckungs-, Interventions-,
		Zwangsversteigerung-, Zwangsverwaltungs- und Hinterlegungsverfahren sowie Insolvenzverfahren).
		Sie umfasst insbesondere die Befugnis, Zustellungen zu bewirken und entgegenzunehmen, die
		Vollmacht ganz oder teilweise auf andere zu übertragen (Untervollmacht), Rechtsmittel einzulegen,
		zurückzunehmen oder auf sie zu verzichten, den Rechtsstreit oder außergerichtliche Verhandlungen
		durch Vergleich, Verzicht oder Anerkenntnis zu erledigen, Geld, Wertsachen und Urkunden,
		insbesondere auch den Streitgegenstand und die vom Gegner, von der Justizkasse oder von sonstigen
		Stellen zu erstattenden Beträge entgegenzunehmen sowie Akteneinsicht zu nehmen.</span>

	<div class="signature" style={{marginTop: "10px"}}>
		<div class="left w-fit">
			<div class="w-fit" style={{marginRight: "20px", width: "150px", height: "50px", fontWeight: "bolder", fontSize: "20px"}}> {input3} </div>
			<hr />
			<span>Ort, Datum</span>
		</div>

		<div class="right flex flex-row">
			<div class="flex flex-col">
				<img src={signature} style={{width: "150px", height: "50px"}} />
				<hr />
				<span>Unterschrift</span>
			</div>
		</div>
	</div>
	</div>
	<style jsx>{`
		.body {
			font-family: sans-serif;
		}
		.tx-center {
			text-align: center;
		}
		
		.information h5{
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
			display: flex;
			justify-content: space-between;
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
		
		.absolute {
			position: absolute;
		}
		
		.right-0 {
			right: 0;
		}
		
		.w-fit {
			width: fit-content;
		}
		
		h4 {
			margin: 0 !important;
		}
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
	`}
	</style>
    </div>
  )
}

export default Vag
