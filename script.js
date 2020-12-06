const imageContainer = document.getElementById('image-container');
console.log(imageContainer);
const loader = document.getElementById('loader');

let photosArray = [];


// Unsplash API
const count = 10;
const apiKey = 'cCiXVgs8TKhXvWWedKuH0X_YNU5H4kmnIJBmZESdz7o'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&featured&query=ladybugs`;

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links and photos, and add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',

        });

        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        // Put <img> inside <a>, then put both inside the imageContainer element.
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error here
    }
}

// On Load
getPhotos();