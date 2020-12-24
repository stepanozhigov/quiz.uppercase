<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lead;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $leads = Lead::All()->reverse();

        $data = [
            'title' => 'Заявки',
            'leads' => $leads,
        ];

        return view('admin.lead.index', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->except('_token');
        $lead = Lead::create($input);

        $client = new Client();

        $amoData = [
            'url'             => 'quiz.uppercase.group',
            'name'            => "ОАЭ - Квиз",
            'phone'           => $request['phone'],
            'lead_comment'    => $request['text']
        ];

        $result = $client->post('https://amoconnect.ru/amo-ipravo/api/slug/uppercase-quiz-group', [
            'form_params' => $amoData
        ]);

        if (isset($request['phone'])) {
        	$roistatData = array(
        			'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
        			'key' => 'YTZhNWVkYTE4ZjRiNGJkNzc0YmJkNzdhNDAwN2M2MmI6MTY4MDI0',
        			'title' => "Новый лид с quiz.uppercase.group/en",
        			'phone' => $request['phone'],
        			'is_skip_sending' => 1
        	);
        		
        	file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Lead $lead)
    {

        $data = [
            'title' => 'Заявка',
            'lead' => $lead
        ];

        return view('admin.lead.show',$data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lead $lead)
    {
        $lead->delete();
        return redirect()->route('leads.index')->with('status','Заявка удалена');
    }
}
