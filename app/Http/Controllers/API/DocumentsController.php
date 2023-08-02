<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Document;
use App\Http\Controllers\Controller;
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
use App\Models\SignatureData;
use App\Models\Signature;
use App\Models\Documents;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;


class DocumentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $documents = Document::all();
        return response()->json(['data' => $documents]);
    }

    /**
     * Get Document Data List With Params 
     * @method Get
     * @param query, query, typeDocument, pageSize, pageIndex
     * @return 
     */
    public function getDocuments(Request $request)
    {
        try {
            $rules = [
                'query' => 'nullable|string|max:255',
                'pageSize' => 'nullable|integer|min:-1|max:1000',
                'pageIndex' => 'nullable|integer|min:1',
            ];
    
            $validatedData = $request->validate($rules);
            $queryString = $validatedData['query'] ?? '';
            $pageSize = $validatedData['pageSize'] ?? 10;        
            $pageIndex = $validatedData['pageIndex'] ?? 1;
            
            // $documents = Documents::where('status', '=', 1)->get();
            // // // die();
            // return response()->json(['success' => true, 'data' => $documents ]);

            $documents = Documents
                ::with(['generalData' => function ($query) {
                    $query->select('id', 'case_number', 'license_plate');
                }])
                ->with(['customerData' => function ($query) {
                    $query->select('id', 'firstname', 'surname', 'salutation', 'company');
                }]
                )->with(['bankData' => function ($query) {
                    $query->select('id');
                }]
                )->with(['address2Data' => function ($query) {
                    $query->select('id');
                }]
                )->with(['insuranceData' => function ($query) {
                    $query->select('id');
                }]
                )->with(['lawyerData' => function ($query) {
                    $query->select('id');
                }]
                )->with(['lessorData' => function ($query) {
                    $query->select('id');
                }]
                )->with(['opponentData' => function ($query) {
                    $query->select('id');
                }]
                )->with(['signatureData' => function ($query) {
                    $query->select('id');
                }]
                )->with(['workshopData' => function ($query) {
                    $query->select('id');
                }]
                )->where("status", 1)
                ->where(function ($qw) use ( $queryString){
                    $qw->whereHas('generalData', function ($q) use ($queryString) {
                        $q
                        ->where('case_number', 'like', "%$queryString%")
                        ->where('status', 1)
                        ->orWhere('date_inspection', 'like', "%$queryString%")
                        ->orWhere('date_damage', 'like', "%$queryString%")
                        ->orWhere('ownership', 'like', "%$queryString%")
                        ->orWhere('date', 'like', "%$queryString%")
                        ->orWhere('date_inspection', 'like', "%$queryString%")
                        ->orWhere('license_plate', 'like', "%$queryString%")
                        ->orWhere('manufacturer', 'like', "%$queryString%")
                        ->orWhere('model', 'like', "%$queryString%")
                        ->orWhere('op_license_plate', 'like', "%$queryString%")
                        ->orWhere('op_manufacturer', 'like', "%$queryString%")
                        ->orWhere('op_model', 'like', "%$queryString%");
                    })->orWhereHas('customerData', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('vat', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('address2Data', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('vat', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('bankData', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('bank_license', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('insuranceData', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('policy_number', 'like', "%$queryString%")
                        ->orWhere('claim_number', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('lawyerData', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('case_number', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('lessorData', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('contract_number', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('opponentData', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('workshopData', function ($q) use ($queryString) {
                        $q
                        ->where('salutation', 'like', "%$queryString%")
                        ->orWhere('title', 'like', "%$queryString%")
                        ->orWhere('firstname', 'like', "%$queryString%")
                        ->orWhere('surname', 'like', "%$queryString%")
                        ->orWhere('company', 'like', "%$queryString%")
                        ->orWhere('email', 'like', "%$queryString%")
                        ->orWhere('website', 'like', "%$queryString%")
                        ->orWhere('mobile_phone_number', 'like', "%$queryString%")
                        ->orWhere('country', 'like', "%$queryString%")
                        ->orWhere('zip', 'like', "%$queryString%")
                        ->orWhere('city', 'like', "%$queryString%")
                        ->orWhere('street_no', 'like', "%$queryString%")
                        ->orWhere('comment', 'like', "%$queryString%")
                        ->orWhere('order_number', 'like', "%$queryString%")
                        ->orWhere('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    })->orWhereHas('signatureData', function ($q) use ($queryString) {
                        $q
                        ->where('created_at', 'like', "%$queryString%")
                        ->orWhere('updated_at', 'like', "%$queryString%");
                    });
                })
                ->paginate($pageSize == -1 ? 10000 : $pageSize, ['*'], 'page', $pageIndex);

              return response()->json(['success' => true, 'data' => $documents ]);   
            $totalCount = $documents->lastPage();
            
            // $new = $documents;
            $new = collect($documents)->merge(['totalCount' => $totalCount])->all();

            // $documents->totalCount = $totalCount;
            // ->paginate($pageSize, ['*'], 'page', $pageIndex);
            return response()->json(['success' => true, 'data' => $new ]);

        } catch (Exception $e) {
            return response()->json(['success' => false, 'data' => []]);
        }
    }

    // get Document by id
    public function getDocumentById(Request $request)
    {
        try {
            $rules = [
                'id' => 'integer|min:1|max:1000',
            ];
    
            $validatedData = $request;
    
            $id = $validatedData['id'] ?? '';

            $document = Documents::with(['generalData'=> function($query) {
                $query->select('*');
            }])->with(['customerData', 'bankData', 'address2Data', 'insuranceData', 'lawyerData', 'lessorData', 'opponentData', 'signatureData.signature0', 'signatureData.signature1', 'signatureData.signature2', 'signatureData.signature3', 'signatureData.signature4', 'workshopData'])
            ->where('id', $id)
            ->where('status', 1)
            ->get()[0];
            return response()->json(['success' => true, 'data' => $document]);

        } catch (Exception $e) {
            return response()->json(['success' => false, 'data' => $document]);
        }
    }

    public function createDocument($validatedData) {
        if($validatedData->general){
            $generalId = GeneralData::create($validatedData->general)->id;
            $newDocument['generalId'] = $generalId;
        }

        if($validatedData->customer){
            $customerId = CustomerData::create($validatedData->customer)->id;
            $newDocument['customerId'] = $customerId;
        }

        if($validatedData->address2){
            $address2Id = Address2Data::create($validatedData->address2)->id;
            $newDocument['address2Id'] = $address2Id;
        }    
        
        if($validatedData->insurance){
            $insuranceId = InsuranceData::create($validatedData->insurance)->id;
            $newDocument['insuranceId'] = $insuranceId;
        }

        if($validatedData->opponent){
            $opponentId = OpponentData::create($validatedData->opponent)->id;
            $newDocument['opponentId'] = $opponentId;
        }
        
        if($validatedData->lawyer){
            $lawyerId = LawyerData::create($validatedData->lawyer)->id;
            $newDocument['lawyerId'] = $lawyerId;
        }
        
        if($validatedData->workshop){
            $workshopId = WorkshopData::create($validatedData->workshop)->id;
            $newDocument['workshopId'] = $workshopId;
        }


        if($validatedData->bank){
            $bankId = BankData::create($validatedData->bank)->id;
            $newDocument['bankId'] = $bankId;
        }
            
        if($validatedData->lessor){
            $lessorId = LessorData::create($validatedData->lessor)->id;
            $newDocument['lessorId'] = $lessorId;
        }
        
        if($validatedData->sign){
            $sign0 = Signature::create([
                'signature' => $validatedData->sign['signature0'],
            ])->id;
            $sign1 = Signature::create([
                'signature' => $validatedData->sign['signature1'],
            ])->id;
            $sign2 = Signature::create([
                'signature' => $validatedData->sign['signature2'],
            ])->id;
            $sign3 = Signature::create([
                'signature' => $validatedData->sign['signature3'],
            ])->id;
            $sign4 = Signature::create([
                'signature' => $validatedData->sign['signature4'],
            ])->id;
            $signatureId = SignatureData::create([
                "signature0" => $sign0,
                "signature1" => $sign1,
                "signature2" => $sign2,
                "signature3" => $sign3,
                "signature4" => $sign4
            ])->id;
            $newDocument['signatureId'] = $signatureId;
        }

        Documents::create($newDocument);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        try {
            $rules = [
                'general.*.caseNumber' => 'nullable|string|max:255',
                // 'general.*.vehicleOwner' => ['string', Rule::in(['unknown', 'financed', 'leased', 'owned'])],
            ];
            // $validatedData = $request->validate($rules);
            $newDocument = [];

            $validatedData = $request;
            $this->createDocument($validatedData);
            
            return response()->json(['success' => true]);
        } catch (Exception $e) {
            return response()->json(['success' => false]);
        }
    }

    public function updateDocument($validatedData) {
        $id = $validatedData['id'] ?? '';  // document id

        $document = Documents::findOrFail($id);

        if($validatedData['document']['general']){
            $general_data = GeneralData::where('id', $document->generalId)->get();
            if(count($general_data) !== 0) {
                $general_data = $general_data[0];
                $general_data->update($validatedData['document']['general']);
            } else {
                $generalId = GeneralData::create($validatedData['document']['general'])->id;
                $document['generalId'] = $generalId;
                $document->save();
            }
        }

        if($validatedData['document']['customer']){
            $custom_data = CustomerData::where('id', $document->customerId)->get();
            if(count($custom_data) != 0)    {
                $custom_data = $custom_data[0];
                $custom_data->update($validatedData['document']['customer']);
            } else {
                $customerId = CustomerData::create($validatedData['document']['customer'])->id;
                $document['customerId'] = $customerId;
                $document->save();
            }           
        }

        if($validatedData['document']['address2']){
            $address2_data = Address2Data::where('id', $document->address2Id)->get();
            if(count($address2_data) != 0) {
                $address2_data = $address2_data[0];
                $address2_data->update($validatedData['document']['address2']);
            } else {
                $address2Id = CustomerData::create($validatedData['document']['address2'])->id;
                $document['address2Id'] = $address2Id;
                $document->save();
            } 
        }
        
        if($validatedData['document']['insurance']){
            $insurance_data = InsuranceData::where('id', $document->insuranceId)->get();
            if(count($insurance_data) != 0) {
                $insurance_data = $insurance_data[0];
                $insurance_data->update($validatedData['document']['insurance']);
            } else {
                $insuranceId = InsuranceData::create($validatedData['document']['insurance'])->id;
                $document['insuranceId'] = $insuranceId;
                $document->save();
            } 
        }

        if($validatedData['document']['opponent']){
            $opponent_data = OpponentData::where('id', $document->opponentId)->get();
            if(count($opponent_data) != 0) {
                $opponent_data = $opponent_data[0];
                $opponent_data->update($validatedData['document']['opponent']);
            } else {
                $opponentId = OpponentData::create($validatedData['document']['opponent'])->id;
                $document['opponentId'] = $opponentId;
                $document->save();
            }
        } 

        if($validatedData['document']['lawyer']){
            $lawyer_data = LawyerData::where('id', $document->lawyerId)->get();
            if(count($lawyer_data) != 0) {
                $lawyer_data = $lawyer_data[0];
                $lawyer_data->update($validatedData['document']['lawyer']);
            } else {
                $lawyerId = LawyerData::create($validatedData['document']['lawyer'])->id;
                $document['lawyerId'] = $lawyerId;
                $document->save();
            }
        } 

        if($validatedData['document']['workshop']){
            $workshop_data = WorkshopData::where('id', $document->workshopId)->get();
            if(count($workshop_data) != 0) {
                $workshop_data = $workshop_data[0];
                $workshop_data->update($validatedData['document']['workshop']);
            } else {
                $workshopId = WorkshopData::create($validatedData['document']['workshop'])->id;
                $document['workshopId'] = $workshopId;
                $document->save();
            }
        } 

        if($validatedData['document']['bank']){
            $bank_data = BankData::where('id', $document->bankId)->get();
            if(count($bank_data) != 0) {
                $bank_data = $bank_data[0];
                $bank_data->update($validatedData['document']['bank']);
            } else {
                $bankId = BankData::create($validatedData['document']['bank'])->id;
                $document['bankId'] = $workshopId;
                $document->save();
            }
        } 

        if($validatedData['document']['lessor']){
            $lessor_data = LessorData::where('id', $document->lessorId)->get();
            if(count($lessor_data) != 0) {
                $lessor_data = $lessor_data[0];
                $lessor_data->update($validatedData['document']['lessor']);
            } else {
                $lessorId = LessorData::create($validatedData['document']['lessor'])->id;
                $document['lessorId'] = $lessorId;
                $document->save();
            }
        } 
        
        if($validatedData['document']['sign']){
            $sign_data = SignatureData::where('id', $document->signatureId)->get();
            if(count($sign_data) != 0) {

                $signId = $sign_data[0]['signature0'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                    $sign[0]->update([
                        "signature" => $validatedData['document']['sign']['signature0']
                    ]);
                
                $signId = $sign_data[0]['signature1'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                    $sign[0]->update([
                        "signature" => $validatedData['document']['sign']['signature1']
                    ]);
                
                $signId = $sign_data[0]['signature2'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                    $sign[0]->update([
                        "signature" => $validatedData['document']['sign']['signature2']
                    ]);
                
                $signId = $sign_data[0]['signature3'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                    $sign[0]->update([
                        "signature" => $validatedData['document']['sign']['signature3']
                    ]);

                $signId = $sign_data[0]['signature4'];
                $sign = Signature::where('id', $signId)->get();
                if(count($sign) != 0)
                    $sign[0]->update([
                        "signature" => $validatedData['document']['sign']['signature4']
                    ]);
            } else {
                $sign0 = Signature::create([
                    'signature' => $validatedData->sign['signature0'],
                ])->id;
                $sign1 = Signature::create([
                    'signature' => $validatedData->sign['signature1'],
                ])->id;
                $sign2 = Signature::create([
                    'signature' => $validatedData->sign['signature2'],
                ])->id;
                $sign3 = Signature::create([
                    'signature' => $validatedData->sign['signature3'],
                ])->id;
                $sign4 = Signature::create([
                    'signature' => $validatedData->sign['signature4'],
                ])->id;
                $signId = SignatureData::create([
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

    /**
     * Store a newly created_at resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try {
            $rules = [
                'id' => 'integer|min:1|max:1000',
            ];

            $validatedData = $request;
            $document_id = $this->updateDocument($validatedData);

            // $document->update($validatedData['document']);
            return response()->json(['success' => true, 'id' => $document_id]);
        }
        catch (Exception $e) {
            return response()->json(['success' => false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteDocuments(Request $request)
    {
        try {
            //
            $rule = [
                'ids' => ['required', 'array'],
                'ids.*' => ['integer'],
            ];
            $validatedData = $request->validate($rule);
            $deletedRows = Documents::whereIn('id', $validatedData['ids'])->update(['status' => 0]);

            if($deletedRows > 0)
                return response()->json(['success' => true]);
            else
                return response()->json(['success' => false]);
        }
        catch (Exception $e) {
            return response()->json(['success' => false]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
