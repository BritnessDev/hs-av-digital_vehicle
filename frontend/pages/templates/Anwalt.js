import React from 'react'

function Anwalt({city="", zipcode="", street_no="", date="", case_number="", firstname="", surname="", ansprechpartner="", telephone="", mobile_phone_number="", leasing="", license_plate="", email ,insurance_company="", insurance_number="", claim_number="", damage_date="", damage_place="", previous_damage="", manufacturer="", finance="", comment="" }) {
  return (
    <div className='main-content'>
        <div className='flex flex-column gap-3'>
        <div className="content px-6">
        <div className="header">
            <img src="https://www.autoveritas.de/wp-content/uploads/2021/03/2021-03-09-autoveritas-logo.png"
                className="header-img left"></img>
            <p className="right float-right">… die neutralen Autoexperten</p>
        </div>
        <div className="top-sign">
            <div className="left">
                <p className="font-bold">{city ? city +"," : city} {date}</p>
                <p>Ort / Datum</p>
            </div>
            <div className="right float-right">
                <p className="font-bold">{case_number}</p>
                <p>Auftragsnummer</p>
            </div>
        </div>
        <div className="mt-4">
            <p className='font-bold text-black'>Folgende Daten hat das Sachverständigenbüro zum Zwecke der Gutachtenerstellung erhalten:</p>
            <div className='mt-2 flex gap-2 items-center'>
                <div className='flex gap-1 items-center'>
                    <img src="img/mark/blue-checkmark.png" className='w-5 h-5' />
                    <p className='text-blue font-bold'>Haftpflichtschaden</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src="img/mark/blue-checkbox.png" className='w-5 h-5' />
                    <p className='text-blue font-bold'>Kaskoschaden</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src="img/mark/blue-checkbox.png" className='w-5 h-5' />
                    <p className='text-blue font-bold'>Fahrzeugbewertung</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src="img/mark/blue-checkbox.png" className='w-5 h-5' />
                    <p className='text-blue font-bold'>Sondergutachten</p>
                </div>
            </div>
        </div>
    <div className=" mt-4">
        <div className='flex justify-between items-center'>
            <p className='font-bold'>Auftraggeber (Anspruchsteller)</p>
            <div className='gap-4 flex items-center'>
                <p childrene text-lg>vorsteuerabzugsberechtigt:</p>
                <div className='flex justify-center items-center gap-1'>
                    <img src="img/mark/dark-checkbox.png" className='w-5 h-5' />
                    <p>ja</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <img src="img/mark/dark-checkbox.png" className='w-5 h-5' />
                    <p>nein</p>
                </div>
            </div>
        </div>
        <div className="mt-1">
            <div className="">
                <p className="left">Name:</p>
                <div className="right ml-2  font-bold">{firstname} {surname}</div>
            </div>
            <div className="">
                <p className="left">Ansprechpartner:</p>
                <div className="right ml-2  font-bold">{ansprechpartner}</div>
            </div>
            <div className="">
                <p className="left">Adresse:</p>
                <div className="right ml-2  font-bold">{street_no} {city}</div>
            </div>
            <div className="">
                <p className="left">Amt. Kennz. / Fahrzeug:</p>
                <div className="right ml-2 font-bold">{license_plate}</div>
            </div>
            <div className="">
                <p className="left">Telefon:</p>
                <div className="right ml-2  font-bold">{telephone} {mobile_phone_number}</div>
            </div>
            <div className="">
                <p className="left">E-Mail-Adresse:</p>
                <div className="right ml-2  font-bold">{email}</div>
            </div>
            <div className="">
                <p className="left">Rechtsanwalt:</p>
                <div className="right ml-2  font-bold">GGG</div>
            </div>
        </div>
        <div className="mt-4">
            <p className="font-bold">Halter des gegnerischen Kfz (Schädiger / Versicherungsnehmer)</p>
            <div className="">
                <p className="left">Name:</p>
                <div className="right ml-2  font-bold">{firstname} {surname}</div>
            </div>
            <div className="">
                <p className="left">Adresse:</p>
                <div className="right ml-2  font-bold">{street_no}  {zipcode} {city}</div>
            </div>
            <div className="">
                <p className="left">Amt. Kennz. / Fahrzeug:</p>
                <div className="right ml-2  font-bold">{license_plate}</div>
            </div>
            <div className=" mt-4">
                <p className="left font-bold">Leistungsverpflichtete Versicherung:</p>
                <div className="right ml-2  font-bold">{insurance_company}</div>
            </div>
            <div className="">
                <p className="left ">Versicherungsnummer:</p>
                <div className="right ml-2  font-bold">{insurance_number}</div>
            </div>
            <div className="">
                <p className="left ">Schadennummer:</p>
                <div className="right ml-2  font-bold">{claim_number}</div>
            </div>
            <div className="">
                <p className="left ">Schadentag / Zeit / Ort:</p>
                <div className="right ml-2  font-bold">{damage_date} / {damage_place}</div>
            </div>
        </div>
        <div className="mt-4">
            <p className="left text-sm font-bold">Reparaturwerkstatt:</p>
            <div className="min-h-23">
                {manufacturer}
            </div>
        </div>
        <div className="mt-4">
            <p className="left text-sm font-bold">Vorschäden::</p>
            <div className="min-h-23">
                {previous_damage}
            </div>
        </div>
        <div className="-mx-6 mt-3">
            <div className="text-center">
                <div className="footer float-left left">
                    <p>Autoveritas GmbH …die neutralen Autoexperten</p>
                    <p className="mt-2">Huttenstraße 27, 10553 Berlin</p>
                    <p>Tel.: 030 / 54905810 | Fax: 030 / 549058195</p>
                </div>
                <img src="https://i.ibb.co/8gwWq24/footer-logo.png" alt="footer-logo" className="footer-img" />

                <div className="footer text-right right float-right">
                    <p>Geschäftsführerin: Bianca Schäftner</p>
                    <p className="mt-2">Amtsgericht Charlottenburg - HRB 188120 B</p>
                    <p>www.autoveritas.de | berlin@autoveritas.de</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='content px-6'>
            <div className="header">
                <img src="https://www.autoveritas.de/wp-content/uploads/2021/03/2021-03-09-autoveritas-logo.png"
                    className="header-img"></img>
                <p>… die neutralen Autoexperten</p>
            </div>
            <p className="text-black font-bold mt-6">Daten, die ggf. von den oben gemachten Angaben bzw. den Halterangaben im Kfz-Schein abweichen:</p>
            <p className="text-primary mt-4">
                Postanschrift für die Zusendung des Gutachtens (falls abweichend vom Eintrag im Kfz-Schein)
            </p>
            <div className=" mt-4">
                <p className="left">Name:</p>
                <div className="right ml-2 text-lg font-bold">{firstname} {surname}</div>
            </div>
            <div className="">
                <p className="left">Straße / Hausnummer:</p>
                <div className="right ml-2 text-lg font-bold">{street_no} / {city}</div>
            </div>
            <div className="">
                <p className="left">Postleitzahl / Ort:</p>
                <div className="right ml-2 text-lg font-bold">{zipcode}</div>
            </div>
            <div className="">
                <div className="left gap-3">
                    <p className="left">Gutachten nur per E-Mail:</p>
                    <img src="https://i.ibb.co/wJ3X92F/checkmark-black.png" alt="checkmark-black" className="checkmark-black right" />
                </div>
                <div className="right ml-2 text-lg font-bold">{email}</div>
            </div>
            <div className="">
                <div className="">
                    <p className="inline-block mt-3">Leasing</p>
                    <div className="inline-block ml-2">                
                        <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty"/>
                        <p className="text-center">ja</p>
                    </div>
                    <div className="inline-block ml-2">
                        <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty"/>
                        <p>nein</p>
                    </div>
                </div>
                <div className=" text-lg font-bold">{leasing}</div>
            </div>

            <div className="">
                <div className="">
                    <p className="inline-block">finanziert</p>
                    <div className="inline-block ml-6">
                        <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty"/>
                        <p className="text-center">ja</p>
                    </div>
                    <div className="inline-block ml-2">
                        <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty"/>
                        <p className="text-center">nein</p>
                    </div>
                </div>
                <div className=" text-lg font-bold">{finance}</div>
            </div>
            <p className="mt-4 text-primary font-bold">Name des Auftragsunterzeichners (z.B. bei Firmenfahrzeugen oder
                Bevollmächtigtem)</p>
            <div className=" mt-4">
                <p className="">Name:</p>
                <div className="text-lg font-bold">{firstname} {surname}</div>
            </div>
            <div className="border-black p-2 textbox-container">
                <p>Platz für zusätzliche Hinweise:</p>
                <p>
                    {comment}
                </p>
            </div>
            <div className="-mx-6 " style={{marginTop: "140px"}}>
                <div className="text-center">
                    <div className="footer float-left left">
                        <p>Autoveritas GmbH …die neutralen Autoexperten</p>
                        <p className="mt-2">Huttenstraße 27, 10553 Berlin</p>
                        <p>Tel.: 030 / 54905810 | Fax: 030 / 549058195</p>
                    </div>
                    <img src="https://i.ibb.co/8gwWq24/footer-logo.png" alt="footer-logo" className="footer-img" />

                    <div className="footer text-right right float-right">
                        <p>Geschäftsführerin: Bianca Schäftner</p>
                        <p className="mt-2">Amtsgericht Charlottenburg - HRB 188120 B</p>
                        <p>www.autoveritas.de | berlin@autoveritas.de</p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
    
    p {
        margin-top: 3px;
        margin-bottom: 3px;
        font-size: 12px;
    }
    
    .absolute {
        position: absolute;
    }
    
    .relative {
        position: relative;
    }
    
    .header {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .header img {
        width: 260px;
    }
    
    
    .header-img {
        width: 30%;
        display: inline-block;
    }
    
    .header p {
        display: inline-block;
        text-align: right;
        font-size: 22px;
        float: right;
        color: #1a5ecb;
        font-family: "Lucida Calligraphy";
    }
    
    
    .w-50 {
        width: 50%;    
    }
    
    .left {
        display: inline-block;
    }
    
    .right {
        display: inline-block;
    }
    
    .inline-block {
        display: inline-block;
    }
    
    .float-left {
        float: left;
    }
    
    .float-right {
        float: right;
    }
    
    .content {
        width: 8.27in; /* set the width to A4 size */
        height: calc(8.27in * 11.69 / 8.27); /* set the height based on the width-to-height scale */
        padding: 15px 10px 15px 10px;
        background: white;
    }
    
    .flex {
        display: flex;
    }

    .gap-3 {
        gap: 12px;
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

    .mt-1 {
        margin-top: 4px;
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

    .gap-1 {
        gap: 4px;
    }

    .gap-2 {
        gap: 8px;
    }
    
    .checkbox-container {
        display: flex;
        gap: 15px;
    }
    
    .checkbox-container div {
        display: flex;
        align-items: center;
        color: var(#1a5ecb);
    }
    
    .checkbox-container div p {
        margin-left: 2px;
    }
    
    .checkbox {
        width: 16px;
        height: 18px;
        border: 1px solid var(#1a5ecb);
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

    .text-blue {
        color: #0e56a2;
    }
    
    .text-black {
        color: black;
    }
    
    .text-primary {
        color: var(#1a5ecb);
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

    .w-5 {
        width: 20px;
    }

    .h-5 {
        width: 20px;
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
        min-height: 265px;
    }
    `}
    </style>
    </div>
    </div>
    )}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default Anwalt
