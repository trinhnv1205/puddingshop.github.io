using System.Net.Http.Json;
using Models;

namespace Services;

public class UserService : IUserService
{
    private readonly IHelperService _helperService;
    private readonly ILogger<UserService> _logger;
    private readonly HttpClient _httpClient;
    private static User[]? users;
    public UserService(IHelperService helperService, ILogger<UserService> logger, HttpClient httpClient)
    {
        _helperService = helperService;
        _logger = logger;
        _httpClient = httpClient;
    }

    public Task<User> Authenticate(string username, string password)
    {
        var result = GetAll().Result.FirstOrDefault(x => x.Username == username && x.Password == password);
        return Task.FromResult(result ?? new User());
    }

    public async Task<User> Create(User user, string password)
    {
        try
        {
            // user.Id = users?.Length + 1 ?? 1;
            // user.Password = _helperService.HashPassword(password);
            _logger.LogInformation($"{user.Id} {user.Name} {user.Username} {user.Password} {user.Role}");
            var result = await _httpClient.GetFromJsonAsync<User[]>($"sample-data/users.json");
            result.Append(user);
            users = result.ToArray();
            _logger.LogInformation($"Create called");
            await _httpClient.PostAsJsonAsync($"sample-data/users.json", users);
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
        }
        return user;
    }

    public Task Delete(int id)
    {
        var result = GetAll().Result.ToList();
        var user = result.FirstOrDefault(x => x.Id == id);
        if (user != null)
        {
            result.Remove(user);
        }

        _httpClient.PutAsJsonAsync($"sample-data/users.json", result);
        return Task.CompletedTask;
    }

    public async Task<User[]> GetAll()
    {
        users = await _httpClient.GetFromJsonAsync<User[]>($"sample-data/users.json");
        return users ?? new User[0];
    }

    public async Task<User> GetById(int id)
    {
        var result = GetAll().Result.FirstOrDefault(x => x.Id == id);
        return await Task.FromResult(result) ?? new User();
    }

    public async Task Update(User user, string password = null)
    {
        var result = GetAll().Result.FirstOrDefault(x => x.Id == user.Id);
        if (result != null)
        {
            result.Name = user.Name;
            result.Password = user.Password;
            result.Username = user.Username;
            result.Role = user.Role;
        }

        await _httpClient.PutAsJsonAsync($"sample-data/users.json", result);
    }
}