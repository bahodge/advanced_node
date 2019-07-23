var CatalogItem = require("./CatalogItem");
var CatalogGroup = require("./CatalogGroup");

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);
var carrots = new CatalogItem("Carrots", 5.95);
var bread = new CatalogItem("Bread", 3.85);

var groupShoes = new CatalogGroup("Shoes", [boots, sneakers, flipFlops]);
var groupFood = new CatalogGroup("Food", [carrots, bread]);

var catalog = new CatalogGroup("Food and Shoes", [groupFood, groupShoes]);

catalog.print();
