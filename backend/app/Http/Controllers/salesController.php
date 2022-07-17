<?php

namespace App\Http\Controllers;

use App\Models\sales;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class salesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales = sales::all();

        return response()->json([
            "message" => "data sales",
            "data" => $sales
        ],Response::HTTP_OK);
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
            "kode" => "required",
            "cust_id" => "required",
            "subtotal" => "required|numeric",
            "diskon" => "required|numeric",
            "ongkir" => "required|numeric",
            "total_bayar" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "fail",
                "error" => $validator->errors()
            ]);
        }

        $sales = sales::create($request->all());

        return response()->json([
            "message" => "data berhasil dibuat",
            "data" => $sales
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sales = sales::findOrFail($id);

        if (!$sales) {
            return response()->json([
                "message" => "data not found"
            ],Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            "message" => "data sales",
            "data" => $sales
        ],Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $sales = sales::findOrFail($id);
        
        if (!$sales) {
            return response()->json([
                "message" => "data not found"
            ],Response::HTTP_NOT_FOUND);
        }

        $validator = Validator::make($request->all(),[
            "kode" => "required",
            "cust_id" => "required",
            "subtotal" => "required|numeric",
            "diskon" => "required|numeric",
            "ongkir" => "required|numeric",
            "total_bayar" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "fail",
                "error" => $validator->errors()
            ]);
        }

        $sales->update($request->all());

        return response()->json([
            "message" => "data berhasil diperbarui",
            "data" => $sales
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sales = sales::findOrFail($id);

        if (!$sales) {
            return response()->json([
                "message" => "data not found"
            ],Response::HTTP_NOT_FOUND);
        }

        $sales->delete();

        return response()->json([
            "message" => "data berhasil di hapus"
        ]);
    }
}
