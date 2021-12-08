export class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.itemIdIncart = [];
        this.totalQty = 0;
    }
    //clear cart product
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.itemIdIncart = [];
        this.totalQty = 0;
    }

    //add product
    addItem(p) {
        if (!this.itemIdIncart.includes(p.id)) {
            this.itemIdIncart.push(p.id);
            this.items.push({ product: p, qty: 0 })
        }
        this.totalPrice = 0;
        this.totalQty = 0;
        this.items.forEach((pc) => {
            pc.product.id == p.id ? pc.qty++ : pc.qty;
            this.totalPrice += pc.product.price * pc.qty;
            this.totalQty += pc.qty;
        })
    }
    static toCart(obj) {
        let cart = new Cart();
        cart.items = obj.items;
        cart.totalPrice = obj.totalPrice;
        cart.itemIdIncart = obj.itemIdIncart;
        cart.totalQty = obj.totalQty;
        return cart;
    }
}