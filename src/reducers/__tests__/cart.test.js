import reducer from '../cart'

describe('cart reducer', () => {

  const initialState = {
    open: false,
    items: [] // array of product ids
  };

  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  it('should handle CART_ADD', () => {
    expect(
      reducer(initialState, {
        type: 'CART_ADD',
        payload: { productId: 1 }
      })
    ).toEqual(
      {
        open: false,
        items: [{ id: 1, quantity: 1}]
      }
    )
  })

  const secondState = {
    open: false,
    items: [{ id: 1, quantity: 1}]
  }

  it('should increment quantity for exisiting CART_ADD', () => {
    expect(
      reducer(secondState, {
        type: 'CART_ADD',
        payload: { productId: 1 }
      })
    ).toEqual(
      {
        open: false,
        items: [{ id: 1, quantity: 2}]
      }
    )
  })

  it('should handle CART_REMOVE', () => {
    expect(
      reducer(secondState, {
        type: 'CART_REMOVE',
        payload: { productId: 1 }
      })
    ).toEqual(
      {
        open: false,
        items: []
      }
    )
  })

  const thirdState = {
    open: false,
    items: [{ id: 1, quantity: 1}, { id: 2, quantity: 1}]
  }

  it('should handle CART_CLEAR', () => {
    expect(
      reducer(thirdState, {
        type: 'CART_CLEAR'
      })
    ).toEqual(
      {
        open: false,
        items: []
      }
    )
  })

  it('should handle CART_TOGGLE', () => {
    expect(
      reducer(thirdState, {
        type: 'CART_TOGGLE'
      })
    ).toEqual(
      {
        open: true,
        items: [{ id: 1, quantity: 1}, { id: 2, quantity: 1}]
      }
    )
  })
})
