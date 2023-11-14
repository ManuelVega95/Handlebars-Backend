import express from 'express';
import {ProductManager} from './ProductManager.js';
import { CartManager } from './CartManager.js';
import { productsRouter } from './Routes/Products.Router.js';
import { cartsRouter } from './Routes/Carts.Router.js';
import {engine} from "express-handlebars";

const app = express();
const PORT = 4000;

export const ProductManager = new ProductManager;
export const CartManager = new CartManager;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

app.engine("handlebars",  engine());
app.set("views engine", "handlebars")


app.listen(PORT, (req, res) => {
    console.log(`Conectado al puerto ${PORT}!`);
})