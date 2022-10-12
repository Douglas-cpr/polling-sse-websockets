async function simpleShortPolling() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await response.json()
  console.log(json)
}

setInterval(simpleShortPolling, 5000)