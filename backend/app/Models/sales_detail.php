<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sales_detail extends Model
{
    use HasFactory;

    protected $fillable = ['id','sales_id','barang_id','harga_bandrol','qty','diskon_pct','diskon_nilai','harga_diskon','total'];

    public function barang()
    {
        return $this->belongsTo(Barang::class);
    }
    public function sales()
    {
        return $this->belongsTo(sales::class);
    }
}