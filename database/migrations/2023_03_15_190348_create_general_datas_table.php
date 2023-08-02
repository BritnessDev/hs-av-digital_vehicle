<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('general_datas', function (Blueprint $table) {
            $table->id();
            $table->string('case_number')->nullable();
            $table->date('date_inspection')->nullable();
            $table->date('date_damage')->nullable();
            $table->string('ownership', 20)->nullable();
            $table->date('date')->nullable();
            $table->string('place_inspection')->nullable();
            $table->string('place_damage')->nullable();
            $table->string('vat')->nullable();
            $table->string('license_plate')->nullable();
            $table->string('manufacturer')->nullable();
            $table->string('model')->nullable();
            $table->string('op_license_plate')->nullable();
            $table->string('op_manufacturer')->nullable();
            $table->string('op_model')->nullable();
            $table->boolean('address_diff')->nullable();
            $table->boolean('signer_diff')->nullable();
            $table->boolean('to_email')->nullable();
            $table->boolean('op_known')->nullable();
            $table->boolean('op_ins_known')->nullable();
            $table->boolean('need_lawyer')->nullable();
            $table->boolean('need_repair')->nullable();
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
        Schema::dropIfExists('general_datas');
    }
}
