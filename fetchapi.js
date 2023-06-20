const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

function fetch(urls) {
    return fetch(urls)
    .then(response => response.json())
    .then((data) => {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

// Iterate over the URLs and make AJAX calls
urls.forEach(url => {
    fetch(url);
  });