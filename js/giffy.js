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
      let data = JSON.parse(xhr.responseText);
      imgApi = data.data[0].images.downsized_large.url;
      let img = document.createElement("img");
      img.setAttribute("src", imgApi);
      container.appendChild(img);
    }
  };
  xhr.send();
};
