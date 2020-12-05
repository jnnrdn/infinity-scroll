// Unsplash API

const count = 10;
const apiKey = 'cCiXVgs8TKhXvWWedKuH0X_YNU5H4kmnIJBmZESdz7o'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&featured`;

// Get photos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error here
    }
}

// On Load
getPhotos();