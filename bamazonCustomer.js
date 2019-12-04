var mysql = require("mysql");
var inquirer = ("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db",
});
connection.connect();

var display = function () {
    connection.query("SELECT * FROM product", function (err, res) {
        if (err) throw err;
        console.log("-----------------");
        console.log("      Welcome to Bamazon");
        console.log("-----------------");
        console.log("-----------------");
        console.log("-----------------");
        console.log("      Find your product Below ");
        console.log("-----------------");

    });
    var table = new Table({
        head: ['product id', 'product description', 'cost']
        , colWidths: [12, 50, 8],
        colAligns: ['center', 'left', 'right'],
        style: {
            head: ['aqua'],
            compact: true
        }
    });
    for (var i = 0; i < res, length; i++) {
        table.push([res[i].id, res[i].products_name, res[i].price]);
    }

    console.log(table.toString());
    console.log("");
};
display();





