using System;
using System.Text.Json;
using Models;

namespace Services;

public class HelperService : IHelperService
{
    private readonly ILogger<HelperService> _logger;

    public HelperService(ILogger<HelperService> logger)
    {
        _logger = logger;
    }
    public string GenerateJwtToken(User user)
    {
        throw new NotImplementedException();
    }

    public string HashPassword(string password)
    {
        throw new NotImplementedException();
    }

    public async Task<List<T>> LoadDataFromJsonFile<T>(string fileName)
    {
        _logger.LogInformation($"LoadDataFromJsonFile<{typeof(T)}>() called");
        
        // load data from json file in ./wwwroot/sample-data
        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "sample-data", fileName);
        // check if file exists
        if (!File.Exists(path))
        {
            _logger.LogError($"File {path} not found");
            return new List<T>();
        }
        var json = await File.ReadAllTextAsync(path);
        return JsonSerializer.Deserialize<List<T>>(json) ?? new List<T>();
    }

    public bool VerifyPassword(string password, string passwordHash)
    {
        throw new NotImplementedException();
    }
}