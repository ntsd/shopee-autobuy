fetch("https://shopee.co.th/api/v4/cart/update", {
  headers: {
    accept: "application/json",
    "accept-language": "en-US,en;q=0.9,th;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "if-none-match-": "55b03-f8e855556fa1a7390d0c9c3d8ac7a4cb",
    pragma: "no-cache",
    "sec-ch-ua":
      '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "QckOEOFpk2VRkwOnzIJpEMLb9aP0s6Gc",
    "x-requested-with": "XMLHttpRequest",
    "x-shopee-language": "th",
    cookie:
      'SPC_IA=-1; SPC_F=JlTxo6G6tty02LNM7OY0J5UfHdvIUvsB; REC_T_ID=75a7945e-eece-11ea-b199-1409dcf030d3; language=th; G_ENABLED_IDPS=google; SPC_CLIENTID=JlTxo6G6tty02LNMuduaeemwnaoyghqj; _gcl_au=1.1.2021571123.1615584796; SPC_U=70761880; SPC_EC=T9gA6XwJhSiAJzlJYlHleR14w9MHB2T+R5lxreNZ2HhGYKgJ9bDdPcETNcVmqTNFqFIB3PrI1s1aapYCUti1ITnUye5YGmqb+uLT+An7umflge2wyqnJm8wXzjYewP1xPkbvCbH/Xza02plIqTUypg==; _med=cpc; _gcl_aw=GCL.1617918334.CjwKCAjw07qDBhBxEiwA6pPbHg-a41gXklemWdlnTiMaWQkUSgL9WAUeeap__ycM6FlZMJ8hSKxE6BoC_ToQAvD_BwE; _gac_UA-61914165-6=1.1617918336.CjwKCAjw07qDBhBxEiwA6pPbHg-a41gXklemWdlnTiMaWQkUSgL9WAUeeap__ycM6FlZMJ8hSKxE6BoC_ToQAvD_BwE; csrftoken=QckOEOFpk2VRkwOnzIJpEMLb9aP0s6Gc; welcomePkgShown=true; _gid=GA1.3.1073057130.1618463538; SPC_SI=mall.C0URZ90omuqdc189UDrvJe0H7awhRcqb; AMP_TOKEN=%24NOT_FOUND; _dc_gtm_UA-61914165-6=1; _ga=GA1.3.1141774595.1599238110; REC_MD_36=1618470097; _ga_L4QXS6R7YG=GS1.1.1618468900.47.1.1618469515.39; SPC_R_T_ID="uFBGQD1zWlc2+Lr1i8NjBGvgCbFJpGrl4pOyUPcRlID7wdPNFRroYoaFtC7ugGadKyyvr35x/JFgoCBZonfxb4Ap6Qwu2sbbO1wO6FyPQbQ="; SPC_T_IV="NrBNi2FXuZTfoT/J5vd+QA=="; SPC_R_T_IV="NrBNi2FXuZTfoT/J5vd+QA=="; SPC_T_ID="uFBGQD1zWlc2+Lr1i8NjBGvgCbFJpGrl4pOyUPcRlID7wdPNFRroYoaFtC7ugGadKyyvr35x/JFgoCBZonfxb4Ap6Qwu2sbbO1wO6FyPQbQ="',
  },
  referrer:
    "https://shopee.co.th/cart?itemKeys=4036620219.32140026750.&shopId=59894103",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: {
    action_type: 4,
    updated_shop_order_ids: [
      {
        shopid: 59894103,
        item_briefs: [
          {
            shopid: 59894103,
            itemid: 4036620219,
            modelid: 32140026750,
            item_group_id: null,
            add_on_deal_id: null,
            is_add_on_sub_item: null,
            quantity: 1,
            old_modelid: null,
            old_quantity: 1,
            checkout: true,
            applied_promotion_id: 1240549479,
            price: 99000000,
          },
        ],
      },
    ],
    selected_shop_order_ids: [
      {
        shopid: 59894103,
        item_briefs: [
          {
            itemid: 4036620219,
            modelid: 32140026750,
            item_group_id: null,
            applied_promotion_id: 1240549479,
            offerid: null,
            price: 99000000,
            quantity: 1,
            is_add_on_sub_item: null,
            add_on_deal_id: null,
            status: 1,
            cart_item_change_time: 1618469514,
          },
        ],
        addin_time: 1618469514,
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
  },
  method: "POST",
  mode: "cors",
});
