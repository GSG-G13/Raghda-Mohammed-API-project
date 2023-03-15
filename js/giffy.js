let xhr = new XMLHttpRequest();
let apiKey = "7jZUWmm4lTTKHtgZxLHvfHnavLpOMGOM";

let container = document.getElementById("gify");
const getGif = (query) => {
  let url =
    "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey;
  xhr.open("GET", url);

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      imgApi = data.data[0].images.downsized_large.url;
      let img = document.querySelector(".weather-gif");
      img.src = imgApi;
    }
  };
  xhr.send();
};
