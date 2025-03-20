document.addEventListener('DOMContentLoaded', main)
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
        
        function displayRamenDetails(ramen) {
            ramenName.textContent = ramen.name;
            ramenRestaurant.textContent = ramen.restaurant;
            ramenRating.textContent = `Rating: ${ramen.rating}`;
            ramenComment.textContent = ramen.comment;
            detailImage.src = ramen.image;
        }

        function displayRamens() {
            ramenMenu.innerHTML = ""; 
            ramens.forEach(ramen => addRamenToRamenMenu(ramen));
        }

        function addRamenToRamenMenu(ramen) {
            const img = document.createElement('img');
            img.src = ramen.image;
            img.alt = ramen.name;
            img.dataset.id = ramen.id;

            img.addEventListener("click", () => handleClick(ramen)); 
            ramenMenu.appendChild(img);
        }

        function handleClick(ramen) {
            displayRamenDetails(ramen);
        }
        function addSubmitListener(){
            const form =document.getElementById("new-ramen")
            form.addEventListener('submit', handleFormSubmit)
        }
        function handleFormSubmit(event){
            event.preventDefault()
        
        const names = document.getElementById("name").value
        const restaurant = document.getElementById("restaurant").value
        const image = document.getElementById("image").value
        const rating = document.getElementById("rating").value
        const comment = document.getElementById("comment").value

        if (names && restaurant && image && rating && comment){
            addsRamenMenu(names, restaurant, image, rating, comment)
            event.target.reset()
        }}
        function addsRamenMenu(names, restaurant, image, rating, comment){
            const newMenu = {
                name : names,
                restaurant : restaurant,
                image : image,
                rating : rating,
                comment : comment,
            }

                ramens.push(newMenu);
                addRamenToRamenMenu(newMenu)

            
        }
        function main() {
            displayRamens();
            addSubmitListener()
            if (ramens.length<0){
                handleClick(ramens[0])
            }
        }