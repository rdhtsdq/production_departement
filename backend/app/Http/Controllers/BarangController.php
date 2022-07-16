<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $barang = Barang::OrderBy('id')->get();

        return response()->json([
            "message" => "all products",
            "data" => $barang
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
        $validData = Validator::make($request->all(),[
            'kode' => 'required|max:10|unique:barangs',
            'nama' => 'required',
            'harga' => 'required|numeric'
        ]);

        try {
            if ($validData->fails()) {
                return response()->json([
                    "message" => "fail",
                    "error" => $validData->errors()
                ],Response::HTTP_UNPROCESSABLE_ENTITY);
            }else {
                $data = Barang::create($request->all());

                return response()->json([
                    "message" => "data created",
                    "data" => $data
                ],Response::HTTP_CREATED);
            }
        } catch (QueryException $e ) {
            return response()->json([
                "message" => "fail",
                "error" => $e
            ],Response::HTTP_UNPROCESSABLE_ENTITY);
        }   
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $barang = Barang::findOrFail($id);
        if (!$barang) {
            return response()->json([
                "message" => "barang tidak ditemukan"
            ],Response::HTTP_NOT_FOUND);
        }else {
            return response()->json([
                "message" => "data $barang->nama",
                "data" => $barang
            ],Response::HTTP_OK);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $barang = Barang::findOrFail($id);

        if (!$barang) {
            return response()->json([
                "message" => "barang tidak ditemukan"
            ],Response::HTTP_NOT_FOUND);
        }else {
            $validator = Validator::make($request->all(),[
                'nama' => 'required',
                'harga' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "message" => "fail",
                    "error" => $validator->errors()
                ],Response::HTTP_UNPROCESSABLE_ENTITY);
            }else {
                $barang->update($request->only('nama','harga'));

                return response()->json([
                    "message" => "data berhasil diperbarui",
                    "data" => $barang
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $barang = Barang::findOrFail($id);

        if (!$barang) {
            return response()->json([
                "message" => "barang tidak ditemukan"
            ],Response::HTTP_NOT_FOUND);
        }else {
            $barang->delete();
            return response()->json([
                "message" => "data berhasil dihapus"
            ]);
        }
    }
}
