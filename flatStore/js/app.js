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

})();
