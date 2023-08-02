<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Documents extends Model
{
    use HasFactory;
    protected $table = 'documents';
    
    protected $fillable = [
        'generalId',
        'customerId',
        'address2Id',
        'insuranceId',
        'opponentId',
        'lawyerId',
        'workshopId',
        'bankId',
        'lessorId',
        'signatureId',
        'status',
    ];

    public function generalData(){
        return $this->belongsTo(GeneralData::class, 'generalId');
    }
    public function customerData(){
        return $this->belongsTo(CustomerData::class, 'customerId');
    }
    public function bankData(){
        return $this->belongsTo(BankData::class, 'bankId');
    }
    public function address2Data(){
        return $this->belongsTo(Address2Data::class, 'address2Id');
    }
    public function insuranceData(){
        return $this->belongsTo(InsuranceData::class, 'insuranceId');
    }
    public function lawyerData(){
        return $this->belongsTo(LawyerData::class, 'lawyerId');
    }
    public function lessorData(){
        return $this->belongsTo(LessorData::class, 'lessorId');
    }
    public function opponentData(){
        return $this->belongsTo(OpponentData::class, 'opponentId');
    }
    public function signatureData(){
        return $this->belongsTo(SignatureData::class, 'signatureId');
    }
    public function workshopData(){
        return $this->belongsTo(WorkshopData::class, 'workshopId');
    }
}
