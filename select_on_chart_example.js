fetch("https://shopee.co.th/api/v4/cart/update", {
  headers: {
    accept: "application/json",
    "accept-language": "en-US,en;q=0.9,th;q=0.8",
    "content-type": "application/json",
    "if-none-match-": "55b03-c654b927a45dab619f467b043e990d1c",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "aIq72kUPAS46IHorw5xlA5378AZ7pH7A",
    "x-requested-with": "XMLHttpRequest",
    "x-shopee-language": "th",
  },
  referrer: "https://shopee.co.th/cart/",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: {
    action_type: 0,
    updated_shop_order_ids: {},
    selected_shop_order_ids: [
      {
        shopid: 2918381,
        item_briefs: [
          {
            itemid: 951730968,
            modelid: null,
            item_group_id: null,
            offerid: null,
            price: 49500000,
            quantity: 1,
            is_add_on_sub_item: null,
            add_on_deal_id: null,
            status: 1,
            cart_item_change_time: 1602433091,
          },
        ],
        addin_time: 1602433091,
        auto_apply: true,
        shop_vouchers: {},
      },
    ],
    promotion_data: {
      use_coins: false,
      platform_vouchers: {},
      free_shipping_voucher_info: {
        free_shipping_voucher_id: 0,
      },
    },
  },
  method: "POST",
  mode: "cors",
  credentials: "include",
});
