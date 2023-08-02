<?php 

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine If the user is authorized to make this request
     * 
     * @return bool
     */
    public function authorize() 
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request
     * 
     * @return array<string, mixed>
     */

     public function rules() 
     {
        return [
            "contact_type" => "required",
            "salutation" => "required",
            "title" => "required",
            "firstname" => "required",
            "surname" => "required",
            "email" => "required",
            "website" => "required",
            "telephone" => "required",
            "mobile_phone_number" => "required",
            "country" => "required",
            "street_no" => "required",
            "comment" => "required"
        ];
     }
}