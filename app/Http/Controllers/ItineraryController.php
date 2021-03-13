<?php

namespace App\Http\Controllers;

use App\Itinerary;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ItineraryController extends Controller
{
    public function cpIndex()
    {
        try {
            $itineraryList = Itinerary::with('package')->get()->all();
            Log::info($itineraryList);
            if ($itineraryList) {
                return response()->json($itineraryList, 200);
            }
            return response()->json([], 200);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpIndexByID(Request $request, $id)
    {
        try {
            $itineraryList = Itinerary::where('itinerary_id', $id)->with('package')->get()->all();
            if ($itineraryList) {
                return response()->json($itineraryList, 200);
            }
            return response()->json([], 200);
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpAddItinerary(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'description' => 'required|string',
            'features' => 'required|string',
            'package_id' => 'required|int'
        ]);

        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $itineraryEntry = Itinerary::create($request->input());
            if ($itineraryEntry) {
                $itineraryEntry = $this->cpGetItineraryByID($itineraryEntry->itinerary_id);
                return response(["message" => "itinerary entry added successfully", "itineraryEntry" => $itineraryEntry], 200);
            }
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpUpdateItinerary(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'itinerary_id' => 'required|int',
            'package_id' => 'required|int',
            'description' => 'required|string',
            'features' => 'required|string'
        ]);
        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $itineraryEntry = Itinerary::where('itinerary_id', $request['itinerary_id'])->with('package')->first();
            $isUpdated = $itineraryEntry->update([
                'description' => $request['description'],
                'features' => $request['features'],
                'package_id' => $request['package_id']
            ]);
            if ($isUpdated) {
                $itineraryUpdated = $itineraryEntry->refresh();
                return response(["message" => "itinerary entry updated successfully", "itineraryEntry" => $itineraryUpdated], 200);
            } else {
                return response(["message" => "itinerary entry could not be updated"], 500);
            }
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpGetItineraryByID($pItineraryID)
    {
        try {
            $itineraryEntry = Itinerary::where('itinerary_id', $pItineraryID)->with('package')->first();
            if ($itineraryEntry) {
                return $itineraryEntry;
            }
            return [];
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }
}
