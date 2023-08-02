// import React from 'react'
// import { useSelector } from "react-redux"
// import Anwalt from "./templates/Anwalt";
// import Auft from "./templates/Auft";
// import Vag from "./templates/VAG";
// import Vat from "./templates/Vat";
// import Voll from "./templates/Voll";

// export const PreviewPdf = () = {
//     const previewData = useSelector(state = state.preview.previewData);
//     return (
//         <div className="main-content d-flex justify-content-center">
//             {
//                 previewData.id === "0" ? <Anwalt previewData={previewData} /> :
//                 previewData.id === "1" ? <Vag previewData={previewData} /> :
//                 previewData.id === "2" ? <Auft previewData={previewData} /> :
//                 previewData.id === "3" ? <Voll previewData={previewData} /> :
//                 <Vat previewData={previewData} />
//             }
//         </div>
//     )
// }

// export default PreviewPdf


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Anwalt from './templates/Anwalt';
import Auft from './templates/Auft';
import Vag from './templates/VAG';
import Vat from './templates/Vat';
import Voll from './templates/Voll';

export const PreviewPdf = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, [])
    const previewData = useSelector((state) => state.preview.previewData);

    if (!isClient) {
        return null;
    }

    return (
    <div className="main-content d-flex justify-content-center">
        {previewData.id === '0' ? (
            <Anwalt
                firstname = {previewData.data['customer']['firstname'] ?? ''}
                surname = {previewData.data['customer']['surname'] ?? ''}
                ansprechpartner = {previewData.data['general']['ownership'] ?? '' }
                license_plate = {previewData.data['general']['license_plate'] ?? ''}
                date = {previewData.data['general']['date'] ?? ''}
                case_number = {previewData.data['general']['case_number'] ?? ''}
                contact_type = {previewData.data['customer']['contact_type'] ?? ''}
                vorsteuerabzugsberechtigt = 'yes'  //  'no'
                street_no = {previewData.data['customer']['street_no'] ?? ''}
                zipcode = {previewData.data['customer']['zip'] ?? ''}
                city = {previewData.data['customer']['city'] ?? ''}
                telephone = {previewData.data['customer']['telephone'] ?? ''}
                mobile_phone_number = {previewData.data['customer']['mobile_phone_number'] ?? ''}
                email = {previewData.data['customer']['email'] ?? ''}
                name = {(previewData.data['customer']['firstname'] ?? '')+(previewData.data['customer']['surname'] ?? '')}
                insurance_company = {previewData.data['insurance']['company'] ?? ''}
                insurance_number = ''
                claim_number = {previewData.data['insurance']['claim_number'] ?? ''}
                damage_date = {previewData.data['general']['date_damage'] ?? ''}
                damage_place = {previewData.data['general']['place_damage'] ?? ''}
                manufacturer = {previewData.data['general']['manufacturer'] ?? ''}
                previous_damage = ''
                leasing = ''
                finance = ''
                comment = {previewData.data['customer']['comment'] ?? ''}
                Vorschäden = ''
                Schadenhergang = ''
                input1 = "input1"
                input2 = "input2"
                input3 = "input3"
                signature = {previewData.data['sign']['signature0'] ?? ''}
            />
        ) : previewData.id === '1' ? (
            <Vag
            contact_type = {previewData.data['customer']?.contact_type ?? ''}
            streen_no = {previewData.data['customer']?.street_no ?? ''}
            zipcode = {previewData.data['customer']?.zip ?? ''}
            city = {previewData.data['customer']?.city ?? ''}
            telephone = {previewData.data['customer']?.telephone ?? ''}
            input1 = "$input1"
            input2 = "$input2"
            input3 = "$input3"
            signature = {previewData.data['sign']?.signature4 ?? ''}
            />
        ) : previewData.id === '2' ? (
            <Auft
            firstname = {previewData.data['customer']['firstname'] ?? ''}
            surname = {previewData.data['customer']['surname'] ?? ''}
            ansprechpartner = {previewData.data['general']['ownership'] ?? ''}
            license_plate = {previewData.data['general']['license_plate'] ?? ''}
            date = {previewData.data['general']['date'] ?? ''}
            case_number = {previewData.data['general']['case_number'] ?? ''}
            contact_type = {previewData.data['customer']['contact_type'] ?? ''}
            vorsteuerabzugsberechtigt = 'yes'  //  'no'
            street_no = {previewData.data['customer']['street_no'] ?? ''}
            zipcode = {previewData.data['customer']['zip'] ?? ''}
            city = {previewData.data['customer']['city'] ?? ''}
            telephone = {previewData.data['customer']['telephone'] ?? ''}
            mobile_phone_number = {previewData.data['customer']['mobile_phone_number'] ?? ''}
            email = {previewData.data['customer']['email'] ?? ''}
            name = {(previewData.data['customer']['firstname'] ?? '')+(previewData.data['customer']['surname'] ?? '')}
            insurance_company = {previewData.data['insurance']['company'] ?? ''}
            insurance_number = ''
            claim_number = {previewData.data['insurance']['claim_number'] ?? ''}
            damage_date = {previewData.data['general']['date_damage'] ?? ''}
            damage_place = {previewData.data['general']['place_damage'] ?? ''}
            manufacturer = {previewData.data['general']['manufacturer'] ?? ''}
            previous_damage = ''
            leasing = ''
            finance = ''
            comment = {previewData.data['customer']['comment'] ?? ''}
            Vorschäden = ''
            Schadenhergang = ''
            input1 = "$input1"
            input2 = "$input2"
            input3 = "$input3"
            signature = {previewData.data['sign']['signature2'] ?? ''}
            />
        ) : previewData.id === '3' ? (
            <Voll
            firstname = {previewData.data?.customer?.firstname ?? ''}
            surname = {previewData.data?.customer?.surname ?? ''}
            streen_no = {previewData.data?.customer?.street_no ?? ''}
            zipcode = {previewData.data?.customer?.zip ?? 'D-22083'}
            city = {previewData.data?.customer?.city ?? ''}
            telephone = {previewData.data?.customer?.telephone ?? ''}
            input1 = "$input1"
            input2 = "$input2"
            input3 = "$input3"
            signature = {previewData.data?.sign?.signature3 ?? ''}
            />
        ) : (
            <Vat
            contact_type = {previewData.data?.customer?.contact_type ?? ''}
            streen_no = {previewData.data?.customer?.street_no ?? ''}
            zipcode = {previewData.data?.customer?.zip ?? ''}
            city = {previewData.data?.customer?.city ?? ''}
            telephone = {previewData.data?.customer?.telephone ?? ''}
            input1 = "$input1"
            input2 = "$input2"
            input3 = "$input3"
            signature = {previewData.data?.sign?.signature4 ?? ''}
            />
        )}
        </div>
    );

}

// export const PreviewPdf = () = {
//     const [isClient, setIsClient] = useState(false);
//     const previewData = useSelector((state) = state.preview.previewData);

//     useEffect(() = {
//         setIsClient(true);
//     }, []);

//     if (!isClient) {
//         return null;
//     }

//     return (
//         <div className="main-content d-flex justify-content-center">
//             {previewData.id === '0' ? (
//                 <Anwalt
//                 firstname = previewData.data['customer']['firstname'] ?? '',
//                 'surname' = previewData.data['customer']['surname'] ?? '',
//                 'ansprechpartner' = previewData.data['general']['ownership'] ?? '', 
//                 'license_plate' = previewData.data['general']['license_plate'] ?? '',
//                 'date' = previewData.data['general']['date'] ?? '',
//                 'case_number' = previewData.data['general']['case_number'] ?? '',
//                 'contact_type' = previewData.data['customer']['contact_type'] ?? '',
//                 'vorsteuerabzugsberechtigt' = 'yes' , //  'no'
//                 'street_no' = previewData.data['customer']['street_no'] ?? '',
//                 'zipcode' = previewData.data['customer']['zip'] ?? '',
//                 'city' = previewData.data['customer']['city'] ?? '',
//                 'telephone' = previewData.data['customer']['telephone'] ?? '',
//                 'mobile_phone_number' = previewData.data['customer']['mobile_phone_number'] ?? '',
//                 'email' = previewData.data['customer']['email'] ?? '',
//                 'name' = (previewData.data['customer']['firstname'] ?? '').(previewData.data['customer']['surname'] ?? ''),
//                 'insurance_company' = previewData.data['insurance']['company'] ?? '',
//                 'insurance_number' = '',
//                 'claim_number' = previewData.data['insurance']['claim_number'] ?? '',
//                 'damage_date' = previewData.data['general']['date_damage'] ?? '',
//                 'damage_place' = previewData.data['general']['place_damage'] ?? '',
//                 'manufacturer' = previewData.data['general']['manufacturer'] ?? '',
//                 'previous_damage' = '',
//                 'leasing' = '',
//                 'finance' = '',
//                 'comment' = previewData.data['customer']['comment'] ?? '',
//                 'Vorschäden' = '',
//                 'Schadenhergang' = '',
//                 'input1' = $input1,
//                 'input2' = $input2,
//                 'input3' = $input3,
//                 'signature' = previewData.data['sign']['signature0'] ?? ''
//                 />
//             ) : previewData.id === '1' ? (
//                 <Vag previewData={previewData} />
//             ) : previewData.id === '2' ? (
//                 <Auft previewData={previewData} />
//             ) : previewData.id === '3' ? (
//                 <Voll previewData={previewData} />
//             ) : (
//                 <Vat previewData={previewData} />
//             )}
//         </div>
//     );
// };

export default PreviewPdf;
