<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    use HasFactory;
    protected $table = 'signature';
    protected $fillable = [
        'signature',
        'status',
    ];

//     public function signature_datas()
//     {
//         return $this->belongsTo(SignatureData::class);
//     }
}
