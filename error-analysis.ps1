# Analyze and fix Automation Brain™ errors
Write-Host "?? ANALYZING AUTOMATION BRAIN™ ERRORS..." -ForegroundColor Yellow

# Check recent logs for error patterns
Write-Host "`n?? RECENT ERROR ANALYSIS:" -ForegroundColor Yellow
$recentErrors = docker-compose logs --tail=50 2>$null | Select-String "error|failed|?" -CaseSensitive:$false

if ($recentErrors) {
    Write-Host "? Found $($recentErrors.Count) error entries" -ForegroundColor Red
    
    # Analyze error patterns
    $errorPatterns = @{
        "GitHub" = $recentErrors | Where-Object { $_ -match "github|GitHub" }
        "Gumroad" = $recentErrors | Where-Object { $_ -match "gumroad|Gumroad" }
        "API" = $recentErrors | Where-Object { $_ -match "api|API|404|401|403" }
        "Network" = $recentErrors | Where-Object { $_ -match "network|timeout|connection" }
    }

    foreach ($pattern in $errorPatterns.GetEnumerator()) {
        if ($pattern.Value) {
            Write-Host "?? $($pattern.Key) Errors: $($pattern.Value.Count)" -ForegroundColor Red
        }
    }
}

# Create fix recommendations
$fixRecommendations = @"
?? ERROR FIX RECOMMENDATIONS:
???????????????????????????????

BASED ON ERROR ANALYSIS:
1. Check API token validity (GitHub/Gumroad)
2. Verify network connectivity
3. Test individual node functionality
4. Check rate limiting (too many requests)
5. Validate JSON data format

IMMEDIATE FIXES TO TRY:
1. Regenerate API tokens if expired
2. Test uploads manually first
3. Add retry logic for failed uploads
4. Implement error handling
5. Add fallback mechanisms
"@

$fixRecommendations | Out-File -FilePath "C:\automation-brain\ERROR_ANALYSIS.txt" -Encoding UTF8

Write-Host "? Error analysis complete! Check ERROR_ANALYSIS.txt for details" -ForegroundColor Green
