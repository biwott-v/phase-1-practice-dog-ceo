console.log('%c HI', 'color: firebrick');
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById('dog-image-container');
    const breedList = document.getElementById('dog-breeds');
    const dropdown = document.getElementById('breed-dropdown');

    // Challenge 1: Load dog images
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => data.message.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.style.maxWidth = '200px';
            imageContainer.appendChild(img);
        }));

    // Challenge 2 & 3: Load breeds and add click handlers
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            const breeds = Object.keys(data.message);

            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                li.addEventListener('click', () => li.style.color = '#ff69b4');
                breedList.appendChild(li);
            });

            // Challenge 4: Add breed filtering
            dropdown.addEventListener('change', e => {
                const letter = e.target.value;
                Array.from(breedList.children).forEach(li => {
                    li.style.display = li.textContent.startsWith(letter) ? '' : 'none';
                });
            });
        });
});
