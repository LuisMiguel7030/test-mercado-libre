export const mockProductsData = [
  {
    id: 'M001',
    title: 'bmw sport',
    image: 'www.mock.com',
    address: {
      cityName: 'Mataderos',
      stateName: 'Capital Federal'
    },
    condition: 'new',
    price: {
      amount: 80000,
      decimals: 0,
      currency: 'COP'
    },
    freeShipping: false,
  },
  {
    id: 'M002',
    title: 'Carro Multiuso',
    image: 'www.mock.com',
    address: {
      cityName: 'Mataderos',
      stateName: 'Capital Federal'
    },
    condition: 'new',
    price: {
      amount: 50000,
      decimals: 0,
      currency: 'COP'
    },
    freeShipping: true
  }
];

export const mockSearchDataApi = {
  data: {
    "site_id": "MLA",
    "query": "carro",
    "paging": {
        "total": 697899,
        "primary_results": 1000,
        "offset": 0,
        "limit": 4
    },
    "results": [
        {
            "id": "MLA912601780",
            "site_id": "MLA",
            "title": "Hidrolavadora Philco Mjphi127 De 1600w Con 135bar De Presión Máxima 220v",
            "seller": {
                "id": 323911615,
                "permalink": "http://perfil.mercadolibre.com.ar/FERRETERIA+FORTE_INDUSTRIAL",
                "registration_date": "2018-05-24T13:05:26.000-04:00",
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": [
                    "normal",
                    "user_info_verified",
                    "messages_as_seller",
                    "messages_as_buyer"
                ],
                "seller_reputation": {
                    "transactions": {
                        "total": 2073,
                        "canceled": 147,
                        "period": "historic",
                        "ratings": {
                            "negative": 0.06,
                            "positive": 0.9,
                            "neutral": 0.04
                        },
                        "completed": 1926
                    },
                    "power_seller_status": "gold",
                    "metrics": {
                        "claims": {
                            "rate": 0,
                            "value": 2,
                            "period": "60 days"
                        },
                        "delayed_handling_time": {
                            "rate": 0,
                            "value": 0,
                            "period": "60 days"
                        },
                        "sales": {
                            "period": "60 days",
                            "completed": 150
                        },
                        "cancellations": {
                            "rate": 0,
                            "value": 0,
                            "period": "60 days"
                        }
                    },
                    "level_id": "5_green"
                }
            },
            "price": 16199,
            "prices": {
                "id": "MLA912601780",
                "prices": [
                    {
                        "id": "2",
                        "type": "standard",
                        "conditions": {
                            "context_restrictions": [],
                            "start_time": null,
                            "end_time": null,
                            "eligible": true
                        },
                        "amount": 16199,
                        "regular_amount": null,
                        "currency_id": "ARS",
                        "exchange_rate_context": "DEFAULT",
                        "metadata": {},
                        "last_updated": "2021-03-19T15:41:04Z"
                    }
                ],
                "presentation": {
                    "display_currency": "ARS"
                },
                "payment_method_prices": []
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 50,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2041-03-14T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/hidrolavadora-philco-mjphi127-de-1600w-con-135bar-de-presion-maxima-220v/p/MLA15378257",
            "thumbnail": "http://http2.mlstatic.com/D_684624-MLA40450270150_012020-I.jpg",
            "thumbnail_id": "684624-MLA40450270150_012020",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 9,
                "amount": 1799.89,
                "rate": 0,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlZJTDQyMjBa",
                "city_name": "Villa Crespo"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "self_service_in",
                    "mandatory_free_shipping"
                ],
                "logistic_type": "xd_drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlZJTDQyMjBa",
                    "name": "Villa Crespo"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "BRAND",
                    "name": "Marca",
                    "value_id": "479",
                    "value_name": "Philco",
                    "values": [
                        {
                            "source": 1,
                            "id": "479",
                            "name": "Philco",
                            "struct": null
                        }
                    ],
                    "value_struct": null,
                    "attribute_group_id": "OTHERS"
                },
                {
                    "attribute_group_id": "OTHERS",
                    "id": "HOSE_LENGTH",
                    "name": "Largo de la manguera",
                    "value_name": "4 m",
                    "value_struct": {
                        "number": 4,
                        "unit": "m"
                    },
                    "values": [
                        {
                            "id": "7917348",
                            "name": "4 m",
                            "struct": {
                                "number": 4,
                                "unit": "m"
                            },
                            "source": 1
                        }
                    ],
                    "value_id": "7917348",
                    "attribute_group_name": "Otros",
                    "source": 1
                },
                {
                    "value_name": "Nuevo",
                    "value_id": "2230284",
                    "name": "Condición del ítem",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Nuevo",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "ITEM_CONDITION"
                },
                {
                    "value_id": "3542542",
                    "value_name": "MJPHI127",
                    "values": [
                        {
                            "id": "3542542",
                            "name": "MJPHI127",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo",
                    "value_struct": null,
                    "attribute_group_id": "OTHERS",
                    "id": "MODEL"
                },
                {
                    "value_name": "6.5 kg",
                    "values": [
                        {
                            "id": "7485358",
                            "name": "6.5 kg",
                            "struct": {
                                "number": 6.5,
                                "unit": "kg"
                            },
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Peso de la hidrolavadora",
                    "value_id": "7485358",
                    "id": "PRESSURE_WASHERS_WEIGHT",
                    "value_struct": {
                        "number": 6.5,
                        "unit": "kg"
                    }
                }
            ],
            "differential_pricing": {
                "id": 33678187
            },
            "original_price": null,
            "category_id": "MLA30840",
            "official_store_id": null,
            "domain_id": "MLA-ELECTRIC_PRESSURE_WASHERS",
            "catalog_product_id": "MLA15378257",
            "tags": [
                "brand_verified",
                "extended_warranty_eligible",
                "good_quality_picture",
                "loyalty_discount_eligible",
                "immediate_payment",
                "cart_eligible",
                "shipping_guaranteed"
            ],
            "catalog_listing": true,
            "use_thumbnail_id": true,
            "order_backend": 1
        }
    ],
    "secondary_results": [],
    "related_results": [],
    "sort": {
        "id": "relevance",
        "name": "Más relevantes"
    },
    "available_sorts": [
        {
            "id": "price_asc",
            "name": "Menor precio"
        },
        {
            "id": "price_desc",
            "name": "Mayor precio"
        }
    ],
    "filters": [],
    "available_filters": [
        {
            "id": "official_store",
            "name": "Tiendas oficiales",
            "type": "text",
            "values": [
                {
                    "id": "all",
                    "name": "Todas las tiendas oficiales",
                    "results": 28428
                },
                {
                    "id": "1372",
                    "name": "Mall 360",
                    "results": 1
                },
                {
                    "id": "1708",
                    "name": "Wolke",
                    "results": 1
                },
                {
                    "id": "1766",
                    "name": "UNIT",
                    "results": 1
                },
                {
                    "id": "1783",
                    "name": "Karcher",
                    "results": 1
                },
                {
                    "id": "1825",
                    "name": "Klatter",
                    "results": 1
                },
                {
                    "id": "1829",
                    "name": "Begonia",
                    "results": 1
                },
                {
                    "id": "2068",
                    "name": "Exahome",
                    "results": 1
                },
                {
                    "id": "245",
                    "name": "Pinturerias MM",
                    "results": 1
                }
            ]
        },
        {
            "id": "discount",
            "name": "Descuentos",
            "type": "range",
            "values": [
                {
                    "id": "5-100",
                    "name": "Desde 5% OFF",
                    "results": 9395
                },
                {
                    "id": "10-100",
                    "name": "Desde 10% OFF",
                    "results": 8130
                },
                {
                    "id": "15-100",
                    "name": "Desde 15% OFF",
                    "results": 5890
                },
                {
                    "id": "20-100",
                    "name": "Desde 20% OFF",
                    "results": 4769
                },
                {
                    "id": "25-100",
                    "name": "Desde 25% OFF",
                    "results": 2244
                },
                {
                    "id": "30-100",
                    "name": "Desde 30% OFF",
                    "results": 1683
                }
            ]
        }
    ]
  }
}