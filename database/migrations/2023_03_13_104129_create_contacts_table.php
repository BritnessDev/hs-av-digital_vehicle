<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->enum('contact_type', ['all', 'workshop', 'insurance', 'contact', 'lawyer'])->default('all')->nullable();
            $table->enum('salutation', ['mrs', 'mr', 'mx', 'company'])->nullable()->default('mrs');
            $table->string('title')->nullable();
            $table->string('company')->nullable();
            $table->string('firstname')->nullable();
            $table->string('surname')->nullable();

            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('telephone')->nullable();
            $table->string('mobile_phone_number')->nullable();
            
            $table->string('country')->nullable();
            $table->string('street_no')->nullable();
            $table->text('zip')->nullable();
            $table->text('city')->nullable();
            $table->text('comment')->nullable();
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
        Schema::dropIfExists('contacts');
    }
}
