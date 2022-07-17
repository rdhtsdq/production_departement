<?php

namespace App\Http\Controllers;

use App\Models\sales_detail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class salesDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales_detail = sales_detail::all();

        return response()->json([
            "message" => "all data sales detail",
            "data" => $sales_detail
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            "sales_id" => 'required',
            "barang_id" => 'required',
            "harga_bandrol" => "required|numeric",
            "qty" => "required|numeric",
            "diskon_pct" => "required|numeric",
            "diskon_nilai" => "required|numeric",
            "harga_diskon" => "required|numeric",
            "total" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "fail",
                "error" => $validator->errors()
            ]);
        }

        $sales_detail = sales_detail::create($request->all());

        return response()->json([
            "message" => "data berhasil dibuat",
            "data" => $sales_detail
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\sales_detail  $sales_detail
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sales_detail = sales_detail::findOrFail($id);
        

        if (!$sales_detail) {
            return response()->json([
                "message" => "not found"
            ],404);
        }

        return response()->json([
            "message" => "data sales $sales_detail->kode",
            "data" => $sales_detail
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\sales_detail  $sales_detail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $sales_detail = sales_detail::findOrFail($id);
        if (!$sales_detail) {
            return response()->json([
                "message" => "not found"
            ],404);
        }

        $validator = Validator::make($request->all(),[
            "sales_id" => 'required',
            "barang_id" => 'required',
            "harga_bandrol" => "required|numeric",
            "qty" => "required|numeric",
            "diskon_pct" => "required|numeric",
            "diskon_nilai" => "required|numeric",
            "harga_diskon" => "required|numeric",
            "total" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "fail",
                "error" => $validator->errors()
            ]);
        }

        $sales_detail->update($request->all());
        
        return response()->json([
            "message" => "data berhasil diubah",
            "data" => $sales_detail
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\sales_detail  $sales_detail
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sales_detail = sales_detail::findOrFail($id);
        if (!$sales_detail) {
            return response()->json([
                "message" => "not found"
            ],404);
        }

        $sales_detail->delete();

        return response()->json([
            "message" => "data berhasil dihapus"
        ]);
    }
}
