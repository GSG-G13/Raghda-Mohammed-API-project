//embed_url

let xhr = new XMLHttpRequest();
// let query = "snow";
let apiKey = "7jZUWmm4lTTKHtgZxLHvfHnavLpOMGOM";


let container = document.getElementById("gify");
const getGif = (query) => {
  let url =
    "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey;
    xhr.open("GET", url);

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      const dataIndex = data.data;
      const randomIndex = Math.floor(Math.random() * dataIndex.length);
      imgApi = data.data[randomIndex].images.downsized_large.url;
      // let img = document.getElementById("weather-gif");
      // img.src = imgApi;
      let img = document.createElement("img");
      img.setAttribute("src", imgApi);
      container.appendChild(img);
    }
  };
  xhr.send();
};
