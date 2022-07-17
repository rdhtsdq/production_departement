<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\salesController;
use App\Http\Controllers\salesDetailController;
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

    // route for customers
    Route::get('/customers',[CustomerController::class,'index']);
    Route::post('/customers',[CustomerController::class,'store']);
    Route::get('/customers/{id}',[CustomerController::class,'show']);
    Route::patch('/customers/{id}',[CustomerController::class,'update']);
    Route::delete('/customers/{id}',[CustomerController::class,'destroy']);
    
    // route for sales
    Route::get('/sales',[salesController::class,'index']);
    Route::post('/sales',[salesController::class,'store']);
    Route::get('/sales/{id}',[salesController::class,'show']);
    Route::patch('/sales/{id}',[salesController::class,'update']);
    Route::delete('/sales/{id}',[salesController::class,'destroy']);

    // route for sales_detail

    Route::get('/sales_detail',[salesDetailController::class,'index']);
    Route::post('/sales_detail',[salesDetailController::class,'store']);
    Route::get('/sales_detail/{id}',[salesDetailController::class,'show']);
    Route::patch('/sales_detail/{id}',[salesDetailController::class,'update']);
    Route::delete('/sales_detail/{id}',[salesDetailController::class,'destroy']);

    // route for logout
    Route::post('/logout',[AuthController::class,'Logout']);
});