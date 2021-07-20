//selectors 
const catBasket = document.querySelector("#cat-basket")
//eventlisteners

//functions




const cats = [
    {
        name: 'pumpkin',
        thumbnail: 'images/pumpkin.jpg',
        trophy:true
    },
     {
        name: 'peanut',
        thumbnail: 'images/peanut.jpg'
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'strawbelly',
        thumbnail: 'images/strawbelly.jpg',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    }
]

cats.forEach(item =>{
    const  card = document.createElement('div');
    card.classList.add('card');
    catBasket.appendChild(card);
    if(item.trophy === true){
        card.classList.add("trophy");

    }

    const  pic = document.createElement('img');
    card.classList.add('pic');
    pic.src = item.thumbnail; 
    card.appendChild(pic);

    const catName = document.createElement('h2');
    catName.classList.add('cat_name');
    catName.innerText = item.name

    card.appendChild(catName);

    const paw = document.createElement('span');
    paw.classList.add('material-icons-outlined');
    paw.textContent="pets";
    card.appendChild(paw);

    //event listeners
    paw.addEventListener('click', highpaw);

    function highpaw(){
        paw.classList.toggle('high-pawed');

    }
    })

    