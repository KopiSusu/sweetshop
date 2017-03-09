export function addToCart(productId) {
    return {
        type: 'CART_ADD',
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: 'CART_REMOVE',
        payload: {
            productId
        }
    }
}

export function clearCart(productId) {
    return {
        type: 'CART_CLEAR'
    }
}

export function toggleCart() {
    return {
        type: 'CART_TOGGLE'
    }
}