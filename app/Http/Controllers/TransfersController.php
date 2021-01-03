<?php

namespace App\Http\Controllers;

use App\Transfers;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransfersController extends Controller
{
    public function cpAddTrasfer(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'from' => 'required|string',
            'to' => 'required|string',
            'drivetime' => 'required|string'
        ]);

        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $transferEntry = Transfers::create($request->input());
            if ($transferEntry) {
                return response(["message" => "transfer entry added successfully", "transferEntry" => $transferEntry], 200);
            }
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpUpdateTrasfer(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id' => 'required|int',
            'from' => 'required|string',
            'to' => 'required|string',
            'drivetime' => 'required|string',
            'charge' => 'required|regex:/^\d+(\.\d{1,2})?$/'
        ]);
        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }
        try {
            $transferEntry = Transfers::where('id', $request['id'])->first();

            $isUpdated = $transferEntry->update([
                'from' => $request['from'],
                'to' => $request['to'],
                'drivetime' => $request['drivetime'],
                'charge' => $request['charge']
            ]);
            if ($isUpdated) {
                $transferUpdated = $transferEntry->refresh();
                return response(["message" => "transfer entry updated successfully", "transferEntry" => $transferUpdated], 200);
            } else {
                return response(["message" => "transfer entry could not be updated"], 500);
            }
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }

    public function cpGetTransferList(Request $request)
    {
        try {
            $transferList = Transfers::get()->all();
            if ($transferList) {
                return response()->json($transferList, 200);
            }
        } catch (QueryException $ex) {
            return response(["message" => $ex->getMessage()], 500);
        }
    }
}
