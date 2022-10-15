if (!!window && !!window.EventSource) {
  var source = new EventSource('https://localhost:7261/weatherforecast');

  source.onopen = function() {
    console.log('connection to stream has been opened');
  };
  source.onerror = function (error) {
   console.log('An error has occurred while receiving stream', error);
  };

  source.onmessage = function (stream) {
   console.log('received stream', stream);
  };
}
