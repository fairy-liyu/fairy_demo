<template>
  <div class="icon_box">
    <div>
      <fairy-title :text="'iconfont图标'" :icon="'icon-product'"></fairy-title>
    </div>
    <br />
    <div class="font-class">
      <ul class="iconlist icon-ul">
        <li
          class="icon-li"
          v-for="(icon, index) in iconData"
          :key="index"
          title="单击复制"
          @click="copyIcon(icon)"
        >
          <span :class="['icon', 'iconfont', icon.icon]"></span>
          <div class="name">{{ icon.name }}</div>
          <div class="code-name">.{{ icon.icon }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "iconfont",
  data() {
    return {
      iconData: [
        {
          name: "all",
          icon: "icon-all",
        },
        {
          name: "bussiness-man",
          icon: "icon-bussiness-man",
        },
        {
          name: "component",
          icon: "icon-component",
        },
        {
          name: "code",
          icon: "icon-code",
        },
        {
          name: "copy",
          icon: "icon-copy",
        },
        {
          name: "dollar",
          icon: "icon-dollar",
        },
        {
          name: "history",
          icon: "icon-history",
        },
        {
          name: "editor",
          icon: "icon-editor",
        },
        {
          name: "data",
          icon: "icon-data",
        },
        {
          name: "gift",
          icon: "icon-gift",
        },
        {
          name: "integral",
          icon: "icon-integral",
        },
        {
          name: "nav-list",
          icon: "icon-nav-list",
        },
        {
          name: "pic",
          icon: "icon-pic",
        },
        {
          name: "Notvisible",
          icon: "icon-Notvisible",
        },
        {
          name: "play",
          icon: "icon-play",
        },
        {
          name: "rising",
          icon: "icon-rising",
        },
        {
          name: "QRcode",
          icon: "icon-QRcode",
        },
        {
          name: "rmb",
          icon: "icon-rmb",
        },
        {
          name: "similar-product",
          icon: "icon-similar-product",
        },
        {
          name: "Exportservices",
          icon: "icon-Exportservices",
        },
        {
          name: "sendinquiry",
          icon: "icon-sendinquiry",
        },
        {
          name: "all-fill",
          icon: "icon-all-fill",
        },
        {
          name: "favorites-fill",
          icon: "icon-favorites-fill",
        },
        {
          name: "integral-fill",
          icon: "icon-integral-fill",
        },
        {
          name: "namecard-fill",
          icon: "icon-namecard-fill",
        },
        {
          name: "pic-fill",
          icon: "icon-pic-fill",
        },
        {
          name: "play-fill",
          icon: "icon-play-fill",
        },
        {
          name: "prompt-fill",
          icon: "icon-prompt-fill",
        },
        {
          name: "stop-fill",
          icon: "icon-stop-fill",
        },
        {
          name: "column",
          icon: "icon-column",
        },
        {
          name: "add-account",
          icon: "icon-add-account",
        },
        {
          name: "column1",
          icon: "icon-column1",
        },
        {
          name: "add",
          icon: "icon-add",
        },
        {
          name: "agriculture",
          icon: "icon-agriculture",
        },
        {
          name: "years",
          icon: "icon-years",
        },
        {
          name: "add-cart",
          icon: "icon-add-cart",
        },
        {
          name: "arrow-right",
          icon: "icon-arrow-right",
        },
        {
          name: "arrow-left",
          icon: "icon-arrow-left",
        },
        {
          name: "apparel",
          icon: "icon-apparel",
        },
        {
          name: "all1",
          icon: "icon-all1",
        },
        {
          name: "arrow-up",
          icon: "icon-arrow-up",
        },
        {
          name: "ascending",
          icon: "icon-ascending",
        },
        {
          name: "ashbin",
          icon: "icon-ashbin",
        },
        {
          name: "atm",
          icon: "icon-atm",
        },
        {
          name: "bad",
          icon: "icon-bad",
        },
        {
          name: "attachent",
          icon: "icon-attachent",
        },
        {
          name: "browse",
          icon: "icon-browse",
        },
        {
          name: "beauty",
          icon: "icon-beauty",
        },
        {
          name: "atm-away",
          icon: "icon-atm-away",
        },
        {
          name: "assessed-badge",
          icon: "icon-assessed-badge",
        },
        {
          name: "auto",
          icon: "icon-auto",
        },
        {
          name: "bags",
          icon: "icon-bags",
        },
        {
          name: "calendar",
          icon: "icon-calendar",
        },
        {
          name: "cart-full",
          icon: "icon-cart-full",
        },
        {
          name: "calculator",
          icon: "icon-calculator",
        },
        {
          name: "cameraswitching",
          icon: "icon-cameraswitching",
        },
        {
          name: "cecurity-protection",
          icon: "icon-cecurity-protection",
        },
        {
          name: "category",
          icon: "icon-category",
        },
        {
          name: "close",
          icon: "icon-close",
        },
        {
          name: "certified-supplier",
          icon: "icon-certified-supplier",
        },
        {
          name: "cart-Empty",
          icon: "icon-cart-Empty",
        },
        {
          name: "code1",
          icon: "icon-code1",
        },
        {
          name: "color",
          icon: "icon-color",
        },
        {
          name: "conditions",
          icon: "icon-conditions",
        },
        {
          name: "confirm",
          icon: "icon-confirm",
        },
        {
          name: "company",
          icon: "icon-company",
        },
        {
          name: "ali-clould",
          icon: "icon-ali-clould",
        },
        {
          name: "copy1",
          icon: "icon-copy1",
        },
        {
          name: "credit-level",
          icon: "icon-credit-level",
        },
        {
          name: "coupons",
          icon: "icon-coupons",
        },
        {
          name: "connections",
          icon: "icon-connections",
        },
        {
          name: "cry",
          icon: "icon-cry",
        },
        {
          name: "costoms-alearance",
          icon: "icon-costoms-alearance",
        },
        {
          name: "clock",
          icon: "icon-clock",
        },
        {
          name: "CurrencyConverter",
          icon: "icon-CurrencyConverter",
        },
        {
          name: "cut",
          icon: "icon-cut",
        },
        {
          name: "data1",
          icon: "icon-data1",
        },
        {
          name: "Customermanagement",
          icon: "icon-Customermanagement",
        },
        {
          name: "descending",
          icon: "icon-descending",
        },
        {
          name: "double-arro-right",
          icon: "icon-double-arro-right",
        },
        {
          name: "customization",
          icon: "icon-customization",
        },
        {
          name: "double-arrow-left",
          icon: "icon-double-arrow-left",
        },
        {
          name: "discount",
          icon: "icon-discount",
        },
        {
          name: "download",
          icon: "icon-download",
        },
        {
          name: "dollar1",
          icon: "icon-dollar1",
        },
        {
          name: "default-template",
          icon: "icon-default-template",
        },
        {
          name: "editor1",
          icon: "icon-editor1",
        },
        {
          name: "eletrical",
          icon: "icon-eletrical",
        },
        {
          name: "electronics",
          icon: "icon-electronics",
        },
        {
          name: "etrical-equipm",
          icon: "icon-etrical-equipm",
        },
        {
          name: "ellipsis",
          icon: "icon-ellipsis",
        },
        {
          name: "email",
          icon: "icon-email",
        },
        {
          name: "falling",
          icon: "icon-falling",
        },
        {
          name: "earth",
          icon: "icon-earth",
        },
        {
          name: "filter",
          icon: "icon-filter",
        },
        {
          name: "furniture",
          icon: "icon-furniture",
        },
        {
          name: "folder",
          icon: "icon-folder",
        },
        {
          name: "feeds",
          icon: "icon-feeds",
        },
        {
          name: "history1",
          icon: "icon-history1",
        },
        {
          name: "hardware",
          icon: "icon-hardware",
        },
        {
          name: "help",
          icon: "icon-help",
        },
        {
          name: "good",
          icon: "icon-good",
        },
        {
          name: "Householdappliances",
          icon: "icon-Householdappliances",
        },
        {
          name: "gift1",
          icon: "icon-gift1",
        },
        {
          name: "form",
          icon: "icon-form",
        },
        {
          name: "image-text",
          icon: "icon-image-text",
        },
        {
          name: "hot",
          icon: "icon-hot",
        },
        {
          name: "inspection",
          icon: "icon-inspection",
        },
        {
          name: "leftbutton",
          icon: "icon-leftbutton",
        },
        {
          name: "jewelry",
          icon: "icon-jewelry",
        },
        {
          name: "ipad",
          icon: "icon-ipad",
        },
        {
          name: "leftarrow",
          icon: "icon-leftarrow",
        },
        {
          name: "integral1",
          icon: "icon-integral1",
        },
        {
          name: "kitchen",
          icon: "icon-kitchen",
        },
        {
          name: "inquiry-template",
          icon: "icon-inquiry-template",
        },
        {
          name: "link",
          icon: "icon-link",
        },
        {
          name: "libra",
          icon: "icon-libra",
        },
        {
          name: "loading",
          icon: "icon-loading",
        },
        {
          name: "listing-content",
          icon: "icon-listing-content",
        },
        {
          name: "lights",
          icon: "icon-lights",
        },
        {
          name: "logistics-icon",
          icon: "icon-logistics-icon",
        },
        {
          name: "messagecenter",
          icon: "icon-messagecenter",
        },
        {
          name: "mobile-phone",
          icon: "icon-mobile-phone",
        },
        {
          name: "manage-order",
          icon: "icon-manage-order",
        },
        {
          name: "move",
          icon: "icon-move",
        },
        {
          name: "Moneymanagement",
          icon: "icon-Moneymanagement",
        },
        {
          name: "namecard",
          icon: "icon-namecard",
        },
        {
          name: "map",
          icon: "icon-map",
        },
        {
          name: "Newuserzone",
          icon: "icon-Newuserzone",
        },
        {
          name: "multi-language",
          icon: "icon-multi-language",
        },
        {
          name: "office",
          icon: "icon-office",
        },
        {
          name: "notice",
          icon: "icon-notice",
        },
        {
          name: "ontimeshipment",
          icon: "icon-ontimeshipment",
        },
        {
          name: "office-supplies",
          icon: "icon-office-supplies",
        },
        {
          name: "password",
          icon: "icon-password",
        },
        {
          name: "Notvisible1",
          icon: "icon-Notvisible1",
        },
        {
          name: "operation",
          icon: "icon-operation",
        },
        {
          name: "packaging",
          icon: "icon-packaging",
        },
        {
          name: "online-tracking",
          icon: "icon-online-tracking",
        },
        {
          name: "packing-labeling",
          icon: "icon-packing-labeling",
        },
        {
          name: "phone",
          icon: "icon-phone",
        },
        {
          name: "pic1",
          icon: "icon-pic1",
        },
        {
          name: "pin",
          icon: "icon-pin",
        },
        {
          name: "play1",
          icon: "icon-play1",
        },
        {
          name: "logistic-logo",
          icon: "icon-logistic-logo",
        },
        {
          name: "print",
          icon: "icon-print",
        },
        {
          name: "product",
          icon: "icon-product",
        },
        {
          name: "machinery",
          icon: "icon-machinery",
        },
        {
          name: "process",
          icon: "icon-process",
        },
        {
          name: "prompt",
          icon: "icon-prompt",
        },
        {
          name: "QRcode1",
          icon: "icon-QRcode1",
        },
        {
          name: "reeor",
          icon: "icon-reeor",
        },
        {
          name: "reduce",
          icon: "icon-reduce",
        },
        {
          name: "Non-staplefood",
          icon: "icon-Non-staplefood",
        },
        {
          name: "rejected-order",
          icon: "icon-rejected-order",
        },
        {
          name: "resonserate",
          icon: "icon-resonserate",
        },
        {
          name: "remind",
          icon: "icon-remind",
        },
        {
          name: "responsetime",
          icon: "icon-responsetime",
        },
        {
          name: "return",
          icon: "icon-return",
        },
        {
          name: "paylater",
          icon: "icon-paylater",
        },
        {
          name: "rising1",
          icon: "icon-rising1",
        },
        {
          name: "Rightarrow",
          icon: "icon-Rightarrow",
        },
        {
          name: "rmb1",
          icon: "icon-rmb1",
        },
        {
          name: "RFQ-logo",
          icon: "icon-RFQ-logo",
        },
        {
          name: "save",
          icon: "icon-save",
        },
        {
          name: "scanning",
          icon: "icon-scanning",
        },
        {
          name: "security",
          icon: "icon-security",
        },
        {
          name: "salescenter",
          icon: "icon-salescenter",
        },
        {
          name: "seleted",
          icon: "icon-seleted",
        },
        {
          name: "searchcart",
          icon: "icon-searchcart",
        },
        {
          name: "raw",
          icon: "icon-raw",
        },
        {
          name: "service",
          icon: "icon-service",
        },
        {
          name: "share",
          icon: "icon-share",
        },
        {
          name: "signboard",
          icon: "icon-signboard",
        },
        {
          name: "shuffling-banner",
          icon: "icon-shuffling-banner",
        },
        {
          name: "Rightbutton",
          icon: "icon-Rightbutton",
        },
        {
          name: "sorting",
          icon: "icon-sorting",
        },
        {
          name: "sound-Mute",
          icon: "icon-sound-Mute",
        },
        {
          name: "Similarproducts",
          icon: "icon-Similarproducts",
        },
        {
          name: "sound-filling",
          icon: "icon-sound-filling",
        },
        {
          name: "suggest",
          icon: "icon-suggest",
        },
        {
          name: "stop",
          icon: "icon-stop",
        },
        {
          name: "success",
          icon: "icon-success",
        },
        {
          name: "supplier-features",
          icon: "icon-supplier-features",
        },
        {
          name: "switch",
          icon: "icon-switch",
        },
        {
          name: "survey",
          icon: "icon-survey",
        },
        {
          name: "template",
          icon: "icon-template",
        },
        {
          name: "text",
          icon: "icon-text",
        },
        {
          name: "suspended",
          icon: "icon-suspended",
        },
        {
          name: "task-management",
          icon: "icon-task-management",
        },
        {
          name: "tool",
          icon: "icon-tool",
        },
        {
          name: "Top",
          icon: "icon-Top",
        },
        {
          name: "smile",
          icon: "icon-smile",
        },
        {
          name: "textile-products",
          icon: "icon-textile-products",
        },
        {
          name: "tradealert",
          icon: "icon-tradealert",
        },
        {
          name: "topsales",
          icon: "icon-topsales",
        },
        {
          name: "tradingvolume",
          icon: "icon-tradingvolume",
        },
        {
          name: "training",
          icon: "icon-training",
        },
        {
          name: "upload",
          icon: "icon-upload",
        },
        {
          name: "RFQ-word",
          icon: "icon-RFQ-word",
        },
        {
          name: "viewlarger",
          icon: "icon-viewlarger",
        },
        {
          name: "viewgallery",
          icon: "icon-viewgallery",
        },
        {
          name: "vehivles",
          icon: "icon-vehivles",
        },
        {
          name: "trust",
          icon: "icon-trust",
        },
        {
          name: "warning",
          icon: "icon-warning",
        },
        {
          name: "warehouse",
          icon: "icon-warehouse",
        },
        {
          name: "shoes",
          icon: "icon-shoes",
        },
        {
          name: "video",
          icon: "icon-video",
        },
        {
          name: "viewlist",
          icon: "icon-viewlist",
        },
        {
          name: "set",
          icon: "icon-set",
        },
        {
          name: "store",
          icon: "icon-store",
        },
        {
          name: "tool-hardware",
          icon: "icon-tool-hardware",
        },
        {
          name: "vs",
          icon: "icon-vs",
        },
        {
          name: "toy",
          icon: "icon-toy",
        },
        {
          name: "sport",
          icon: "icon-sport",
        },
        {
          name: "creditcard",
          icon: "icon-creditcard",
        },
        {
          name: "contacts",
          icon: "icon-contacts",
        },
        {
          name: "checkstand",
          icon: "icon-checkstand",
        },
        {
          name: "aviation",
          icon: "icon-aviation",
        },
        {
          name: "Daytimemode",
          icon: "icon-Daytimemode",
        },
        {
          name: "infantmom",
          icon: "icon-infantmom",
        },
        {
          name: "discounts",
          icon: "icon-discounts",
        },
        {
          name: "invoice",
          icon: "icon-invoice",
        },
        {
          name: "insurance",
          icon: "icon-insurance",
        },
        {
          name: "nightmode",
          icon: "icon-nightmode",
        },
        {
          name: "usercenter",
          icon: "icon-usercenter",
        },
        {
          name: "unlock",
          icon: "icon-unlock",
        },
        {
          name: "vip",
          icon: "icon-vip",
        },
        {
          name: "wallet",
          icon: "icon-wallet",
        },
        {
          name: "landtransportation",
          icon: "icon-landtransportation",
        },
        {
          name: "voice",
          icon: "icon-voice",
        },
        {
          name: "exchangerate",
          icon: "icon-exchangerate",
        },
        {
          name: "contacts-fill",
          icon: "icon-contacts-fill",
        },
        {
          name: "add-account1",
          icon: "icon-add-account1",
        },
        {
          name: "years-fill",
          icon: "icon-years-fill",
        },
        {
          name: "add-cart-fill",
          icon: "icon-add-cart-fill",
        },
        {
          name: "add-fill",
          icon: "icon-add-fill",
        },
        {
          name: "all-fill1",
          icon: "icon-all-fill1",
        },
        {
          name: "ashbin-fill",
          icon: "icon-ashbin-fill",
        },
        {
          name: "calendar-fill",
          icon: "icon-calendar-fill",
        },
        {
          name: "bad-fill",
          icon: "icon-bad-fill",
        },
        {
          name: "bussiness-man-fill",
          icon: "icon-bussiness-man-fill",
        },
        {
          name: "atm-fill",
          icon: "icon-atm-fill",
        },
        {
          name: "cart-full-fill",
          icon: "icon-cart-full-fill",
        },
        {
          name: "cart-Empty-fill",
          icon: "icon-cart-Empty-fill",
        },
        {
          name: "cameraswitching-fill",
          icon: "icon-cameraswitching-fill",
        },
        {
          name: "atm-away-fill",
          icon: "icon-atm-away-fill",
        },
        {
          name: "certified-supplier-fill",
          icon: "icon-certified-supplier-fill",
        },
        {
          name: "calculator-fill",
          icon: "icon-calculator-fill",
        },
        {
          name: "clock-fill",
          icon: "icon-clock-fill",
        },
        {
          name: "ali-clould-fill",
          icon: "icon-ali-clould-fill",
        },
        {
          name: "color-fill",
          icon: "icon-color-fill",
        },
        {
          name: "coupons-fill",
          icon: "icon-coupons-fill",
        },
        {
          name: "cecurity-protection-fill",
          icon: "icon-cecurity-protection-fill",
        },
        {
          name: "credit-level-fill",
          icon: "icon-credit-level-fill",
        },
        {
          name: "default-template-fill",
          icon: "icon-default-template-fill",
        },
        {
          name: "CurrencyConverter-fill",
          icon: "icon-CurrencyConverter-fill",
        },
        {
          name: "Customermanagement-fill",
          icon: "icon-Customermanagement-fill",
        },
        {
          name: "discounts-fill",
          icon: "icon-discounts-fill",
        },
        {
          name: "Daytimemode-fill",
          icon: "icon-Daytimemode-fill",
        },
        {
          name: "exl-fill",
          icon: "icon-exl-fill",
        },
        {
          name: "cry-fill",
          icon: "icon-cry-fill",
        },
        {
          name: "email-fill",
          icon: "icon-email-fill",
        },
        {
          name: "filter-fill",
          icon: "icon-filter-fill",
        },
        {
          name: "folder-fill",
          icon: "icon-folder-fill",
        },
        {
          name: "feeds-fill",
          icon: "icon-feeds-fill",
        },
        {
          name: "gold-supplie-fill",
          icon: "icon-gold-supplie-fill",
        },
        {
          name: "form-fill",
          icon: "icon-form-fill",
        },
        {
          name: "camera-fill",
          icon: "icon-camera-fill",
        },
        {
          name: "good-fill",
          icon: "icon-good-fill",
        },
        {
          name: "image-text-fill",
          icon: "icon-image-text-fill",
        },
        {
          name: "inspection-fill",
          icon: "icon-inspection-fill",
        },
        {
          name: "hot-fill",
          icon: "icon-hot-fill",
        },
        {
          name: "company-fill",
          icon: "icon-company-fill",
        },
        {
          name: "discount-fill",
          icon: "icon-discount-fill",
        },
        {
          name: "insurance-fill",
          icon: "icon-insurance-fill",
        },
        {
          name: "inquiry-template-fill",
          icon: "icon-inquiry-template-fill",
        },
        {
          name: "leftbutton-fill",
          icon: "icon-leftbutton-fill",
        },
        {
          name: "integral-fill1",
          icon: "icon-integral-fill1",
        },
        {
          name: "help1",
          icon: "icon-help1",
        },
        {
          name: "listing-content-fill",
          icon: "icon-listing-content-fill",
        },
        {
          name: "logistic-logo-fill",
          icon: "icon-logistic-logo-fill",
        },
        {
          name: "Moneymanagement-fill",
          icon: "icon-Moneymanagement-fill",
        },
        {
          name: "manage-order-fill",
          icon: "icon-manage-order-fill",
        },
        {
          name: "multi-language-fill",
          icon: "icon-multi-language-fill",
        },
        {
          name: "logistics-icon-fill",
          icon: "icon-logistics-icon-fill",
        },
        {
          name: "Newuserzone-fill",
          icon: "icon-Newuserzone-fill",
        },
        {
          name: "nightmode-fill",
          icon: "icon-nightmode-fill",
        },
        {
          name: "office-supplies-fill",
          icon: "icon-office-supplies-fill",
        },
        {
          name: "notice-fill",
          icon: "icon-notice-fill",
        },
        {
          name: "mute",
          icon: "icon-mute",
        },
        {
          name: "order-fill",
          icon: "icon-order-fill",
        },
        {
          name: "password1",
          icon: "icon-password1",
        },
        {
          name: "map1",
          icon: "icon-map1",
        },
        {
          name: "paylater-fill",
          icon: "icon-paylater-fill",
        },
        {
          name: "phone-fill",
          icon: "icon-phone-fill",
        },
        {
          name: "online-tracking-fill",
          icon: "icon-online-tracking-fill",
        },
        {
          name: "play-fill1",
          icon: "icon-play-fill1",
        },
        {
          name: "pdf-fill",
          icon: "icon-pdf-fill",
        },
        {
          name: "phone1",
          icon: "icon-phone1",
        },
        {
          name: "pin-fill",
          icon: "icon-pin-fill",
        },
        {
          name: "product-fill",
          icon: "icon-product-fill",
        },
        {
          name: "rankinglist-fill",
          icon: "icon-rankinglist-fill",
        },
        {
          name: "reduce-fill",
          icon: "icon-reduce-fill",
        },
        {
          name: "reeor-fill",
          icon: "icon-reeor-fill",
        },
        {
          name: "pic-fill1",
          icon: "icon-pic-fill1",
        },
        {
          name: "rankinglist",
          icon: "icon-rankinglist",
        },
        {
          name: "product1",
          icon: "icon-product1",
        },
        {
          name: "prompt-fill1",
          icon: "icon-prompt-fill1",
        },
        {
          name: "resonserate-fill",
          icon: "icon-resonserate-fill",
        },
        {
          name: "remind-fill",
          icon: "icon-remind-fill",
        },
        {
          name: "Rightbutton-fill",
          icon: "icon-Rightbutton-fill",
        },
        {
          name: "RFQ-logo-fill",
          icon: "icon-RFQ-logo-fill",
        },
        {
          name: "RFQ-word-fill",
          icon: "icon-RFQ-word-fill",
        },
        {
          name: "searchcart-fill",
          icon: "icon-searchcart-fill",
        },
        {
          name: "salescenter-fill",
          icon: "icon-salescenter-fill",
        },
        {
          name: "save-fill",
          icon: "icon-save-fill",
        },
        {
          name: "security-fill",
          icon: "icon-security-fill",
        },
        {
          name: "Similarproducts-fill",
          icon: "icon-Similarproducts-fill",
        },
        {
          name: "signboard-fill",
          icon: "icon-signboard-fill",
        },
        {
          name: "service-fill",
          icon: "icon-service-fill",
        },
        {
          name: "shuffling-banner-fill",
          icon: "icon-shuffling-banner-fill",
        },
        {
          name: "supplier-features-fill",
          icon: "icon-supplier-features-fill",
        },
        {
          name: "store-fill",
          icon: "icon-store-fill",
        },
        {
          name: "smile-fill",
          icon: "icon-smile-fill",
        },
        {
          name: "success-fill",
          icon: "icon-success-fill",
        },
        {
          name: "sound-filling-fill",
          icon: "icon-sound-filling-fill",
        },
        {
          name: "sound-Mute1",
          icon: "icon-sound-Mute1",
        },
        {
          name: "suspended-fill",
          icon: "icon-suspended-fill",
        },
        {
          name: "tool-fill",
          icon: "icon-tool-fill",
        },
        {
          name: "task-management-fill",
          icon: "icon-task-management-fill",
        },
        {
          name: "unlock-fill",
          icon: "icon-unlock-fill",
        },
        {
          name: "trust-fill",
          icon: "icon-trust-fill",
        },
        {
          name: "vip-fill",
          icon: "icon-vip-fill",
        },
        {
          name: "set1",
          icon: "icon-set1",
        },
        {
          name: "Top-fill",
          icon: "icon-Top-fill",
        },
        {
          name: "viewlarger1",
          icon: "icon-viewlarger1",
        },
        {
          name: "voice-fill",
          icon: "icon-voice-fill",
        },
        {
          name: "warning-fill",
          icon: "icon-warning-fill",
        },
        {
          name: "warehouse-fill",
          icon: "icon-warehouse-fill",
        },
        {
          name: "zip-fill",
          icon: "icon-zip-fill",
        },
        {
          name: "trade-assurance-fill",
          icon: "icon-trade-assurance-fill",
        },
        {
          name: "vs-fill",
          icon: "icon-vs-fill",
        },
        {
          name: "video1",
          icon: "icon-video1",
        },
        {
          name: "template-fill",
          icon: "icon-template-fill",
        },
        {
          name: "wallet1",
          icon: "icon-wallet1",
        },
        {
          name: "training1",
          icon: "icon-training1",
        },
        {
          name: "packing-labeling-fill",
          icon: "icon-packing-labeling-fill",
        },
        {
          name: "Exportservices-fill",
          icon: "icon-Exportservices-fill",
        },
        {
          name: "brand-fill",
          icon: "icon-brand-fill",
        },
        {
          name: "collection",
          icon: "icon-collection",
        },
        {
          name: "consumption-fill",
          icon: "icon-consumption-fill",
        },
        {
          name: "collection-fill",
          icon: "icon-collection-fill",
        },
        {
          name: "brand",
          icon: "icon-brand",
        },
        {
          name: "rejected-order-fill",
          icon: "icon-rejected-order-fill",
        },
        {
          name: "homepage-ads-fill",
          icon: "icon-homepage-ads-fill",
        },
        {
          name: "homepage-ads",
          icon: "icon-homepage-ads",
        },
        {
          name: "scenes-fill",
          icon: "icon-scenes-fill",
        },
        {
          name: "scenes",
          icon: "icon-scenes",
        },
      ],
    };
  },
  methods: {
    copyIcon(item) {
      let icon = '<span class="iconfont ' + item.icon + '"></span>';
      this.$fnc.copyTocontent(icon);
      this.$message({
        message: "复制成功，去粘贴",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.icon-li {
  width: 300px;
  float: left;
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
}
.icon-li .icon {
  font-size: 40px;
}
.icon-li:hover {
  color: #2f6caf;
}
</style>