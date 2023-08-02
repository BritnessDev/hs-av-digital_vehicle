<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
<style>
    html {
        /* display: flex;
        justify-content: center; */
        background: gray;
        font-family: sans-serif;
    }

    /* body {
        background-color: black;
    } */

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

    }


    .header-img {
        width: 30%;
        display: inline-block;
    }

    .header p {
        display: inline-block;
        width:50%;
        text-align: right;
        font-size: 22px;
        float: right;
        color: var(#1a5ecb);
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
        /* width: 800px; */
        /* height: 2400px; */
        padding: 15px 10px 15px 10px;
        background: white;
    }

    .flex {
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
</style>

</head>
<body>

<div class="content">
    <div class="header">
        <img src="https://www.autoveritas.de/wp-content/uploads/2021/03/2021-03-09-autoveritas-logo.png"
            class="header-img left"></img>
        <p class="right float-right">… die neutralen Autoexperten</p>
    </div>
    <div class="top-sign">
        <div class="left">
            <p class="font-bold">{{$city}}, {{$date}}</p>
            <p>Ort / Datum</p>
        </div>
        <div class="right float-right">
            <p class="font-bold">{{$case_number}}</p>
            <p>Auftragsnummer</p>
        </div>
    </div>

    <div class=" mt-4">
    <div class="mt-4">
        <div class="">
            <p class="left">Name:</p>
            <div class="right ml-2  font-bold">{{$firstname}} {{$surname}}</div>
        </div>
        <div class="">
            <p class="left">Ansprechpartner:</p>
            <div class="right ml-2  font-bold">{{$ansprechpartner}}</div>
        </div>
        <div class="">
            <p class="left">Adresse:</p>
            <div class="right ml-2  font-bold">{{$street_no}} {{$city}}</div>
        </div>
        <div class="">
            <p class="left">Amt. Kennz. / Fahrzeug:</p>
            <div class="right ml-2  font-bold">{{$license_plate}}</div>
        </div>
        <div class="">
            <p class="left">Telefon:</p>
            <div class="right ml-2  font-bold">{{$telephone}} {{$mobile_phone_number}}</div>
        </div>
        <div class="">
            <p class="left">E-Mail-Adresse:</p>
            <div class="right ml-2  font-bold">{{$email}}</div>
        </div>
        <div class="">
            <p class="left">Rechtsanwalt:</p>
            <div class="right ml-2  font-bold">GGG</div>
        </div>
    </div>
    <div class="mt-4">
        <p class="font-bold">Halter des gegnerischen Kfz (Schädiger / Versicherungsnehmer)</p>
        <div class="">
            <p class="left">Name:</p>
            <div class="right ml-2  font-bold">{{$firstname}} {{$surname}}</div>
        </div>
        <div class="">
            <p class="left">Adresse:</p>
            <div class="right ml-2  font-bold">{{$street_no}}  {{$zipcode}} {{$city}}</div>
        </div>
        <div class="">
            <p class="left">Amt. Kennz. / Fahrzeug:</p>
            <div class="right ml-2  font-bold">{{$license_plate}}</div>
        </div>
        <div class=" mt-4">
            <p class="left font-bold">Leistungsverpflichtete Versicherung:</p>
            <div class="right ml-2  font-bold">{{$insurance_company}}</div>
        </div>
        <div class="">
            <p class="left ">Versicherungsnummer:</p>
            <div class="right ml-2  font-bold">{{$insurance_number}}</div>
        </div>
        <div class="">
            <p class="left ">Schadennummer:</p>
            <div class="right ml-2  font-bold">{{$claim_number}}</div>
        </div>
        <div class="">
            <p class="left ">Schadentag / Zeit / Ort:</p>
            <div class="right ml-2  font-bold">{{$damage_date}} / {{$damage_place}}</div>
        </div>
    </div>
    <div class="mt-4">
        <p class="left text-sm font-bold">Reparaturwerkstatt:</p>
        <div class="min-h-23">
            {{$manufacturer}}
        </div>
    </div>
    <div class="mt-4">
        <p class="left text-sm font-bold">Vorschäden::</p>
        <div class="min-h-23">
            {{$previous_damage}}
        </div>
    </div>
    <div class="-mx-6 " style="margin-top: 140px;">
        <div class="text-center">
            <div class="footer float-left left">
                <p>Autoveritas GmbH …die neutralen Autoexperten</p>
                <p class="mt-2">Huttenstraße 27, 10553 Berlin</p>
                <p>Tel.: 030 / 54905810 | Fax: 030 / 549058195</p>
            </div>
            <!-- <img src="/images/footer-logo.png" class="footer-img"></img> -->
            <img src="https://i.ibb.co/8gwWq24/footer-logo.png" alt="footer-logo" class="footer-img" />

            <div class="footer text-right right float-right">
                <p>Geschäftsführerin: Bianca Schäftner</p>
                <p class="mt-2">Amtsgericht Charlottenburg - HRB 188120 B</p>
                <p>www.autoveritas.de | berlin@autoveritas.de</p>
            </div>
        </div>
    </div>
    <!-- <hr style="margin-top: 35px;margin-bottom: 35px;">
    </hr> -->
    <!-- Page 2 -->
    <div class="header">
        <img src="https://www.autoveritas.de/wp-content/uploads/2021/03/2021-03-09-autoveritas-logo.png"
            class="header-img"></img>
        <p>… die neutralen Autoexperten</p>
    </div>
    <p class="text-black font-bold mt-6">Daten, die ggf. von den oben gemachten Angaben bzw. den Halterangaben im Kfz-Schein abweichen:</p>
    <p class="text-primary mt-4">
        Postanschrift für die Zusendung des Gutachtens (falls abweichend vom Eintrag im Kfz-Schein)
    </p>
    <div class=" mt-4">
        <p class="left">Name:</p>
        <div class="right ml-2 text-lg font-bold">{{$firstname}} {{$surname}}</div>
    </div>
    <div class="">
        <p class="left">Straße / Hausnummer:</p>
        <div class="right ml-2 text-lg font-bold">{{$street_no}} / {{$city}}</div>
    </div>
    <div class="">
        <p class="left">Postleitzahl / Ort:</p>
        <div class="right ml-2 text-lg font-bold">{{$zipcode}}</div>
    </div>
    <div class="">
        <div class="left gap-3">
            <p class="left">Gutachten nur per E-Mail:</p>
            <img src="https://i.ibb.co/wJ3X92F/checkmark-black.png" alt="checkmark-black" class="checkmark-black right" />
        </div>
        <div class="right ml-2 text-lg font-bold">{{$email}}</div>
    </div>
    <div class="">
        <div class="">
            <p class="inline-block mt-3">Leasing</p>
            <div class="inline-block ml-2">                
                <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty">
                <p class="text-center">ja</p>
            </div>
            <div class="inline-block ml-2">
                <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty">
                <p>nein</p>
            </div>
        </div>
        <div class=" text-lg font-bold">{{$leasing}}</div>
    </div>

    <div class="">
        <div class="">
            <p class="inline-block">finanziert</p>
            <div class="inline-block ml-6">
                <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty">
                <p class="text-center">ja</p>
            </div>
            <div class="inline-block ml-2">
                <img src="https://i.ibb.co/TqGrW1P/checkmark-empty.png" alt="checkmark-empty">
                <p class="text-center">nein</p>
            </div>
        </div>
        <div class=" text-lg font-bold">{{$finance}}</div>
    </div>
    <p class="mt-4 text-primary font-bold">Name des Auftragsunterzeichners (z.B. bei Firmenfahrzeugen oder
        Bevollmächtigtem)</p>
    <div class=" mt-4">
        <p class="">Name:</p>
        <div class="text-lg font-bold">{{$firstname}} {{$surname}}</div>
    </div>
    <div class="border-black p-2 textbox-container">
        <p>Platz für zusätzliche Hinweise:</p>
        <p>
            {{$comment}}
        </p>
    </div>
    <div class="-mx-6 " style="margin-top: 140px;">
        <div class="text-center">
            <div class="footer float-left left">
                <p>Autoveritas GmbH …die neutralen Autoexperten</p>
                <p class="mt-2">Huttenstraße 27, 10553 Berlin</p>
                <p>Tel.: 030 / 54905810 | Fax: 030 / 549058195</p>
            </div>
            <!-- <img src="/images/footer-logo.png" class="footer-img"></img> -->
            <img src="https://i.ibb.co/8gwWq24/footer-logo.png" alt="footer-logo" class="footer-img" />

            <div class="footer text-right right float-right">
                <p>Geschäftsführerin: Bianca Schäftner</p>
                <p class="mt-2">Amtsgericht Charlottenburg - HRB 188120 B</p>
                <p>www.autoveritas.de | berlin@autoveritas.de</p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
