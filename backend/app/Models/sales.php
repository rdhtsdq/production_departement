<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sales extends Model
{
    use HasFactory;
    protected $fillable = ['id','tgl','kode','cust_id','subtotal','diskon','ongkir','total_bayar'];

    public function sales_detail()
    {
        return $this->hasOne(sales_detail::class);
    }
    public function customer()
    {
        return $this->belongsTo(customer::class,'cust_id','id');
    }
}
