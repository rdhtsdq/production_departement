<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BarangController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// route for login & register

Route::post('/register',[AuthController::class,'Register']);
Route::post('/login',[AuthController::class,'Login'])->name('login');


Route::group(['middleware' => 'auth:sanctum'], function (){


    // route for products
    Route::get('/products',[BarangController::class,'index']);
    Route::post('/products',[BarangController::class,'store']);
    Route::get('/products/{id}',[BarangController::class,'show']);
    Route::patch('/products/{id}',[BarangController::class,'update']);
    Route::delete('/products/{id}',[BarangController::class,'destroy']);
    

    // route for logout
    Route::post('/logout',[AuthController::class,'Logout']);
});