<?php

namespace App\Http\Controllers;

use App\Package;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PackagesController extends Controller
{
    //
    public function cpIndex()
    {
        try {
            $packageList = Package::get()->all();
            if ($packageList) {
                return response()->json($packageList, 200);
            }
            return response()->json([], 200);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
        // $packages = Package::where('featured', true)->get();
        // foreach ($packages as $key => $value) {
        //     $packages[$key]['category_name'] = ($value->packageCategory->name);
        // }
    }

    public function cpListPackageIDs()
    {
        try {
            $packageList = Package::select('package_id', 'name')->get();
            if ($packageList) {
                return response(["packageMeta" => $packageList], 200);
            }
            return response()->json([], 200);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpShow()
    {
    }

    public function cpAddPackage(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'destination' => 'required|string',
            'description' => 'required|string',
            'no_of_days' => 'required|int',
            'no_of_nights' => 'required|int',
            'featured' => 'required|boolean'
        ]);

        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $packageEntry = Package::create($request->input());
            if ($packageEntry) {
                return response(["message" => "package entry added successfully", "packageEntry" => $packageEntry], 200);
            }
            return response(["message" => "package could not be added."], 500);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpUpdatePackage(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'package_id' => 'required|int',
            'name' => 'required|string',
            'destination' => 'required|string',
            'description' => 'required|string',
            'no_of_days' => 'required|int',
            'no_of_nights' => 'required|int',
            'featured' => 'required|boolean'
        ]);
        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $packageEntry = Package::where('package_id', $request['package_id'])->first();

            $isUpdated = $packageEntry->update([
                'name' => $request['name'],
                'destination' => $request['destination'],
                'description' => $request['description'],
                'no_of_days' => $request['no_of_days'],
                'no_of_nights' => $request['no_of_nights'],
                'featured' => $request['featured']
            ]);
            if ($isUpdated) {
                $packageUpdated = $packageEntry->refresh();
                return response(["message" => "package entry updated successfully", "packageEntry" => $packageUpdated], 200);
            } else {
                return response(["message" => "package entry could not be updated"], 500);
            }
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpGetPackageWithItinerary(Request $request, $packageId)
    {
        try {
            $packageEntry = Package::where('package_id', $packageId)->with('itineraries')->get();

            if ($packageEntry) {
                return response(["message" => "package retrieved successfully", "packageEntry" => $packageEntry], 200);
            }
            return response(["message" => "package could not be retrieved."], 500);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }
}
