<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerData extends Model
{
    protected $table = 'customer_datas';
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
    use HasFactory;
    public function documents()
    {
        return $this->belongsTo(Documents::class);
    }
}
