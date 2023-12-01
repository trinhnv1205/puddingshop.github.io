using Models;

namespace Services;

public interface IHelperService
{
    public string GenerateJwtToken(User user);
    public string HashPassword(string password);
    public bool VerifyPassword(string password, string passwordHash);
    // load data from json file in wwwroot/sample-data
    public Task<List<T>> LoadDataFromJsonFile<T>(string fileName);
}