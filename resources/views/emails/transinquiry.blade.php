<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <h1>----------transinquiry request from {{ $cTransInquiry->clientname}}----------</h1>
    <div>
        <div>Client Name: {{$cTransInquiry->clientname}}</div>
        <div>Client email: {{$cTransInquiry->email}}</div>
        <div>Client country: {{$cTransInquiry->country}}</div>
        <div>Client phone: {{$cTransInquiry->phone}}</div>
        <div>Client message: {{$cTransInquiry->message}}</div>
    </div>
</body>
</html>
