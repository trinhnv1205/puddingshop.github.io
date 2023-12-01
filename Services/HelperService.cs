using System;
using System.Net.Http.Json;
using System.Text.Json;
using Models;

namespace Services;

public class HelperService : IHelperService
{
    private readonly ILogger<HelperService> _logger;
    private readonly HttpClient _httpClient;

    public HelperService(ILogger<HelperService> logger, HttpClient httpClient)
    {
        _logger = logger;
        _httpClient = httpClient;
    }
    public string GenerateJwtToken(User user)
    {
        throw new NotImplementedException();
    }

    public string HashPassword(string password)
    {
        throw new NotImplementedException();
    }

    public async Task<T[]> LoadDataFromJsonFile<T>(string fileName)
    {
        _logger.LogInformation($"LoadDataFromJsonFile called");
        var json = _httpClient.GetFromJsonAsync<T[]>($"sample-data/{fileName}");
        _logger.LogInformation($"LoadDataFromJsonFile returned");
        return await json?? new T[0];
    }

    public bool VerifyPassword(string password, string passwordHash)
    {
        throw new NotImplementedException();
    }
}