<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactPerson extends Model
{
    use HasFactory;
    // explicitly defining table name
    protected $table = 'contact_persons';

    protected $fillable = [
        'salutation',
        'contactId',
        'title',
        'firstname',
        'surname',
        'company',
        'email',
        'website',
        'telephone',
        'mobile_phone_number',
        'country',
        'zip',
        'city',
        'street_no',
        'comment',
        'status',
    ];

    //
    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
