<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpponentData extends Model
{
    use HasFactory;
    protected $table = 'opponent_datas';
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
        'status',
    ];


    public function documents()
    {
        return $this->belongsTo(Documents::class);
    }
}
