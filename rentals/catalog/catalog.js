const items = [
    {
        name: 'Loveseat (Pink)',
        image: 'images/loveseat_pink.jpg',
        description: 'This loveseat is great for weddings and anniversaries.',
        tags: ['seat', 'pink'],
        price: '$100'
    }, 
    {
        name: 'Table Centerpiece (Bowl)',
        image: 'images/bowl_centerpiece.jpg',
        description: 'These simple centerpieces complement a table very well.',
        tags: ['centerpiece', 'flowers', 'bowl'],
        price: '$10/each'
    },
    {
        name: 'Ceremony ',
        image: 'images/ceremony_backdrop.jpg',
        description: 'This backdrop includes the white drapes, arch frames, and flowers.',
        tags: ['backdrop', 'frames', 'arches', 'white'],
        price: '$600'
    },
    {
        name: 'Table Centerpiece (Vases)',
        image: 'images/cups_centerpiece.jpg',
        description: 'These simple centerpieces complement a table very well.',
        tags: ['centerpiece', 'vase', 'flowers'],
        price: '$12/each'
    },
    {
        name: 'Floor Flower Decoration (Small)',
        image: 'images/floor_flowers_small.jpg',
        description: '',
        tags: ['floor', 'flowers', 'frame', 'decoration'],
        price: '$10/each'
    },
    {
        name: 'Floor Flower Decoration (Large)',
        image: 'images/floor_flowers_large.jpg',
        description: '',
        tags: ['floor', 'flowers', 'decoration'],
        price: '$15/each'
    },
    {
        name: "Couple's Table (with flowers)",
        image: 'images/overlaid_flowers_table.jpg',
        description: 'Includes flowers and tablecloth.',
        tags: ['table', 'flowers'],
        price: '$100'
    },
    {
        name: 'Table Centerpiece (Frame)',
        image: 'images/square_centerpiece.jpg',
        description: 'These simple centerpieces complement a table very well.',
        tags: ['centerpiece', 'frame', 'flowers'],
        price: '$10/each'
    },
    {
        name: 'Wedding Entrance',
        image: 'images/wedding_entrance.jpg',
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
                <img src="${item.image}">
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