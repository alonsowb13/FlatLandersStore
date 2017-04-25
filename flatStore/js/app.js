(function(){

	var app = angular.module('store', []);

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam ea! Sequi, nemo maiores culpa, inventore temporibus',
		canPurchase: false,
		soldOut: true
	}

	app.controller('StoreController', function(){
		this.product = gem;
	});

})();
