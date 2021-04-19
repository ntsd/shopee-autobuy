fetch("https://shopee.co.th/api/v2/checkout/place_order", {
  headers: {
    accept: "application/json",
    "accept-language": "en-US,en;q=0.9,th;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "if-none-match-": "55b03-e4d3c0f34c346cbbee77e2ad3c8b13d2",
    pragma: "no-cache",
    "sec-ch-ua":
      '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "QckOEOFpk2VRkwOnzIJpEMLb9aP0s6Gc",
    "x-cv-id": "103",
    "x-requested-with": "XMLHttpRequest",
    "x-shopee-language": "th",
    "x-track-id":
      "b6dcdd46991fe4f8a45ea4328617f60bca6168229c6765fe0c4b96bda5d530d5769fc69f8441f3e738c9dfd0973d8906fcb7e8a4a531e8815ed2c9c2b9878aee",
  },
  referrer:
    "https://shopee.co.th/checkout-page/?state=H8KLCAAAAAAAAAPDjVTDiW7DozAMw70Xwp1zcMO2w6VXwopAwpAlJhUqSx4tQcKCIsO%2FPsKkFsOHLVDDjFwGwpjCk2XCkiLDn3skw7XDicKiHiBEMcKMw6zCtMOcLQ%2FCh13Ctz4eFyzCvMK7w5F5BT7CsMOTw5tnw75lwqfDssOVCkNXw7tuwrnDmy%2FCnwvCpiMMJcKITsOkw5x3wpvDjcK6w5seD8OrBRvCnAJTwo3Dm259w5hsdsObBRNKcWfCuQJhODk7TBN4wrXChsOUc0rDhU4XYQLClArDvMOqXRpbw7DCryRsw5TDscKBQMKew6cFM8OuwqpDw5QyEEQPw5INA1gFworDi3dhLcOVR8KPTcOGIMOcPj3DgFMpDyFwJcKiwqBLUcOcwpvCjcKdGFsww7DDnnnCjsOCw4RULcOtSnzCjMKQQVQDQcOaLsKPwrvDo8OqwrjDh8O8AQzDiMKIwrUbwqgXCBLCocOrSFs9wo7Dml4zwpvDpcOsw4rDqMOhwoLChcOxRMKiw53DgD84wrXCh8K7MWoUwqbCksO%2FY3gwLsOmw6BMw7k8wr8hHsKoTGzCkCbDung3YMKFwozDpltMwoZ9w4zCuBsMe3FFwpIIw7dYfz%2FCn8OIfcO0bnA5wqYlTgHCuHTDmsKGwqnCmRcPwojCsClwc0nCvmM%2FasKSwp%2FCvMKFwrjDkkHDtAZpeBDCgcOQEsK%2Fwp8yShw8QknCsMKMwogXw6fCh8OmwqNpPcKXEcO%2FZsOCwqPDvMOgcwdHKcK8wrASXgxEworCjsKLcTTCjy%2FCkcOVwo%2FDtRTDnMK0woTCiVPDu1VFwrTDuntBwrDDoEfCr23CrGI6e1XDicOyw54Iw7nDkcK7e8KxwpZxbT3CmWktwoXCj8KvWcKURmd%2FEcKKwqbCuVXDj2dVwpXCmFTCmsKvw7bDg0p2woo%2Bw4FfLsOSw5vDuT9dwqPDtmQhdwV3w6rDmFt3blAxwoNNQ099IhjDv3zDpwrCkjTCojTDkyg8w6vChMK5FDERTUETbsOiwoLCj190URh2WsKtwrrDritPwpx%2Fw6kSwrbDuRU0dzcrw68BwqcdwqbDsFnCqj5ZZSDCv8K7YcOmL3tUXlhUa8Omw4E7A3jCkh5tMEd3w5jDlsKcw5RzwpxPw5rDjBxfw6TCjnfDiy9QwocTw6XDksO4wqAIT8O6w5UnwqJVw40GWsOWwrxSGlRzUDvCocK%2BHsK4w7EKYHg5C8ORwqnDrMK6w5vDj8OQYMOvwofCscOUw6jCnsOPw5%2FCn34tw6fDowYAAA%3D%3D",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: {
    status: 200,
    headers: {},
    cart_type: 0,
    shipping_orders: [
      {
        selected_logistic_channelid: 7000,
        cod_fee: 0,
        order_total: 30700000,
        shipping_id: 1,
        shopee_shipping_discount_id: 2090,
        selected_logistic_channelid_with_warning: null,
        shipping_fee_discount: 0,
        shipping_group_description: "",
        selected_preferred_delivery_time_option_id: 0,
        buyer_remark: "",
        buyer_address_data: {
          tax_address: "",
          error_status: "",
          address_type: 0,
          addressid: 51969297,
        },
        order_total_without_shipping: 28500000,
        tax_payable: 0,
        amount_detail: {
          BASIC_SHIPPING_FEE: 2200000,
          SELLER_ESTIMATED_INSURANCE_FEE: 0,
          SHOPEE_OR_SELLER_SHIPPING_DISCOUNT: -2200000,
          VOUCHER_DISCOUNT: 0,
          SHIPPING_DISCOUNT_BY_SELLER: 0,
          SELLER_ESTIMATED_BASIC_SHIPPING_FEE: 0,
          SHIPPING_DISCOUNT_BY_SHOPEE: 2200000,
          INSURANCE_FEE: 0,
          ITEM_TOTAL: 28500000,
          TAX_EXEMPTION: 0,
          shop_promo_only: true,
          COD_FEE: 0,
          TAX_FEE: 0,
          SELLER_ONLY_SHIPPING_DISCOUNT: 0,
        },
        buyer_ic_number: "",
        fulfillment_info: {
          fulfillment_flag: 64,
          fulfillment_source: "",
          managed_by_sbs: false,
          order_fulfillment_type: 2,
          warehouse_address_id: 0,
        },
        voucher_wallet_checking_channel_ids: [7000],
        shoporder_indexes: [0],
        shipping_fee: 2200000,
        tax_exemption: 0,
        shipping_group_icon: "",
      },
    ],
    disabled_checkout_info: {
      auto_popup: false,
      description: "",
      error_infos: [],
    },
    timestamp: 1618860399,
    checkout_price_data: {
      shipping_subtotal: 2200000,
      shipping_discount_subtotal: 0,
      shipping_subtotal_before_discount: 2200000,
      bundle_deals_discount: null,
      group_buy_discount: 0,
      merchandise_subtotal: 28500000,
      tax_payable: 0,
      buyer_txn_fee: 0,
      credit_card_promotion: null,
      promocode_applied: null,
      shopee_coins_redeemed: null,
      total_payable: 30700000,
      tax_exemption: 0,
    },
    client_id: 0,
    promotion_data: {
      promotion_msg: "",
      price_discount: 0,
      can_use_coins: true,
      voucher_info: {
        coin_earned: 0,
        promotionid: 0,
        discount_percentage: 0,
        discount_value: 0,
        voucher_code: null,
        reward_type: 0,
        coin_percentage: 0,
        used_price: 0,
      },
      coin_info: {
        coin_offset: 7200000,
        coin_earn: 2,
        coin_earn_by_voucher: 0,
        coin_used: 72,
      },
      free_shipping_voucher_info: {
        free_shipping_voucher_id: 0,
        disabled_reason: null,
        free_shipping_voucher_code: "",
      },
      applied_voucher_code: null,
      shop_voucher_entrances: [{ status: true, shopid: 12701671 }],
      card_promotion_enabled: false,
      invalid_message: null,
      card_promotion_id: null,
      voucher_code: null,
      use_coins: false,
    },
    dropshipping_info: null,
    selected_payment_channel_data: {
      version: 1,
      payment_channelid: 79000,
      option_info: "",
      text_info: {},
    },
    shoporders: [
      {
        shop: {
          remark_type: 0,
          support_ereceipt: false,
          images: "",
          is_official_shop: true,
          cb_option: false,
          shopid: 12701671,
          shop_name: "GSK Official Store",
        },
        buyer_remark: "",
        shipping_fee: 2200000,
        order_total: 30700000,
        shipping_id: 1,
        buyer_ic_number: "",
        items: [
          {
            itemid: 7044305983,
            is_add_on_sub_item: false,
            image: "f4b03e2efe1d213819b35e16ed71804e",
            shopid: 12701671,
            opc_extra_data: { slash_price_activity_id: 0 },
            promotion_id: 1242614553,
            add_on_deal_id: 0,
            modelid: 70450384465,
            offerid: 0,
            source: "",
            checkout: true,
            item_group_id: 0,
            service_by_shopee_flag: false,
            none_shippable_full_reason: "",
            price: 28500000,
            is_flash_sale: false,
            categories: [{ catids: [21732, 21747, 21752] }],
            shippable: true,
            name:
              "CENTRUM DIETARY SUPPLEMENT 30TABS เซนทรัม ผลิตภัณฑ์บำรุงสุขภาพ  30 เม็ด",
            none_shippable_reason: "",
            is_pre_order: false,
            stock: 0,
            model_name: "",
            quantity: 1,
          },
        ],
        selected_preferred_delivery_time_option_id: 0,
        selected_logistic_channelid: 7000,
        cod_fee: 0,
        tax_payable: 0,
        buyer_address_data: {
          tax_address: "",
          error_status: "",
          address_type: 0,
          addressid: 51969297,
        },
        shipping_fee_discount: 0,
        tax_info: {
          use_new_custom_tax_msg: false,
          custom_tax_msg: "",
          custom_tax_msg_short: "",
          remove_custom_tax_hint: false,
        },
        order_total_without_shipping: 28500000,
        tax_exemption: 0,
        amount_detail: {
          BASIC_SHIPPING_FEE: 2200000,
          COD_FEE: 0,
          SHOPEE_OR_SELLER_SHIPPING_DISCOUNT: -2200000,
          VOUCHER_DISCOUNT: 0,
          SHIPPING_DISCOUNT_BY_SELLER: 0,
          SELLER_ESTIMATED_INSURANCE_FEE: 0,
          SELLER_ESTIMATED_BASIC_SHIPPING_FEE: 0,
          SHIPPING_DISCOUNT_BY_SHOPEE: 2200000,
          INSURANCE_FEE: 0,
          ITEM_TOTAL: 28500000,
          TAX_EXEMPTION: 0,
          shop_promo_only: true,
          TAX_FEE: 0,
          SELLER_ONLY_SHIPPING_DISCOUNT: 0,
        },
        ext_ad_info_mappings: [],
      },
    ],
    can_checkout: true,
    order_update_info: {},
    buyer_txn_fee_info: {},
    captcha_version: 1,
  },
  method: "POST",
  mode: "cors",
  credentials: "include",
});