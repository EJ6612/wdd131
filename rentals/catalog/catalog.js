const items = [
    {
        name: 'Loveseat (Pink)',
        alt: 'Pink loveseat that fits two people.',
        image: 'images/loveseat_pink.webp',
        description: 'This loveseat is great for weddings and anniversaries.',
        tags: ['seat', 'pink'],
        price: '$100'
    }, 
    {
        name: 'Table Centerpiece (Bowl)',
        alt: 'A table with a centerpiece in the center. It is a white bowl with colorful flowers.',
        image: 'images/bowl_centerpiece.webp',
        description: 'These simple centerpieces complement a table very well.',
        tags: ['centerpiece', 'flowers', 'bowl'],
        price: '$10/each'
    },
    {
        name: 'Ceremony Backdrop',
        alt: 'White backrop made of white drapes (about 10 ft tall). In front are three metal-looking frame arches. Each one has a cluster of flowers attached.',
        image: 'images/ceremony_backdrop.webp',
        description: 'This backdrop includes the white drapes, arch frames, and flowers.',
        tags: ['backdrop', 'frames', 'arches', 'white'],
        price: '$600'
    },
    {
        name: 'Table Centerpiece (Vases)',
        alt: 'A table with a centerpiece in the center. It is three vases of varying heights surrounded by flowers.',
        image: 'images/cups_centerpiece.webp',
        description: 'These simple centerpieces complement a table very well.',
        tags: ['centerpiece', 'vase', 'flowers'],
        price: '$12/each'
    },
    {
        name: 'Floor Flower Decoration (Small)',
        alt: 'A metallic cube frame with flowers inside. Said flowers stick out.',
        image: 'images/floor_flowers_small.webp',
        description: '',
        tags: ['floor', 'flowers', 'frame', 'decoration'],
        price: '$10/each'
    },
    {
        name: 'Floor Flower Decoration (Large)',
        alt: 'A cluster of hand arranged flowers on the floor.',
        image: 'images/floor_flowers_large.webp',
        description: '',
        tags: ['floor', 'flowers', 'decoration'],
        price: '$15/each'
    },
    {
        name: "Couple's Table (with flowers)",
        alt: 'A table that fits two people. White tablecloth that drapes down to the floor. A long line of flowers lays across the table.',
        image: 'images/overlaid_flowers_table.webp',
        description: 'Includes flowers and tablecloth.',
        tags: ['table', 'flowers'],
        price: '$100'
    },
    {
        name: 'Table Centerpiece (Frame)',
        alt: 'A table with a centerpiece in the center. It is a metallic cube frame with flowers inside. Said flowers stick out.',
        image: 'images/square_centerpiece.webp',
        description: 'These simple centerpieces complement a table very well.',
        tags: ['centerpiece', 'frame', 'flowers'],
        price: '$10/each'
    },
    {
        name: 'Wedding Entrance',
        alt: 'An entrance for people to enter from the sides of a flowerwall to one entrance. Surrounded by white drapes. Programmable lights light up the flowerwall and entrance.',
        image: 'images/wedding_entrance.webp',
        description: 'Includes drapes, programmable lights, flowerwall, flower columns.',
        tags: ['entrance', 'wedding', 'white', 'colors'],
        price: '$900'
    }
]

let itemContainer = document.querySelector('main');

let searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', search);

function search() {
	itemQuery = document.querySelector('#searchInput').value;

	let filtereditems = items.filter(function(item) {
		return (
			item.name.toLowerCase().includes(itemQuery.toLowerCase()) ||
			item.description.toLowerCase().includes(itemQuery.toLowerCase()) ||
			item.tags.find(tag => 
				tag.toLowerCase().includes(itemQuery.toLowerCase())) ||
			item.itemIngredient.find(ingredient => 
				ingredient.toLowerCase().includes(itemQuery.toLowerCase()))
		);
	})

	let sorteditems = filtereditems.sort(compareitems);

	function compareitems(a,b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    }
    return 0;
    }

	itemContainer.innerHTML = "";
	sorteditems.forEach(function(item) {
		renderitem(item);
	})
}

let randomNum = Math.floor(Math.random()* items.length);
console.log(randomNum);

function tagTemplate(tags) {
    return tags.map((tag)=> `<h3>${tag}</h3>`).join(' ');
}

function itemTemplate(item) {
	return `<article class="item-card">
                <img src="${item.image}" alt="${item.alt}">
                <div class="item-info">
                    <div class="item-tags">
                        ${tagTemplate(item.tags)}
                    </div>
                    <h2 class="item-name">${item.name}</h2>
                    <p class="item-desc">${item.description}</p>
                </div>
            </article>`
}

function renderitem(item) {
	let html = itemTemplate(item);
	itemContainer.innerHTML += html;
}

function init() {
	renderitem(items[randomNum]);
}

init();