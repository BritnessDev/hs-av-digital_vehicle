<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactPersonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_persons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contactId')->references('id')->on('contacts');
            $table->enum('salutation', ['mrs', 'mr', 'mx', 'company'])->nullable()->default('mrs');
            $table->string('title')->nullable();
            $table->string('firstname')->nullable();
            $table->string('surname')->nullable();
            
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('company')->nullable();
            $table->string('telephone')->nullable();
            $table->string('mobile_phone_number')->nullable();

            $table->string('country')->nullable();
            $table->text('zip')->nullable();
            $table->string('city')->nullable();
            $table->string('street_no')->nullable();
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
        Schema::dropIfExists('contact_persons');
    }
}
