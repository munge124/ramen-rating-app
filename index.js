document.addEventListener('DOMContentLoaded', () => {
    const ramens = [
        { id: 1, name: "Gyukotsu Ramen", restaurant: "Gyukotsu", image: "./css/images/gyukotsu.jpg", rating: 5, comment: "Delicious beefy broth!" },
        { id: 2, name: "Kojiro Ramen", restaurant: "Kojiro", image: "./css/images/kojiro (1).jpg", rating: 4, comment: "Rich and savory!" },
        { id: 3, name: "Naruto Ramen", restaurant: "Naruto-ya", image: "./css/images/naruto.jpg", rating: 4, comment: "Satisfying and flavorful." },
        { id: 4, name: "Nirvana Ramen", restaurant: "Nirvana", image: "./css/images/nirvana (1).jpg", rating: 5, comment: "Absolutely heavenly!" },
        { id: 5, name: "Shoyu Ramen", restaurant: "Ichiryu", image: "./css/images/shoyu (2).jpg", rating: 3, comment: "Good, but could use more depth." }
    ];
   
    const ramenMenu = document.getElementById('ramen-menu');
    const detailImage = document.getElementById('detail-image');
    const ramenName = document.getElementById('ramen-name');
    const ramenRestaurant = document.getElementById('ramen-restaurant');
    const ramenRating = document.getElementById('ramen-rating');
    const ramenComment = document.getElementById('ramen-comment');


    
    const ramenData = [
        {
            name: 'Gyukotsu Ramen',
            restaurant: 'Gyukotsu',
            image: './css/images/gyukotsu.jpg',
            rating: 5,
            comment: 'Rich and flavorful beef bone broth.'
        },
        {
            name: 'Kojiro Ramen',
            restaurant: 'Ippudo',
            image: './css/images/kojiro (1).jpg',
            rating: 4,
            comment: 'Classic tonkotsu with a modern twist.'
        },
        {
            name: 'Naruto Ramen',
            restaurant: 'Ramen Nagi',
            image: './css/images/naruto.jpg',
            rating: 3,
            comment: 'Good for Naruto fans, but average taste.'
        },
        {
            name: 'Nirvana Ramen',
            restaurant: 'Menya Musashi',
            image: './css/images/nirvana (1).jpg',
            rating: 5,
            comment: 'Heavenly broth with perfect noodles.'
        },
        {
            name: 'Shoyu Ramen',
            restaurant: 'Afuri',
            image: './css/images/shoyu (2).jpg',
            rating: 4,
            comment: 'Light and refreshing soy sauce base.'
        }
    ];

    
    function displayRamenDetails(ramen) {
        const ramen = ramenData[index]; 
        ramenName.textContent = ramen.name; 
        ramenRestaurant.textContent = ramen.restaurant; 
        ramenRating.textContent = ramen.rating; 
        ramenComment.textContent = ramen.comment; 
        detailImage.src = ramen.image;
    }
    displayRamenDetails(ramen)
2
    
    ramenImages.forEach((img, index) => {
        img.addEventListener('click', () => displayRamenDetails(index));
    });

    ramenData.forEach((ramen, index) => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        ramenMenu.appendChild(img);
    });
});