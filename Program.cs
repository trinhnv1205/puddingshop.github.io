using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using mudblazorapp;
using MudBlazor.Services;
using Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddScoped<IHelperService, HelperService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddLogging();
builder.Services.AddMudServices();

await builder.Build().RunAsync();
