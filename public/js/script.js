const newClickHandler = async function(event) {
  await fetch('/api/click', {
    method: 'POST',
    body: JSON.stringify({
      count: 1
    }),
    headers: { 'Content-Type': 'application/json'}
  })
  document.location.reload()
}

document.querySelector('#add-click').addEventListener('click', newClickHandler)
