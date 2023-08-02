<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InsuranceData extends Model
{
    use HasFactory;
    protected $table = 'insurance_datas';
    
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
        'policy_number',
        'claim_number',
        'comment',
        'status',
    ];

    public function documents()
    {
        return $this->belongsTo(Documents::class);
    }
}
