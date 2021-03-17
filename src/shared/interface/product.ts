export interface Product {
  accepts_mercadopago: boolean
  address: {
    state_id: string
    state_name: string
    city_id: string
    city_name: string
  }
  attributes: Array<Object>
  available_quantity: number
  buying_mode: string
  catalog_listing: boolean
  catalog_product_id: string
  category_id: string
  condition: string
  currency_id: string
  domain_id: string
  id: string
  installments: Object
  listing_type_id: string
  official_store_id: null
  order_backend: number
  original_price: null
  permalink: string
  price: number
  prices: Object,
  sale_price: null
  seller: Object
  seller_address: Object
  shipping: {
    free_shipping: boolean
    logistic_type: string
    mode: string
    store_pick_up: false
    tags: Array<string>
  }
  site_id: string
  sold_quantity: number
  stop_time: string
  tags: Array<string>
  thumbnail: string
  thumbnail_id: string
  title: string
  use_thumbnail_id: boolean
}