import { createSelector } from 'reselect'

const selectShopData = (state) => state.shop

export const selectShopDataDetails = createSelector(
    [selectShopData],
    (shop) => (shop.collection)
)

