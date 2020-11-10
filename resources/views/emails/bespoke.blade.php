<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <h1>----------Bespoke request from {{ $cBespoke->clientname}}----------</h1>
    <div>
        <div>Client Name: {{$cBespoke->clientname}}</div>
        <div>Client email: {{$cBespoke->email}}</div>
        <div>Client country: {{$cBespoke->country}}</div>
        <div>Client phone: {{$cBespoke->phone}}</div>
        <div>Client message: {{$cBespoke->message}}</div>
    </div>
</body>
</html>
