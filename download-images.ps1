# PowerShell script to download images for Arab Countries Archive website
# This script reads the image URLs from download-images.js and downloads them to the images folder

# Create images directory if it doesn't exist
if (-not (Test-Path -Path "images")) {
    New-Item -ItemType Directory -Path "images" | Out-Null
    Write-Host "Created images directory"
} else {
    Write-Host "Images directory already exists"
}

# Read the download-images.js file
$jsContent = Get-Content -Path "download-images.js" -Raw

# Extract the imageLinks object using regex
$regex = 'const\s+imageLinks\s*=\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}'
$match = [regex]::Match($jsContent, $regex)

if (-not $match.Success) {
    Write-Host "Could not find imageLinks object in download-images.js" -ForegroundColor Red
    exit 1
}

$imageLinksText = $match.Groups[1].Value

# Parse the image links
$imageLinks = @{}
$lines = $imageLinksText -split '\r?\n'

foreach ($line in $lines) {
    if ($line -match '"([^"]+)":\s*"([^"]+)"') {
        $filename = $matches[1].Trim()
        $url = $matches[2].Trim()
        $imageLinks[$filename] = $url
    }
}

# Download the images
Write-Host "Found $($imageLinks.Count) images to download"

$webClient = New-Object System.Net.WebClient

$successCount = 0
$failCount = 0

foreach ($filename in $imageLinks.Keys) {
    $url = $imageLinks[$filename]
    $outputPath = Join-Path -Path "images" -ChildPath $filename
    
    try {
        Write-Host "Downloading $filename from $url"
        $webClient.DownloadFile($url, $outputPath)
        $successCount++
        Write-Host "  Success: $filename" -ForegroundColor Green
    } catch {
        $failCount++
        Write-Host "  Failed to download ${filename}: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Download complete. $successCount images downloaded successfully, $failCount failed." -ForegroundColor Cyan
Write-Host "All images have been downloaded to the images folder." 