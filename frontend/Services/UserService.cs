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
            var result = GetAll().Result.ToList();
            result.Add(user);
            await _httpClient.PutAsJsonAsync($"sample-data/users.json", result);
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
        }
        return user;
    }

    public Task Delete(int id)
    {
        try
        {
            var result = GetAll().Result.ToList();
            result.Remove(result?.FirstOrDefault(x => x.Id == id));
            _httpClient.PutAsJsonAsync($"sample-data/users.json", result);
        }
        catch (System.Exception)
        {
            _logger.LogError($"User with id {id} not found");            
        }
        return Task.CompletedTask;
    }

    public async Task<User[]> GetAll()
    {
        users = await _httpClient.GetFromJsonAsync<User[]>($"sample-data/users.json");
        return users ?? new User[0];
    }

    public async Task<User> GetById(int id)
    {
        try
        {
            var result = GetAll().Result.FirstOrDefault(x => x.Id == id);
            return await Task.FromResult(result ?? new User());
        }
        catch (System.Exception)
        {
            _logger.LogError($"User with id {id} not found");
            return new User();
        }
    }

    public async Task Update(User user, string password = null)
    {
        try
        {
            var result = GetAll().Result.ToList();
            var index = result.FindIndex(x => x.Id == user.Id);
            result[index] = user;
            await _httpClient.PutAsJsonAsync($"sample-data/users.json", result);
        }
        catch (System.Exception)
        {
            _logger.LogError($"User with id {user.Id} not found");
        }
    }
}