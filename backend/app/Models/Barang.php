<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;
    protected $fillable = ['nama','harga','kode'];

    public function sales_detal()
    {  
       return $this->hasMany(sales_detail::class); 
    }
}
