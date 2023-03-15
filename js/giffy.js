//embed_url

let xhr = new XMLHttpRequest();
let query = "snow";
let apiKey = "7jZUWmm4lTTKHtgZxLHvfHnavLpOMGOM";

let url =
  "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey;
xhr.open("GET", url);

let container = document.getElementById('gify');
xhr.onload = function () {
  if (xhr.readyState == 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    imgApi = data.data[0].embed_url    ;
    console.log(data);
    // let img = document.getElementById("weather-gif");
    // img.src = imgApi;
    let img = document.createElement("img");
    img.setAttribute('src', imgApi);
    container.appendChild(img);
  }
};
xhr.send();
