<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address2Data extends Model
{
    use HasFactory;
    
    protected $table = 'address2_datas';
    
    protected $fillable = [
        'salutation',
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
        'vat',
        'status',
    ];
    
    public function documents()
    {
        return $this->belongsTo(Documents::class);
    }
}
