/*
Generare un array di 10 gatti con nome, sesso ed età
Stampare le informazioni dei gatti in una lista con i maschi in blu e le femmine in rosso dando opacità massima (1) al gatto più vecchio e agli altri opacità minore in proporzione.
*/

const arrCats = [
	{
		name: 'gatto 0',
		age: 5,
		sex: 'm'
	},
	{
		name: 'gatto 1',
		age: 10,
		sex: 'f'
	},
	{
		name: 'gatto 2',
		age: 15,
		sex: 'f'
	},
	{
		name: 'gatto 3',
		age: 13,
		sex: 'f'
	},
	{
		name: 'gatto 4',
		age: 13,
		sex: 'm'
	},
	{
		name: 'gatto 5',
		age: 5,
		sex: 'm'
	},
	{
		name: 'gatto 6',
		age: 1,
		sex: 'f'
	},
	{
		name: 'gatto 7',
		age: 7,
		sex: 'm'
	},
	{
		name: 'gatto 8',
		age: 3,
		sex: 'm'
	},
	{
		name: 'gatto 9',
		age: 2,
		sex: 'f'
	},
];
const eleContainer = document.querySelector('.container');

maxAge = Math.max(...arrCats.map(cat => cat.age)); // esplodo l'array per passare i suoi elementi come argomenti della funzione

arrCats.forEach(cat => {
	// proporzione per l'opacità
	// opacity : età = 1 : maxAge
	// opacity = (età * 1) / maxAge = età / maxAge
	const opacity = cat.age / maxAge;
	const eleCat = document.createElement('li');
	eleCat.style.backgroundColor = cat.sex == 'm' ? 'blue' : 'red';
	eleCat.style.opacity = opacity;
	eleCat.innerHTML = `
		<span>${cat.name}</span> - Età: <span>${cat.age}</span> - Opacity: <span>${opacity}</span>
	`;
	eleContainer.append(eleCat);
});
