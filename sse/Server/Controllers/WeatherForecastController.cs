using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
  private readonly ILogger<WeatherForecastController> _logger;

  public WeatherForecastController(ILogger<WeatherForecastController> logger)
  {
    _logger = logger;
  }

  [HttpGet]
  public async Task Get()
  {
    var response = Response;
    response.Headers.Add("Content-Type", "text/event-stream");
    response.Headers.Add("Connection", "keep-alive");
    response.Headers.Add("Access-Control-Allow-Origin", "*");
    response.Headers.Add("Access-Control-Allow-Credentials", "true");


    for (var i = 0; true; ++i)
    {
      await response.WriteAsync($"data: Controller {i} at {DateTime.Now}\r\r");
      await response.Body.FlushAsync();
      await Task.Delay(5 * 1000);
    }
  }
}
