self.onmessage = (mssg) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + mssg.data);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            self.postMessage(xhr.response);
        }
    }
}