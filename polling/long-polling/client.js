async function longPollingExample() {
  console.log('start request')
  const response = await fetch('http://localhost:8080')
  console.log(response)
  longPollingExample()
}


longPollingExample()