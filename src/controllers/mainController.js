const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = require('../utils/toThousand')
const toDiscount = require('../utils/toDiscount')

const controller = {
	index: (req, res) => {
		return res.render('index',{
			visited : products.filter(product => product.category === 'visited'),
			products,
			toThousand,
			toDiscount
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
