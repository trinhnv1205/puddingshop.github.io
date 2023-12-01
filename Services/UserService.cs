using Models;

namespace Services;

public class UserService : IUserService
{
    private readonly IHelperService _helperService;
    private readonly ILogger<UserService> _logger;
    public UserService(IHelperService helperService, ILogger<UserService> logger)
    {
        _helperService = helperService;
        _logger = logger;
    }

    public Task<User> Authenticate(string username, string password)
    {
        throw new NotImplementedException();
    }

    public Task<User> Create(User user, string password)
    {
        throw new NotImplementedException();
    }

    public Task Delete(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<List<User>> GetAll()
    {
        await _helperService.LoadDataFromJsonFile<User>("users.json");
        _logger.LogInformation("GetAll() called");
        return await Task.FromResult(new List<User>());
    }

    public Task<User> GetById(int id)
    {
        throw new NotImplementedException();
    }

    public Task Update(User user, string password = null)
    {
        throw new NotImplementedException();
    }
}