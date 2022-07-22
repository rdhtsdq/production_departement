<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customer extends Model
{
    use HasFactory;
    protected $fillable = ['id','kode','nama','telp'];

    public function sales()
    {
        return $this->hasOne(sales::class,'id','cust_id');
    }
}
