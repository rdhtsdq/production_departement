<?php

namespace App\Http\Controllers;

use App\Models\customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customer = customer::all();

        return response()->json([
            "message" => "all customers",
            "data" => $customer
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
            'kode' => 'required|unique:customers',
            'nama' => 'required',
            'telp' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "fail",
                "error" => $validator->errors()
            ]);   
        }else {
            $customer = customer::create($request->all());

            return response()->json([
                "message" => "data created",
                "data" => $customer
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = customer::findOrFail($id);
        if (!$customer) {
            return response()->json([
                "message" => "barang tidak ditemukan"
            ],Response::HTTP_NOT_FOUND);   
        }
        return response()->json([
            "message" => "data $customer->nama",
            "data" => $customer
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $customer = customer::findOrfail($id);
        if (!$customer) {
            return response()->json([
                "message" => "barang tidak ditemukan"
            ],Response::HTTP_NOT_FOUND);   
        }
        else {
            $validator = Validator::make($request->all(),[
                'nama' => 'required',
                'telp' => 'required'
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    "message" => "fail",
                    "error" => $validator->errors()
                ]);
            }else {
                $customer->update($request->all());

                return response()->json([
                    "message" => "data berhasil diubah",
                    "data" => $customer
                ],200);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = customer::findOrfail($id);

        if (!$customer) {
            return response()->json([
                "message" => "barang tidak ditemukan"
            ],Response::HTTP_NOT_FOUND);   
        }else {
            $customer->delete();
            return response()->json([
                "message" => "data deleted"
            ]);
        }
    }
}
