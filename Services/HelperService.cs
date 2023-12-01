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
        
        // if is development environment set "/Users/trinhnv/RiderProjects/trinhnv1205.github.io/bin/Release/net6.0/wwwroot"
        // else set "/app/wwwroot"

        var path = Path.Combine(Directory.GetCurrentDirectory(), "sample-data", fileName);
        // var path = Path.Combine("/Users/trinhnv/RiderProjects/trinhnv1205.github.io/bin/Release/net6.0/wwwroot", "sample-data", fileName);
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