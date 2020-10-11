async function checkout(shopId, itemId, modelId=undefined) {
  const res = await fetch("https://shopee.co.th/api/v4/cart/checkout", {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9,th;q=0.8",
      "content-type": "application/json",
      // "if-none-match-": "55b03-92f4809d919ea19870095c2c7f96af5f",
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
    body: JSON.stringify({
      selected_shop_order_ids: [
        {
          shopid: shopId,
          item_briefs: [
            {
              itemid: itemId,
              modelid: modelId,
              item_group_id: null,
              offerid: null,
              price: 49500000,
              quantity: 1,
              is_add_on_sub_item: null,
              add_on_deal_id: null,
              status: 1,
              cart_item_change_time: 1602433606,
            },
          ],
          shop_vouchers: {},
        },
      ],
      platform_vouchers: {},
    }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });  
  return res.json();
}

async function selectOnChart(shopId, itemId, modelId=undefined) {
  const res = await fetch("https://shopee.co.th/api/v4/cart/update", {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9,th;q=0.8",
      "content-type": "application/json",
      // "if-none-match-": "55b03-c654b927a45dab619f467b043e990d1c",
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
    body: JSON.stringify({
      action_type: 0,
      updated_shop_order_ids: {},
      selected_shop_order_ids: [
        {
          shopid: shopId,
          item_briefs: [
            {
              itemid: itemId,
              modelid: modelId,
              item_group_id: null,
              offerid: null,
              price: 55500000,//49500000,
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
    }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  return res.json();
}

async function addToChart(shopId, itemId, modelId=undefined) {
  const res = await fetch("https://shopee.co.th/api/v2/cart/add_to_cart", {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9,th;q=0.8",
      "content-type": "application/json",
      // "if-none-match-": idNoneMatch || "55b03-9639fe3082271ff59759ec1060114fd9",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-api-source": "pc",
      "x-csrftoken": "aIq72kUPAS46IHorw5xlA5378AZ7pH7A",
      "x-requested-with": "XMLHttpRequest",
      "x-shopee-language": "th",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify({
      quantity: 1,
      checkout: true,
      update_checkout_only: false,
      donot_add_quantity: false,
      source: '{"refer_urls":[]}',
      client_source: 1,
      shopid: shopId,
      itemid: itemId,
      modelid: modelId,
    }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  return res.json();
}
// addToChart("55b03-7282e688569e4e3b7d298624ad9c1107", 28710029, 7755087589, 41223283528);
var shopId = 2918381;
var itemId = 951730968;
var modelId = undefined;
addToChart(shopId, itemId, modelId).then((data) => {
  if (data.error == 0) {
    console.log(`successful add ${itemId} to chart`)
    checkout(shopId, itemId, modelId).then((data) => {
      console.log(data);
    })
  }
});