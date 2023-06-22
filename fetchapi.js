const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

 function fetchAndDisplay(urls) {
    urls.map ((url) => fetch(url))
        .then((response) => response.json())
        .then((data) => {
            try {
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })
        .catch((error) => {
            console.log(error);
        })

 }






 

 

