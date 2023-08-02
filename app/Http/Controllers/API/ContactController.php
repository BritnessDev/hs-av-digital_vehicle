<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use App\Models\ContactPerson;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();
        return response()->json(['data' => $contacts]);
    }

    /**
     * Get Contact Data List With Params 
     * @method Get
     * @param query, typeContact, pageSize, pageIndex
     * @return 
     */
    public function getContact(Request $request)
    {
        $rules = [
            'query' => 'nullable|string|max:255',
            'typeContact' => 'nullable',
            'pageSize' => 'nullable|integer|min:-1|max:1000',
            'pageIndex' => 'nullable|integer|min:1',
        ];
        
        $validatedData = $request->validate($rules);
    
        $query = $validatedData['query'] ?? ''; 
        $typeContact = $validatedData['typeContact'] ?? '';
        $pageSize = $validatedData['pageSize'] ?? 10;        
        $pageIndex = $validatedData['pageIndex'] ?? 1;
        
        $contacts = Contact::where(function($q) use ($typeContact) {
                           if ($typeContact !== null && $typeContact !== '') {
                               $q->where('contact_type', $typeContact);
                           }
                       })
                       ->where('status', 1)
                        ->where(function($q) use ($query) {
                            $q->where('firstname',              'like', "%$query%")
                              ->where('status',                         1)
                              ->orWhere('contact_type',         'like', "%$query%")
                              ->orWhere('surname',              'like', "%$query%")
                              ->orWhere('company',              'like', "%$query%")
                              ->orWhere('email',                'like', "%$query%")
                              ->orWhere('telephone',            'like', "%$query%")
                              ->orWhere('mobile_phone_number',  'like', "%$query%")
                              ->orWhere('street_no',            'like', "%$query%")
                              ->orWhere('city',                 'like', "%$query%")
                              ->orWhere('zip',                 'like', "%$query%")
                              ->orWhere('comment',              'like', "%$query%");
                        })
                        ->withCount('contact_person')
                        ->orderBy('created_at', 'desc')
                        ->paginate($pageSize == -1 ? 10000 : $pageSize, 
                            ['firstname', 'surname', 'contact_type', 'city', 'zip', 'telephone', 'mobile_phone_number', 'email', ], 
                            'page', $pageIndex);

        $totalCount = $contacts->lastPage();

        $new = collect($contacts)->merge(['totalCount' => $totalCount])->all();


        // return the contact data as a JSON response
        return response()->json([
            'success' => 'true',
            'contacts' => $new
        ], 200);
    }

    /**
     * Get Contact By Id
     * @param type (edit or add) id
     * @return 
     */
    public function getContactById(Request $request)
    {
        try {
            $rules = [
                'id' => ['required', 'integer', 'min:1'],
            ];

            $validatedData = $request->validate($rules);
            $contact = Contact::findOrFail($validatedData['id']);
            
            $contactPerson = ContactPerson::where('contactId', $contact->id)->where('status', 1)->get();
            return response()->json([
                'success' => true,
                'data' => [
                    'contact' => $contact,
                    'contactPerson' => $contactPerson
                ]
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'error' => $e->errors()
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'error' => 'Contact not found'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  array  $ids
     * @return \Illuminate\Http\Response
     */
    public function deleteContactByIds(Request $request)
    {
        try {
            // Define validation rules for the IDs array

            // $rules = [
            //     'ids' => 'required|array',
            //     'ids.*' => 'required|integer|min:1'
            // ];

            // Validate the request data
            // $validatedData = $request->validate($rules);

            $validatedData = $request;

            ContactPerson::whereIn('contactId', $validatedData['ids'])->update(['status' => 0]);

            // Use the validated IDs to delete the contacts
            Contact::whereIn('id', $validatedData['ids'])->update(['status' => 0]);

            // Contact::whereIn('id', $validatedData['ids'])->update(['status' => 0]);

            // Update the ContactPersons related to the updated Contacts to set their status for deleting
            // ContactPerson::whereIn('contactId', $validatedData['ids'])->update(['status' => 0]);

    

            // Return a success response
            return response()->json(['success' => true]);

        } catch (ValidationException $e) {
            // Return a validation error response
            return response()->json(['success' => false, 'error' => $e->getMessage()], 400);

        } catch (Exception $e) {
            // Return a general error response
            return response()->json(['success' => false, 'error' => 'Failed to delete contacts.'], 500);
        }
    }

    /**
     * Post New Contact
     * 
     * @param  StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function postContact(Request $request) {
        try {
            // $contact = new Contact($request->validated()['contactData']);
            // return $request['contactData'];
            $contact = new Contact($request['contactData']['contactData']);
            // Save the contact to the database
            $contact->save();

            // Get the ID of the saved contact
            $contactId = $contact->id;

            // Save each contact person record with the associated contact ID
            // foreach ($request->validated()['contactPersonData'] as $personData) {
            foreach ($request['contactData']['contactPersonData'] as $personData) {
                $person = new ContactPerson($personData);
                $person->contactId = $contactId;
                $person->save();
            }
            
            // Return a success response with the ID of the saved contact
            return response()->json(['success' => true, 'id' => $contact->id]);
        } catch(QueryException $e) {
            return response()->json(['success' => false, 'error' => 'QueryException']);
        } catch(Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()]);
        }
    }

    /**
     * Update an existing contact with new data.
     *
     * @param  StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    // public function updateContact(StoreContactRequest $request)
    // {
    //     try {
    //         // Validate the request data
    //         $validatedData = $request->validated();

    //         // Get the ID of the contact to update from the request data
    //         $id = $validatedData['id'];

    //         // Find the contact in the database by its ID
    //         $contact = Contact::findOrFail($id);

    //         // Update the contact with the new data from the request
    //         $contact->fill($validatedData);

    //         // Save the updated contact to the database
    //         $contact->save();

    //         // Return a success response
    //         return response()->json(['success' => true]);
    //     } catch (ValidationException $e) {
    //         // Return a response with the validation errors
    //         return response()->json(['success' => false, 'errors' => $e->errors()], 422);
    //     } catch (ModelNotFoundException $e) {
    //         // Return a response with a 404 status code
    //         return response()->json(['success' => false, 'message' => 'Contact not found.'], 404);
    //     } catch (Exception $e) {
    //         // Return a response with a 500 status code
    //         return response()->json(['success' => false, 'message' => 'An error occurred while updating the contact.'], 500);
    //     }
    // }


    /**
     * Update an existing contact with new data.
     *
     * @param  StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function updateContact(Request $request)
    {
        try {
            // Validate the request data
            $validatedData = $request;

            // return $validatedData;

            // Get the ID of the contact to update from the request data
            $id = $validatedData['id'];

            // Find the contact in the database by its ID
            $contact = Contact::findOrFail($id);

            // Update the contact with the new data from the request
            $contact->fill($validatedData['contactData']);

            // Save the updated contact to the database
            $contact->save();

            // Update the contact person data
            $contactPersonData = $validatedData['contactPersonData'] ?? [];

            if (!empty($contactPersonData)) {
                // Find the contact persons for the contact
                $contactPersons = $contact->contact_person;

                // Delete all existing contact persons for the contact
                $contactPersons->each(function ($contactPerson) {
                    $contactPerson->update(['status' => 0]);
                });

                // Create new contact persons for the contact
                foreach ($contactPersonData as $contactPerson) {
                    $contactPerson = new ContactPerson($contactPerson);
                    $newPerson = $contact->contact_person();
                    $newPerson->save($contactPerson);
                }
            }

            // Return a success response
            return response()->json(['success' => true]);
        } catch (ValidationException $e) {
            // Return a response with the validation errors
            return response()->json(['success' => false, 'errors' => $e->errors()], 422);
        } catch (ModelNotFoundException $e) {
            // Return a response with a 404 status code
            return response()->json(['success' => false, 'message' => 'Contact not found.'], 404);
        } catch (Exception $e) {
            // Return a response with a 500 status code
            return response()->json(['success' => false, 'message' => 'An error occurred while updating the contact.'], 500);
        }
    }

    /**
     * Post Contact Person
     * 
     * @param  StoreContactPersonRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    function postContactPerson(StoreContactPersonRequest $request) {
        try {
            $validatedData = $request->validated();
    
            $contactPerson = new Contact_person($validatedData);
            $contactPerson->save();
    
            return response()->json(['success' => true]);
        } catch (ValidationException $e) {
            // If validation fails, return a JSON error response with the validation errors
            return response()->json([
                'success' => false,
                'errors' => $e->errors()
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        } catch (\Exception $e) {
            // If an unexpected exception occurs, return a JSON error response with the exception message
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getAddList(Request $request)
    {
        try {
            $tab = $request['tab'];
            switch($tab) {
                case "customer":
                case "address2":
                case "opponent":
                    $contact_type = "contact";
                    break;
                case "insurance":
                    $contact_type = "insurance";
                    break;
                case "workshop":
                    $contact_type = "workshop";
                    break;
                case "lawyer":
                    $contact_type = "lawyer";
                    break;
                default:
                    $contact_type = "all";
                    break;
            }
            $contacts = Contact::select('id', 'title', 'firstname', 'surname', 'contact_type')
            ->whereIn('contact_type', [$contact_type])
            ->where('status', 1)
            ->get();
            // return the contact data as a JSON response
            return response()->json([
                'success' => 'true',
                'contacts' => $contacts
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function addContactData(Request $request)
    {
        try {
            $rules = [
                'page' => 'nullable|string',
                'id' => 'nullable|integer',
            ];
            
            $validatedData = $request->validate($rules);
            
            $page = $validatedData['page'] ?? '';
            $id = $validatedData['id'];
    
            // return the contact data as a JSON response
            $contact = Contact::findOrFail($id);
            return response()->json([
                'success' => 'true',
                'contact' => $contact,
                'page' => $page
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
