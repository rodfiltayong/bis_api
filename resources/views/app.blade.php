<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BIS</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
@vite('resources/css/app.css')

<body>
    <div id="root"></div>

    @viteReactRefresh
    @vite('resources/frontend/app.js')
</body>
</html>
