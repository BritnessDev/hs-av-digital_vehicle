<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('generalId')->references('id')->on('general_datas')->nullable();
            // $table->foreignId('customerId')->references('id')->on('customer_datas')->nullable();
            // $table->foreignId('address2Id')->references('id')->on('address2_datas')->nullable();
            // $table->foreignId('insuranceId')->references('id')->on('insurance_datas')->nullable();
            // $table->foreignId('opponentId')->references('id')->on('opponent_datas')->nullable();
            // $table->foreignId('lawyerId')->references('id')->on('lawyer_datas')->nullable();
            // $table->foreignId('workshopId')->references('id')->on('workshop_datas')->nullable();
            // $table->foreignId('bankId')->references('id')->on('bank_datas')->nullable();
            // $table->foreignId('lessorId')->references('id')->on('lessor_datas')->nullable();
            // $table->foreignId('signatureId')->references('id')->on('signature_datas')->nullable();
            $table->integer('generalId')->nullable();
            $table->integer('customerId')->nullable();
            $table->integer('address2Id')->nullable();
            $table->integer('insuranceId')->nullable();
            $table->integer('opponentId')->nullable();
            $table->integer('lawyerId')->nullable();
            $table->integer('workshopId')->nullable();
            $table->integer('bankId')->nullable();
            $table->integer('lessorId')->nullable();
            $table->integer('signatureId')->nullable();
            $table->integer('status')->default(1);  // 1: normal 0: deleted
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documents');
    }
}
