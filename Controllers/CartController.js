const Cart = require('../Models/Cart')
const asyncHandler = require('express-async-handler');
const ApiError = require('../Shared/ApiError');
class CartController{
static createCart = asyncHandler(async (req, res, next) => {
})

static getAllCarts = asyncHandler(async (req, res, next) => {
})

static getCartById = asyncHandler(async (req, res, next) => {
})

static updateCart = asyncHandler(async (req, res, next) => {
})


static deleteCart = asyncHandler(async (req, res, next) => {
})
static removeSpecificCartItem = asyncHandler(async (req, res, next) => {
})
static getLoggedUserCart = asyncHandler(async (req, res, next) => {
})
static addProductToCart = asyncHandler(async (req, res, next) => {
})
static updateCartItemQuantity = asyncHandler(async (req, res, next) => {
})
static  clearCart= asyncHandler(async (req, res, next) => {
})
static  applyCoupon = asyncHandler(async (req, res, next) => {
})

}

module.exports={CartController}