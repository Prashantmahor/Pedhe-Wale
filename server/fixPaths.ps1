Get-ChildItem -Path ".\data\pedhe_json" -Filter "*.json" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace '/Pedhe-Wale/images/', '/images/'
    $content = $content -replace '/classic_pedas/', '/images/classic_pedas/'
    $content = $content -replace '"image": "([^"]*)"', {
        $image = $matches[1]
        if ($image -notmatch '^/images/') {
            $image = '/images/classic_pedas/' + $image
        }
        '"image": "' + $image + '"'
    }
    Set-Content $_.FullName $content
}
