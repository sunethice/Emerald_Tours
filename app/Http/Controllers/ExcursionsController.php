<?php

namespace App\Http\Controllers;

use App\Excursion;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ExcursionsController extends Controller
{
    public function cpIndex()
    {
        try {
            $excursionList = Excursion::get()->all();
            if ($excursionList) {
                return response()->json($excursionList, 200);
            }
            return response()->json([], 200);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
        // $excursions = Excursion::where('featured', true)->get();
        // foreach ($excursions as $key => $value) {
        //     $excursions[$key]['category_name'] = ($value->excursionCategory->name);
        // }
    }

    public function cpListExcursionIDs()
    {
        try {
            $excursionList = Excursion::select('excursion_id', 'name')->get();
            if ($excursionList) {
                return response(["excursionMeta" => $excursionList], 200);
            }
            return response()->json([], 200);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpAddExcursion(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $excursionEntry = Excursion::create($request->input());
            if ($excursionEntry) {
                return response(["message" => "excursion entry added successfully", "excursionEntry" => $excursionEntry], 200);
            }
            return response(["message" => "excursion could not be added."], 500);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpUpdateExcursion(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'excursion_id' => 'required|int',
            'name' => 'required|string',
            'description' => 'required|string'
            // 'destination' => 'required|string',

        ]);
        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $excursionEntry = Excursion::where('excursion_id', $request['excursion_id'])->first();

            $isUpdated = $excursionEntry->update([
                'name' => $request['name'],
                // 'destination' => $request['destination'],
                'description' => $request['description']
            ]);
            if ($isUpdated) {
                $excursionUpdated = $excursionEntry->refresh();
                return response(["message" => "excursion entry updated successfully", "excursionEntry" => $excursionUpdated], 200);
            } else {
                return response(["message" => "excursion entry could not be updated"], 500);
            }
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }
}
