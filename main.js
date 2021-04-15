async function checkout(csrfToken, shopId, itemId, modelId = undefined, item) {
  const secondTimestamp = Math.floor(Date.now() / 1000);
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
      "x-csrftoken": csrfToken,
      "x-requested-with": "XMLHttpRequest",
      "x-shopee-language": "th",
    },
    referrer: "https://shopee.co.th/cart/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify({
      free_shipping_voucher_info: {
        free_shipping_voucher_id: 0,
      },
      selected_shop_order_ids: [
        {
          shopid: shopId,
          item_briefs: [
            // item,
            {
              "add_on_deal_id": null,
              "applied_promotion_id": 0,
              "cart_item_change_time": secondTimestamp,
              "is_add_on_sub_item": null,
              "item_group_id": null,
              "itemid": itemId,
              "modelid": modelId,
              "offerid": null,
              "price": null,
              "quantity": 1,
              "status": 1
            },
          ],
          shop_vouchers: [],
        },
      ],
      platform_vouchers: [],
      support_problematic_groups: true,
      use_coins: false,
    }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  return res.json();
}

async function selectOnCart(csrfToken, shopId, itemId, modelId = undefined) {
  const secondTimestamp = Math.floor(Date.now() / 1000);
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
      "x-csrftoken": csrfToken,
      "x-requested-with": "XMLHttpRequest",
      "x-shopee-language": "th",
    },
    referrer: "https://shopee.co.th/cart/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify({
      action_type: 4,
      updated_shop_order_ids: [
        {
          shopid: shopId,
          item_briefs: [
            {
              shopid: shopId,
              itemid: itemId,
              modelid: modelId,
              item_group_id: null,
              add_on_deal_id: null,
              is_add_on_sub_item: null,
              quantity: 1,
              old_modelid: null,
              old_quantity: 1,
              checkout: true,
              applied_promotion_id: 2011822980,
              price: 13900000,
            },
          ],
        },
      ],
      selected_shop_order_ids: [
        {
          shopid: shopId,
          item_briefs: [
            {
              itemid: itemId,
              modelid: modelId,
              item_group_id: null,
              applied_promotion_id: 2011822980,
              offerid: null,
              price: 13900000,
              quantity: 1,
              is_add_on_sub_item: null,
              add_on_deal_id: null,
              status: 1,
              cart_item_change_time: secondTimestamp,
            },
          ],
          addin_time: secondTimestamp,
          auto_apply: true,
          shop_vouchers: [],
        },
      ],
      promotion_data: {
        use_coins: false,
        platform_vouchers: [],
        free_shipping_voucher_info: null,
      },
      pre_select: false,
    }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  return res.json();
}

async function addToCart(csrfToken, shopId, itemId, modelId = undefined) {
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
      "x-csrftoken": csrfToken,
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

async function getCart(csrfToken) {
  const res = await fetch("https://shopee.co.th/api/v4/cart/get", {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9,th;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "if-none-match-": "55b03-1b0fd928d8c948f4ab007af348d7551d",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-api-source": "pc",
      "x-csrftoken": csrfToken,
      "x-requested-with": "XMLHttpRequest",
      "x-shopee-language": "th",
    },
    referrer: "https://shopee.co.th/cart",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: '{"pre_selected_item_list":[]}',
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  return res.json();
}

var csrfToken = "QckOEOFpk2VRkwOnzIJpEMLb9aP0s6Gc";
var shopId = 74183478;
var itemId = 7029178229;
var modelId = 17196418028;

addToCart(csrfToken, shopId, itemId, modelId).then((data) => {
  console.log(data);
  if (data.error == 0) {
    console.log(`successful add ${itemId} to chart`);
    getCart(csrfToken).then((data) => {
      console.log(data);
      checkout(
        csrfToken,
        shopId,
        itemId,
        modelId,
        data.data.shop_order_id_list[0].item_briefs[0]
      ).then((data) => {
        console.log(data);
        if (data.error == 0) {
          console.log(`checkout success`);
        }
      });
    });
  }
});
