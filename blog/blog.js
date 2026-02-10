
const books = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
        titleLabel: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
        titleLabel: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
        titleLabel: 'Belgariad Book One: Pawn of Prophecy',
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	},
    {
		id: 4,
		title: 'Fablehaven (Book One)',
        titleLabel: 'Fable Haven Book One',
		date: 'May 13, 2024',
		description:
			"If you like mystery, fantasy, and danger- you're in for a real treat.",
		imgSrc:
			'images/fablehaven.jpg',
		imgAlt: 'Book cover for Fable-haven: An old lady holding a knotted rope is sitting on a tree stump inside a shack. Colorful fairies hover outside the door.',
		ages: '8+',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	}
];
                

const bookList = document.querySelector('.book-list');

books.forEach(book => {
    const article = document.createElement('article');

    article.className = 'book';

    let html = `<nav class="review-info">
                    <p><span class="visually-hidden">Date posted: </span><i>${book.date}</i></p>
                    <p><span class="visually-hidden">Ages: </span>${book.ages}</p>
                    <p><span class="visually-hidden">Genre: </span>${book.genre}</p>
                    <p><span aria-label="Rating: ${book.stars.length}" role="img">${book.stars}</span></p>
                </nav>
                <nav class="book-info">
                    <h2 aria-label=${book.titleLabel}>${book.title}</h2>
                    <img src=${book.imgSrc} alt=${book.imgAlt}>
                    <p id='desc'>${book.description}</p>
                </nav>`;

    article.innerHTML = html;
    bookList.appendChild(article);
});