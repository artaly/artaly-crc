fetch('https://102ewhf875.execute-api.us-east-1.amazonaws.com/Prod/get')
.then(response => response.json())
.then((data) => {
    document.getElementById('visitor_count').innerText = data.count
})