(function(){

	var app = angular.module('store', []);

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam ea! Sequi, nemo maiores culpa, inventore temporibus',
		canPurchase: false,
		soldOut: true
	}

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam ea! Sequi, nemo maiores culpa, inventore temporibus',
		images:[
			{
				full: 'public/img/gem-01.gif',
				thumb: 'public/img/gem-04.gif'
			}
		],
		reviews: [
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'},
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'}
		]
	},
	{
		name: 'Ruby',
		price: 3.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam ea! Sequi, nemo maiores culpa, inventore temporibus',
		images:[
			{
				full: 'public/img/gem-02.gif',
				thumb: 'public/img/gem-05.gif'
			}
		],
		reviews: [
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'},
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'}
		]
	},
	{
		name: 'Safiro',
		price: 6.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam ea! Sequi, nemo maiores culpa, inventore temporibus',
		images:[
			{
				full: 'public/img/gem-03.gif',
				thumb: 'public/img/gem-06.gif'
			}
		],
		reviews: [
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'},
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'}
		]
	}
	];

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	})

})();
