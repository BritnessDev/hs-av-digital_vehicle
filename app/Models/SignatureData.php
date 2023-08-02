<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SignatureData extends Model
{
    use HasFactory;
    protected $table = 'signature_datas';
    protected $fillable = [
        'signature0',
        'signature1',
        'signature2',
        'signature3',
        'signature4',
        'status',
    ];

    public function signature0(){
        return $this->belongsTo(Signature::class, 'signature0');
    }
    public function signature1(){
        return $this->belongsTo(Signature::class, 'signature1');
    }
    public function signature2(){
        return $this->belongsTo(Signature::class, 'signature2');
    }
    public function signature3(){
        return $this->belongsTo(Signature::class, 'signature3');
    }
    public function signature4(){
        return $this->belongsTo(Signature::class, 'signature4');
    }
}
