<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Support\Facades\View;
use App\Models\Document;
use Illuminate\Contracts\Validation\Rule;
use App\Models\GeneralData;
use App\Models\CustomerData;
use App\Models\Address2Data;
use App\Models\InsuranceData;
use App\Models\OpponentData;
use App\Models\LawyerData;
use App\Models\WorkshopData;
use App\Models\BankData;
use App\Models\LessorData;
use App\Models\Signature;
use App\Models\SignatureData;
use App\Models\Documents;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class PdfController extends Controller
{    
    public function createDocument($validatedData) {
        
        if($validatedData['general']){
            $generalId = GeneralData::create($validatedData['general'])->id;
            $newDocument['generalId'] = $generalId;
        }

        if($validatedData['customer']){
            $customerId = CustomerData::create($validatedData['customer'])->id;
            $newDocument['customerId'] = $customerId;
        }

        if($validatedData['address2']){
            
            $address2Id = Address2Data::create($validatedData['address2'])->id;
            $newDocument['address2Id'] = $address2Id;
        }    
        
        if($validatedData['insurance']){
            
            $insuranceId = InsuranceData::create($validatedData['insurance'])->id;
            $newDocument['insuranceId'] = $insuranceId;
        }

        if($validatedData['opponent']){
            
            $opponentId = OpponentData::create($validatedData['opponent'])->id;
            $newDocument['opponentId'] = $opponentId;
        }
        
        if($validatedData['lawyer']){
            
            $lawyerId = LawyerData::create($validatedData['lawyer'])->id;
            $newDocument['lawyerId'] = $lawyerId;
        }
        
        if($validatedData['workshop']){
            
            $workshopId = WorkshopData::create($validatedData['workshop'])->id;
            $newDocument['workshopId'] = $workshopId;
        }

        if($validatedData['bank']){
            
            $bankId = BankData::create($validatedData['bank'])->id;
            $newDocument['bankId'] = $bankId;
        }
            
        if($validatedData['lessor']){
            
            $lessorId = LessorData::create($validatedData['lessor'])->id;
            $newDocument['lessorId'] = $lessorId;
        }
        
        if($validatedData['sign']){
            $sign0 = Signature::create( [
                'signature' => $validatedData['sign']['signature0']
            ])->id;
            $sign1 = Signature::create([
                    'signature' => $validatedData['sign']['signature1']
                ])->id;
            $sign2 = Signature::create([
                    'signature' => $validatedData['sign']['signature2']
                ])->id;
            $sign3 = Signature::create([
                    'signature' => $validatedData['sign']['signature3']
                ])->id;
            $sign4 = Signature::create([
                    'signature' => $validatedData['sign']['signature4']
                ])->id;
                // $sign0, $sign1, $sign2, $sign3, $sign4
            $signatureId = SignatureData::create([
                'signature0' => $sign0,
                'signature1' => $sign1,
                'signature2' => $sign2,
                'signature3' => $sign3,
                'signature4' => $sign4
            ])->id;
            $newDocument['signatureId'] = $signatureId;
        }

        Documents::create($newDocument);
    }

    public function updateDocument($validatedData, $id) {
        $id = $id ?? '';  // document id

        $document = Documents::findOrFail($id);

        if($validatedData['general']){
            $general_data = GeneralData::where('id', $document->generalId)->get();
            if(count($general_data) !== 0) {
                $general_data = $general_data[0];
                $general_data->update($validatedData['general']);
            } else {
                
                $generalId = GeneralData::create($validatedData['general'])->id;
                $document['generalId'] = $generalId;
                $document->save();
            }
        }

        if($validatedData['customer']){
            $custom_data = CustomerData::where('id', $document->customerId)->get();
            if(count($custom_data) != 0)    {
                $custom_data = $custom_data[0];
                $custom_data->update($validatedData['customer']);
            } else {
                
                $customerId = CustomerData::create($validatedData['customer'])->id;
                $document['customerId'] = $customerId;
                $document->save();
            }        
        }

        if($validatedData['address2']){
            $address2_data = Address2Data::where('id', $document->address2Id)->get();
            if(count($address2_data) != 0) {
                $address2_data = $address2_data[0];
                $address2_data->update($validatedData['address2']);
            } else {
                
                $address2Id = CustomerData::create($validatedData['address2'])->id;
                $document['address2Id'] = $address2Id;
                $document->save();
            } 
        } 
        
        if($validatedData['insurance']){
            $insurance_data = InsuranceData::where('id', $document->insuranceId)->get();
            if(count($insurance_data) != 0) {
                $insurance_data = $insurance_data[0];
                $insurance_data->update($validatedData['insurance']);
            } else {
                
                $insuranceId = InsuranceData::create($validatedData['insurance'])->id;
                $document['insuranceId'] = $insuranceId;
                $document->save();
            } 
        }

        if($validatedData['opponent']){
            $opponent_data = OpponentData::where('id', $document->opponentId)->get();
            if(count($opponent_data) != 0) {
                $opponent_data = $opponent_data[0];
                $opponent_data->update($validatedData['opponent']);
            } else {
                
                $opponentId = OpponentData::create($validatedData['opponent'])->id;
                $document['opponentId'] = $opponentId;
                $document->save();
            }
        } 

        if($validatedData['lawyer']){
            $lawyer_data = LawyerData::where('id', $document->lawyerId)->get();
            if(count($lawyer_data) != 0) {
                $lawyer_data = $lawyer_data[0];
                $lawyer_data->update($validatedData['lawyer']);
            } else {
                
                $lawyerId = LawyerData::create($validatedData['lawyer'])->id;
                $document['lawyerId'] = $lawyerId;
                $document->save();
            }
        } 

        if($validatedData['workshop']){
            $workshop_data = WorkshopData::where('id', $document->workshopId)->get();
            if(count($workshop_data) != 0) {
                $workshop_data = $workshop_data[0];
                $workshop_data->update($validatedData['workshop']);
            } else {
                
                $workshopId = WorkshopData::create($validatedData['workshop'])->id;
                $document['workshopId'] = $workshopId;
                $document->save();
            }
        } 

        if($validatedData['bank']){
            $bank_data = BankData::where('id', $document->bankId)->get();
            if(count($bank_data) != 0) {
                $bank_data = $bank_data[0];
                $bank_data->update($validatedData['bank']);
            } else {
                
                $bankId = BankData::create($validatedData['bank'])->id;
                $document['bankId'] = $workshopId;
                $document->save();
            }
        } 

        if($validatedData['lessor']){
            $lessor_data = LessorData::where('id', $document->lessorId)->get();
            if(count($lessor_data) != 0) {
                $lessor_data = $lessor_data[0];
                $lessor_data->update($validatedData['lessor']);
            } else {
                
                $lessorId = LessorData::create($validatedData['lessor'])->id;
                $document['lessorId'] = $lessorId;
                $document->save();
            }
        } 
        
        if($validatedData['sign']){
            $sign_data = SignatureData::where('id', $document->signatureId)->get();
            if(count($sign_data) != 0) {

                $signId = $sign_data[0]['signature0'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                    $sign[0]->update([
                        'signature' => $validatedData['sign']['signature0']
                    ]);
                
                $signId = $sign_data[0]['signature1'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                $sign[0]->update([
                    'signature' => $validatedData['sign']['signature1']
                ]);
                
                $signId = $sign_data[0]['signature2'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                $sign[0]->update([
                    'signature' => $validatedData['sign']['signature2']
                ]);
                
                $signId = $sign_data[0]['signature3'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                $sign[0]->update([
                    'signature' => $validatedData['sign']['signature3']
                ]);

                $signId = $sign_data[0]['signature4'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                $sign[0]->update([
                    'signature' => $validatedData['sign']['signature4']
                ]);
            } else {
                $sign0 = Signature::create([
                    'signature' => $validatedData['document']['sign']['signature0'],
                ])->id;
                $sign1 = Signature::create([
                    'signature' => $validatedData['document']['sign']['signature1'],
                ])->id;
                $sign2 = Signature::create([
                    'signature' => $validatedData['document']['sign']['signature2'],
                ])->id;
                $sign3 = Signature::create([
                    'signature' => $validatedData['document']['sign']['signature3'],
                ])->id;
                $sign4 = Signature::create([
                    'signature' => $validatedData['document']['sign']['signature4'],
                ])->id;
                $signId = SignatureData::create([
                    // $sign0, $sign1, $sign2, $sign3, $sign4
                    'signature0' => $sign0,
                    'signature1' => $sign1,
                    'signature2' => $sign2,
                    'signature3' => $sign3,
                    'signature4' => $sign4
                ])->id;
                // $signatureId = SignatureData::create($validatedData['document']['sign'])->id;
                $document['signatureId'] = $signId;
                $document->save();
            }
        } 

        return $document->id;
    }

    public function generatePDF(Request $request)
    {
        try {
            // return ["success" => $request, 'filePath' => $date.'.pdf'];
            $type = $request['type'];
            if($type != 'add') {
                $id = $request['id'];
            }
            $pdfData = $request['pdfData'];
            $flag = $request['flag'];
            // Get the HTML content that you want to convert to PDF
            // $html = '<span>Hello, World!</span>'.$id;
            $options = new Options();
            $options->set('isRemoteEnabled', true);

            $dompdf = new Dompdf($options);
            
            if($flag == 'add' || $flag == '') {
                $this->createDocument($pdfData);
            } else if($flag == 'update') {
                $this->updateDocument($pdfData, $id);
            }

            // $id, $type (0 ~ 4), $pdfData, $flag //('add', 'update'), 
            switch($type) {
                case 0:
                $input1 = '';
                if($pdfData['customer']['salutation'] == "company") {
                    $input1 = $pdfData['customer']['companyname'] ?? '';
                } else {
                    $input1 = $pdfData['customer']['surname'] ?? '';
                }

                if($pdfData['opponent']) {
                    if($pdfData['opponent']['salutation'] == 'company') {
                        $input1 = $pdfData['opponent']['surname'] ?? '' .'./.'.$pdfData['opponent']['company'] ?? '';
                    } else {
                        $input1 = $pdfData['opponent']['company'] ?? '';
                    }
                }

                $input2 = $pdfData['general']['date_damage'] ?? ''; // damage day
                $input3 = $pdfData['general']['created_at'] ?? '';  // created on

                $html = view('anwaltda', 
                    [
                        'firstname' => $pdfData['customer']['firstname'] ?? '',
                        'surname' => $pdfData['customer']['surname'] ?? '',
                        'ansprechpartner' => $pdfData['general']['ownership'] ?? '', 
                        'license_plate' => $pdfData['general']['license_plate'] ?? '',
                        'date' => $pdfData['general']['date'] ?? '',
                        'case_number' => $pdfData['general']['case_number'] ?? '',
                        'contact_type' => $pdfData['customer']['contact_type'] ?? '',
                        'vorsteuerabzugsberechtigt' => 'yes' , //  'no'
                        'street_no' => $pdfData['customer']['street_no'] ?? '',
                        'zipcode' => $pdfData['customer']['zip'] ?? '',
                        'city' => $pdfData['customer']['city'] ?? '',
                        'telephone' => $pdfData['customer']['telephone'] ?? '',
                        'mobile_phone_number' => $pdfData['customer']['mobile_phone_number'] ?? '',
                        'email' => $pdfData['customer']['email'] ?? '',
                        'name' => ($pdfData['customer']['firstname'] ?? '').($pdfData['customer']['surname'] ?? ''),
                        'insurance_company' => $pdfData['insurance']['company'] ?? '',
                        'insurance_number' => '',
                        'claim_number' => $pdfData['insurance']['claim_number'] ?? '',
                        'damage_date' => $pdfData['general']['date_damage'] ?? '',
                        'damage_place' => $pdfData['general']['place_damage'] ?? '',
                        'manufacturer' => $pdfData['general']['manufacturer'] ?? '',
                        'previous_damage' => '',
                        'leasing' => '',
                        'finance' => '',
                        'comment' => $pdfData['customer']['comment'] ?? '',
                        'Vorschäden' => '',
                        'Schadenhergang' => '',
                        'input1' => $input1,
                        'input2' => $input2,
                        'input3' => $input3,
                        'signature' => $pdfData['sign']['signature0'] ?? '',
                    ]
                )->render();
                break;
                case 1:
                    $input1 = '';
                    if($pdfData['customer']['salutation'] == "company") {
                        $input1 = $pdfData['customer']['companyname'] ?? '';
                    } else {
                        $input1 = $pdfData['customer']['surname'] ?? '';
                    }

                    if($pdfData['opponent']) {
                        if($pdfData['opponent']['salutation'] == 'company') {
                            // $input1 = $pdfData['opponent']['surname'] ?? '' .'./.'.$pdfData['opponent']['accident'] ?? '';
                            $input1 = $pdfData['opponent']['surname'] ?? '' .'./.';
                        } else {
                            // $input1 = $pdfData['opponent']['company'] ?? '' .'./.'.$pdfData['opponent']['accident'] ?? '';
                            $input1 = $pdfData['opponent']['company'] ?? '' .'./.';
                        }
                    }
    
                    $input2 = $pdfData['general']['date_damage'] ?? ''; // damage day
                    $input3 = $pdfData['general']['created_at'] ?? '2023-03-29';  // created on

                    $html = view('VAG', 
                        [
                            'lawers' => '',
                            'contact_type' => $pdfData['customer']['contact_type'] ?? '',
                            'street_no' => $pdfData['customer']['street_no'] ?? '',
                            'zipcode' => $pdfData['customer']['zip'] ?? '',
                            'city' => $pdfData['customer']['city'] ?? '',
                            'telephone' => $pdfData['customer']['telephone'] ?? '',
                            'input1' => $input1,
                            'input2' => $input2,
                            'input3' => $input3,
                            'signature' => $pdfData['sign']['signature1'] ?? '',
                        ]
                    )->render();
                    break;
                case 2:
                    // return $pdfData;
                    $input1 = '';
                    if($pdfData['customer']['salutation'] == "company") {
                        $input1 = $pdfData['customer']['companyname'] ?? '';
                    } else {
                        $input1 = $pdfData['customer']['surname'] ?? '';
                    }

                    if(isset($pdfData['general']['op_known']) && $pdfData['general']['op_known']) {
                        if($pdfData['opponent']['salutation'] == 'company') {
                           $input1 = $pdfData['opponent']['surname'] ?? '' .'./.'.$pdfData['opponent']['company'] ?? '';
                        } else {
                            $input1 = $pdfData['opponent']['surname'] ?? '' ;
                        }
                    }

                    $input2 = $pdfData['general']['date_damage'] ?? ''; // damage day
                    $input3 = $pdfData['general']['created_at'] ?? '';  // created on

                    $html = view('auftragautoveritas', 
                        [
                            'firstname' => $pdfData['customer']['firstname'] ?? '',
                            'surname' => $pdfData['customer']['surname'] ?? '',
                            'ansprechpartner' => $pdfData['general']['ownership'] ?? '', 
                            'license_plate' => $pdfData['general']['license_plate'] ?? '',
                            'date' => $pdfData['general']['date'] ?? '',
                            'case_number' => $pdfData['general']['case_number'] ?? '',
                            'contact_type' => $pdfData['customer']['contact_type'] ?? '',
                            'vorsteuerabzugsberechtigt' => 'yes' , //  'no'
                            'street_no' => $pdfData['customer']['street_no'] ?? '',
                            'zipcode' => $pdfData['customer']['zip'] ?? '',
                            'city' => $pdfData['customer']['city'] ?? '',
                            'telephone' => $pdfData['customer']['telephone'] ?? '',
                            'mobile_phone_number' => $pdfData['customer']['mobile_phone_number'] ?? '',
                            'email' => $pdfData['customer']['email'] ?? '',
                            'name' => ($pdfData['customer']['firstname'] ?? '').($pdfData['customer']['surname'] ?? ''),
                            'insurance_company' => $pdfData['insurance']['company'] ?? '',
                            'insurance_number' => '',
                            'claim_number' => $pdfData['insurance']['claim_number'] ?? '',
                            'damage_date' => $pdfData['general']['date_damage'] ?? '',
                            'damage_place' => $pdfData['general']['place_damage'] ?? '',
                            'manufacturer' => $pdfData['general']['manufacturer'] ?? '',
                            'previous_damage' => '',
                            'leasing' => '',
                            'finance' => '',
                            'comment' => $pdfData['customer']['comment'] ?? '',
                            'Vorschäden' => '',
                            'Schadenhergang' => '',
                            'input1' => $input1,
                            'input2' => $input2,
                            'input3' => $input3,
                            'signature' => $pdfData['sign']['signature2'] ?? '',
                        ]
                    )->render();
                    break;
                case 3:
                    // Vollmachtanwaltmielchen.blade.php
                    /* vollmachtanwaltmielchen.blade.php */
            
                    // customerdata -> salutation == company       the name of the company
                    // if customerdata -> salutation != company    the surname of the customer

                    // if Address of the other party known? is set to true, 
                    // surname of the customer ./. last name of accident opponent
                    // or surname of the company ./. last name of accident opponent
                    // or surname of the customer ./. Company Accident Opponent
                    
                    $input1 = '';
                    if($pdfData['customer']['salutation'] == "company") {
                        $input1 = $pdfData['customer']['companyname'] ?? '';
                    } else {
                        $input1 = $pdfData['customer']['surname'] ?? '';
                    }

                    if(isset($pdfData['general']['op_known']) && $pdfData['general']['op_known']) {
                        if($pdfData['opponent']['salutation'] == 'company') {
                            $input1 = $pdfData['opponent']['surname'] ?? '' .'./.'.$pdfData['opponent']['company'] ?? '';
                        } else {
                            $input1 = $pdfData['opponent']['company'] ?? '' .'./.'.$pdfData['opponent']['company'] ?? '';
                        }
                    }

                    $input2 = $pdfData['general']['date_damage'] ?? ''; // damage day
                    $input3 = $pdfData['general']['created_at'] ?? '';  // created on

                    $html = view('vollmachtanwaltmielchen', 
                        [
                            'firstname' => $pdfData['customer']['firstname'] ?? '',
                            'surname' => $pdfData['customer']['surname'] ?? '',
                            'streen_no' => $pdfData['customer']['street_no'] ?? '',
                            'zipcode' => $pdfData['customer']['zip'] ?? 'D-22083',
                            'city' => $pdfData['customer']['city'] ?? '',
                            'telephone' => $pdfData['customer']['telephone'] ?? '',
                            'input1' => $input1,
                            'input2' => $input2,
                            'input3' => $input3,
                            'signature' => $pdfData['sign']['signature3'] ?? '',
                        ]
                    )->render();
                    break;
                case 4:
                    $input1 = '';
                    if($pdfData['customer']['salutation'] == "company") {
                        $input1 = $pdfData['customer']['companyname'] ?? '';
                    } else {
                        $input1 = $pdfData['customer']['surname'] ?? '';
                    }

                    if($pdfData['opponent']) {
                        if($pdfData['opponent']['salutation'] == 'company') {
                            $input1 = $pdfData['opponent']['surname'] ?? '';
                        } else {
                            $input1 = $pdfData['opponent']['company'] ?? '' ;
                        }
                    }

                    $input2 = $pdfData['general']['date_damage'] ?? ''; // damage day
                    $input3 = $pdfData['general']['created_at'] ?? '2023-03-29';  // created on

                    $html = view('VAT', 
                        [
                            'contact_type' => $pdfData['customer']['contact_type'] ?? '',
                            'streen_no' => $pdfData['customer']['street_no'] ?? '',
                            'zipcode' => $pdfData['customer']['zip'] ?? '',
                            'city' => $pdfData['customer']['city'] ?? '',
                            'telephone' => $pdfData['customer']['telephone'] ?? '',
                            'input1' => $input1,
                            'input2' => $input2,
                            'input3' => $input3,
                            'signature' => $pdfData['sign']['signature4'] ?? '',
                        ]
                    )->render();
                    break;
            }
            
            // Load the HTML content into Dompdf
            $dompdf->loadHtml($html);

            
            // Render the HTML as PDF
            $dompdf->render();

            // Get the generated PDF content
            $pdfOutput = $dompdf->output();

            // Save the generated PDF to a file
            $date = date('Y-m-d-H-i-s'); // or date('Y-m-d')

            $filePath = public_path($date.'.pdf');
            
            file_put_contents($filePath, $pdfOutput);
            
            return ["success" => true, 'filePath' => $date.'.pdf'];

            // $dompdf->stream($date.'.pdf', ['Attachment' => false]);
            // Return the PDF as a download
            // return response()->download($filePath, $date.'.pdf');
        } catch (Exception $e) {
            return response()->json(['error' => $e]);
        }
    }

    public function returnViewUrl ($type, $data) {
        // check validation $data and $type
        $decodeddata = json_decode($data);
        
        switch($type) {
            case 0:
                // return view
                
                break;
            case 1:
                // return view
                
                break;
            case 2:
                // return view

                break;
            case 3:
                // return view

                break;
            case 4:
                break;
        }
        // die(['success' => true, 'url' => '/previewPdf'.'/'.$type.'/'.$data]);

        return response()->json(['success' => true, 'url' => '/previewPdf'.'/'.$type.'/'.$data]);
    }

    public function previewPdf ($type, $data) {

        $data = json_decode($data);

        switch($type) {
            case 0:
                // return view
                $input1 = '';
                if($data->customer->salutation == "company") {
                    $input1 = $data->customer->companyname ?? '';
                } else {
                    $input1 = $data->customer->surname ?? '';
                }

                if($data->opponent) {
                    if($data->opponent->salutation == 'company') {
                        $input1 = $data->opponent->surname ?? '' .'./.'.$data->opponent->company ?? '';
                    } else {
                        $input1 = $data->opponent->company ?? '';
                    }
                }

                $input2 = $data->general->date_damage ?? ''; // damage day
                $input3 = $data->general->created_at ?? '';  // created on

                return view('anwaltda', 
                    [
                        'firstname' => $data->customer->firstname ?? '',
                        'surname' => $data->customer->surname ?? '',
                        'ansprechpartner' => $data->general->ownership ?? '', 
                        'license_plate' => $data->general->license_plate ?? '',
                        'date' => $data->general->date ?? '',
                        'case_number' => $data->general->case_number ?? '',
                        'contact_type' => $data->customer->contact_type ?? '',
                        'vorsteuerabzugsberechtigt' => 'yes' , //  'no'
                        'street_no' => $data->customer->street_no ?? '',
                        'zipcode' => $data->customer->zip ?? '',
                        'city' => $data->customer->city ?? '',
                        'telephone' => $data->customer->telephone ?? '',
                        'mobile_phone_number' => $data->customer->mobile_phone_number ?? '',
                        'email' => $data->customer->email ?? '',
                        'name' => ($data->customer->firstname ?? '').($data->customer->surname ?? ''),
                        'insurance_company' => $data->insurance->company ?? '',
                        'insurance_number' => '',
                        'claim_number' => $data->insurance->claim_number ?? '',
                        'damage_date' => $data->general->date_damage ?? '',
                        'damage_place' => $data->general->place_damage ?? '',
                        'manufacturer' => $data->general->manufacturer ?? '',
                        'previous_damage' => '',
                        'leasing' => '',
                        'finance' => '',
                        'comment' => $data->customer->comment ?? '',
                        'Vorschäden' => '',
                        'Schadenhergang' => '',
                        'input1' => $input1,
                        'input2' => $input2,
                        'input3' => $input3,
                        'signature' => $data->sign->signature0 ?? '',
                    ]
                );
                break;
            case 1:
                // return view
                $input1 = '';
                if($data->customer->salutation == "company") {
                    $input1 = $data->customer->companyname ?? '';
                } else {
                    $input1 = $data->customer->surname ?? '';
                }

                if($data->opponent) {
                    if($data->opponent->salutation == 'company') {
                        $input1 = $data->opponent->surname ?? '' .'./.'.$data->opponent->company ?? '';
                    } else {
                        $input1 = $data->opponent->company ?? '';
                    }
                }

                $input2 = $data->general->date_damage ?? ''; // damage day
                $input3 = $data->general->created_at ?? '2023-03-29';  // created on

                return view('VAG', 
                    [
                        'lawers' => '',
                        'contact_type' => $data->customer->contact_type ?? '',
                        'street_no' => $data->customer->street_no ?? '',
                        'zipcode' => $data->customer->zip ?? '',
                        'city' => $data->customer->city ?? '',
                        'telephone' => $data->customer->telephone ?? '',
                        'input1' => $input1,
                        'input2' => $input2,
                        'input3' => $input3,
                        'signature' => $data->sign->signature1 ?? '',
                    ]
                );
                break;
            case 2:
                // return $data;
                $input1 = '';
                if($data->customer->salutation == "company") {
                    $input1 = $data->customer->companyname ?? '';
                } else {
                    $input1 = $data->customer->surname ?? '';
                }

                if(isset($data->general->op_known) && $data->general->op_known) {
                    if($data->opponent->salutation == 'company') {
                        $data->opponent->surname ?? '' .'./.'.$data->opponent->company ?? '';
                    } else {
                        $data->opponent->company ?? '' .'./.'.$data->opponent->company ?? '';
                    }
                }

                $input2 = $data->general->date_damage ?? ''; // damage day
                $input3 = $data->general->created_at ?? '';  // created on

                return view('auftragautoveritas', 
                    [
                        'firstname' => $data->customer->firstname ?? '',
                        'surname' => $data->customer->surname ?? '',
                        'ansprechpartner' => $data->general->ownership ?? '', 
                        'license_plate' => $data->general->license_plate ?? '',
                        'date' => $data->general->date ?? '',
                        'case_number' => $data->general->case_number ?? '',
                        'contact_type' => $data->customer->contact_type ?? '',
                        'vorsteuerabzugsberechtigt' => 'yes' , //  'no'
                        'street_no' => $data->customer->street_no ?? '',
                        'zipcode' => $data->customer->zip ?? '',
                        'city' => $data->customer->city ?? '',
                        'telephone' => $data->customer->telephone ?? '',
                        'mobile_phone_number' => $data->customer->mobile_phone_number ?? '',
                        'email' => $data->customer->email ?? '',
                        'name' => ($data->customer->firstname ?? '').($data->customer->surname ?? ''),
                        'insurance_company' => $data->insurance->company ?? '',
                        'insurance_number' => '',
                        'claim_number' => $data->insurance->claim_number ?? '',
                        'damage_date' => $data->general->date_damage ?? '',
                        'damage_place' => $data->general->place_damage ?? '',
                        'manufacturer' => $data->general->manufacturer ?? '',
                        'previous_damage' => '',
                        'leasing' => '',
                        'finance' => '',
                        'comment' => $data->customer->comment ?? '',
                        'Vorschäden' => '',
                        'Schadenhergang' => '',
                        'input1' => $input1,
                        'input2' => $input2,
                        'input3' => $input3,
                        'signature' => $data->sign->signature2 ?? '',
                    ]
                );
                break;
            case 3:
                // return view
                // Vollmachtanwaltmielchen.blade.php
                /* vollmachtanwaltmielchen.blade.php */
        
                // customerdata -> salutation == company       the name of the company
                // if customerdata -> salutation != company    the surname of the customer

                // if Address of the other party known? is set to true, 
                // surname of the customer ./. last name of accident opponent
                // or surname of the company ./. last name of accident opponent
                // or surname of the customer ./. Company Accident Opponent
                
                $input1 = '';
                if($data->customer->salutation == "company") {
                    $input1 = $data->customer->companyname ?? '';
                } else {
                    $input1 = $data->customer->surname ?? '';
                }

                if(isset($data->general->op_known) && $data->general->op_known) {
                    if($data->opponent->salutation == 'company') {
                        $data->opponent->surname ?? '' .'./.'.$data->opponent->company ?? '';
                    } else {
                        $data->opponent->company ?? '' .'./.'.$data->opponent->company ?? '';
                    }
                }

                $input2 = $data->general->date_damage ?? ''; // damage day
                $input3 = $data->general->created_at ?? '';  // created on

                return view('vollmachtanwaltmielchen', 
                    [
                        'firstname' => $data->customer->firstname ?? '',
                        'surname' => $data->customer->surname ?? '',
                        'streen_no' => $data->customer->street_no ?? '',
                        'zipcode' => $data->customer->zip ?? 'D-22083',
                        'city' => $data->customer->city ?? '',
                        'telephone' => $data->customer->telephone ?? '',
                        'input1' => $input1,
                        'input2' => $input2,
                        'input3' => $input3,
                        'signature' => $data->sign->signature3 ?? '',
                    ]
                );
                break;
            case 4:

                $input1 = '';
                if($data->customer->salutation == "company") {
                    $input1 = $data->customer->companyname ?? '';
                } else {
                    $input1 = $data->customer->surname ?? '';
                }

                if($data->opponent) {
                    if($data->opponent->salutation == 'company') {
                        $input1 = $data->opponent->surname ?? '' .'./.'.$data->opponent->company ?? '';
                    } else {
                        $input1 = $data->opponent->company ?? '';
                    }
                }

                $input2 = $data->general->date_damage ?? ''; // damage day
                $input3 = $data->general->created_at ?? '2023-03-29';  // created on

                return view('VAT', 
                    [
                        'contact_type' => $data->customer->contact_type ?? '',
                        'streen_no' => $data->customer->street_no ?? '',
                        'zipcode' => $data->customer->zip ?? '',
                        'city' => $data->customer->city ?? '',
                        'telephone' => $data->customer->telephone ?? '',
                        'input1' => $input1,
                        'input2' => $input2,
                        'input3' => $input3,
                        'signature' => $data->sign->signature4 ?? '',
                    ]
                );
                break;
        } 
    }
}