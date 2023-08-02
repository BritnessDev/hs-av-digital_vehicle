<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkshopData extends Model
{
    use HasFactory;
    protected $table = 'workshop_datas';
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
        'order_number',
        'status',
    ];
    
    public function documents()
    {
        return $this->belongsTo(Documents::class);
    }
}
