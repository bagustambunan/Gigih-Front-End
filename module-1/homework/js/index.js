const form = document.getElementById('form');
const box_img = document.getElementById('box_img');
const text_title = document.getElementById('text_title');
const text_artist = document.getElementById('text_artist');
const text_album = document.getElementById('text_album');

const handleSubmit = () => {
    alert('Semangat selalu yang sedang berjuang!');
}

form.addEventListener('submit', handleSubmit);

axios
    .get("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json", {})
    .then(response => {
        console.log(response.data);
        text_title.innerHTML = response.data['album']['name'];
        text_artist.innerHTML = response.data['album']['artists'][0]['name'];
        text_album.innerHTML = response.data['name'];
        let img = response.data['album']['images'][0]['url'];
        box_img.innerHTML = `<img src='${img}'>`;
        // console.log(response.data['album']['images'][0]['url']);
    })
    .catch(err => alert(err.data));