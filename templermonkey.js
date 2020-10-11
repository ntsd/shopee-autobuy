// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://shopee.co.th/%E2%9D%A4%EF%B8%8F%E0%B8%AB%E0%B8%A1%E0%B8%94%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%9B%E0%B8%B52022-omega-3-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%992%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2%E2%9D%A4%EF%B8%8FBlackmores-Omega-Daily-(60%E0%B9%80%E0%B8%A1%E0%B9%87%E0%B8%94)-%E0%B8%9C%E0%B8%AA%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%99-%E0%B8%AD%E0%B8%B5-%E0%B9%82%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%81%E0%B9%89%E0%B8%B23-%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%94%E0%B8%B2-2-%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2-i.2918381.951730968
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  var modelName = "Lunar Silver";

  function clickIt() {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent(
      "click",
      !0,
      !0,
      window,
      0,
      0,
      0,
      0,
      0,
      !1,
      !1,
      !1,
      !1,
      0,
      null
    );
    var success = chooseModelButton(e);
    if (success) {
      addToChartButton(e);
      checkoutButton(e);
      cashOnDeliveryButton(e);
      paymentButton(e);
    }
  }
  function chooseModelButton(e) {
    var models = document.evaluate(`//*[@id="main"]/div/div[2]/div[2]/div[2]/div[2]/div[3]/div/div[4]/div/div[4]/div/div[1]/div/button[contains(., '${modelName}')]`, document, null, XPathResult.ANY_TYPE, null );
    var modelButton = models.iterateNext();
    modelButton && modelButton.dispatchEvent(e);
    if (modelButton.classList.contains("product-variation--selected")) {
      return true;
    }
    return false;
  }
  function addToChartButton(e) {
    var t = document.querySelector(".btn.btn-solid-primary.btn--l.YtgjXY");
    t && t.dispatchEvent(e);
  }
  function checkoutButton(e) {
    var t = document.querySelector("div.cart-page-footer__checkout button");
    t && t.dispatchEvent(e);
  }
  function cashOnDeliveryButton(e) {
    var t = document.querySelector(
      "#main > div > div.shopee-page-wrapper > div.page-checkout.container > div.page-checkout__payment-order-wrapper > div.checkout-payment-method-view > div > div.checkout-payment-method-view__current.checkout-payment-setting > div.checkout-payment-setting__payment-methods-tab > span:nth-child(7) > button"
    );
    t && t.dispatchEvent(e);
  }
  function paymentButton(e) {
    var t = document.querySelector("div._3S63c5._1WpGLP button");
    t && t.dispatchEvent(e);
  }
  setInterval(clickIt, 100);
})();
