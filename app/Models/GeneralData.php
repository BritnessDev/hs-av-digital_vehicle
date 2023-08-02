<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralData extends Model
{
    use HasFactory;
    protected $table = 'general_datas';

    protected $fillable = [
        'case_number',
        'date_inspection',
        'date_damage',
        'ownership',
        'date',
        'place_inspection',
        'place_damage',
        'vat',
        'license_plate',
        'manufacturer',
        'model',
        'op_license_plate',
        'op_manufacturer',
        'op_model',
        'address_diff',
        'signer_diff',
        'to_email',
        'op_known',
        'op_ins_known',
        'need_lawyer',
        'need_repair',
        'status',
    ];

    public function documents()
    {
        return $this->belongsTo(Documents::class);
    }
}
