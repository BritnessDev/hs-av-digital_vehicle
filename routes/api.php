<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\PdfController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\DocumentsController;
use App\Http\Controllers\SubscriberController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth.token'])->group(function () {
    Route::post('getContact', [ContactController::class, 'getContact'])->name('contacts.getContact');
    Route::post('getContactById', [ContactController::class, 'getContactById'])->name('contacts.getContactById');
    Route::post('getDocuments', [DocumentsController::class, 'getDocuments'])->name('document.getDocuments');

    

    Route::get('returnViewUrl/{type}/{data}', [PdfController::class, 'returnViewUrl']); 

    Route::post('/generatePDF', [PdfController::class, 'generatePDF']);

    Route::post('addContact', [ContactController::class, 'postContact'])->name('Contact.post');

    Route::post('deleteContacts', [ContactController::class, 'deleteContactByIds'])->name('contacts.deleteByIds');
    
    // Route::post('getContact', [ContactController::class, 'getContact'])->name('contacts.getContact');

    Route::post('updateContact', [ContactController::class, 'updateContact'])->name('contacts.updateContact');

    Route::post('getAddList', [ContactController::class, 'getAddList'])->name('contacts.getAddList');

    Route::post('addContactData', [ContactController::class, 'addContactData'])->name('contacts.addContactData');


    // Document
    Route::post('createDocument', [DocumentsController::class, 'create'])->name('document.create');
    Route::post('getDocumentById', [DocumentsController::class, 'getDocumentById'])->name('document.getDocumentById');
    // Route::post('getDocuments', [DocumentsController::class, 'getDocuments'])->name('document.getDocuments');
    Route::post('deleteDocuments', [DocumentsController::class, 'deleteDocuments'])->name('document.deleteDocuments');
    Route::post('updateDocuments', [DocumentsController::class, 'store'])->name('document.store'); // update document
});





Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('login', [LoginController::class, 'login'])->name('login.api');
    Route::post('signup', [LoginController::class, 'signup'])->name('signup.api');

    Route::middleware(['auth:api'])->group(function () {
        Route::post('logout', [LoginController::class, 'logout'])->name('logout.api');
        // Route::post('getContact', [ContactController::class, 'getContact'])->name('contacts.getContact');
    });
});

Route::get('previewPdf/{type}/{data}',  [PdfController::class, 'previewPdf']); 

Route::get('test', function () {
    return response()->json([
        'success' => true,
        'message' => "Welcome to the test api",
        'data' => ['name' => 'test']
    ]);
});

Route::get('vollmachtanwaltmielchen', function () {
    return view('vollmachtanwaltmielchen', 
    [
        'firstname' => 'FirstName',
        'secondname' => 'Second Name',
        'sign1' => 'Signature1', 
        'sign2' => 'Signature2', 
        'sign3' => 'Signature3',
        'telephone' => 'telephone'
    ]);
});


Route::post('subscribe', [SubscriberController::class, 'subscribe'])->name('subscribe.send');