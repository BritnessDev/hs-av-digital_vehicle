<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSignatureDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('signature_datas', function (Blueprint $table) {
            $table->id();
            $table->text('signature0')->nullable();
            $table->text('signature1')->nullable();
            $table->text('signature2')->nullable();
            $table->text('signature3')->nullable();
            $table->text('signature4')->nullable();
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
        Schema::dropIfExists('signature_datas');
    }
}
