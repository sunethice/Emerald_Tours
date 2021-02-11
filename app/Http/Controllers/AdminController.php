<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller
{
    public function cpUploadFileToServer(Request $request)
    {
        $name = $request->nome;
        $image = $request->file;/*remove special characters and spaces*/
        $name = preg_replace("/[^A-Za-z0-9]/", "", $name);
        $nowTIME = Carbon::now();
        if ($name == NULL || $duracao_maxima == NULL) {
            return response()->json("Error!");
        } else {
            $material_array = [];
            $namefile = '_' . time() . '.png';
            $destinationPath = public_path('product_images') . '/' . $namefile;
            if (file_put_contents($destinationPath, file_get_contents($image))) {
                // echo 'Uploaded file';
            } else {
                echo "Unable to save the file.";
            }
            /*Destination file path*/
            /*file:///C:/Users/Name/Desktop/App/public/product_images/1514982145*/
            //$image = $request->get('file');
            /*try{
                $image->move($destinationPath, $namefile);
            }catch(\Exception $e ){
                return $e->getMessage();
            }*/
            // Start transaction!
            DB::beginTransaction();
            try {
                $material_array[0] = ['filepath' => $namefile,];
                Material::insert($material_array);
                DB::commit();
                return response()->json('1');
            } catch (\Exception $e) {
                DB::rollback();
                Log::error($e->getMessage());
                return response()->json($e->getMessage());
            }
        }
    }
}
