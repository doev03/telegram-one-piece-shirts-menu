import type { ProductModel } from "./models/models";
import burgerImage from '$lib/img/shirt_example.png';

export class Store {
  private static _instance: Store;

  private constructor() {
    const productStub: ProductModel = {
      id: '0',
      title: 'Burger',
      price: 1500,
      image: burgerImage
    };
    this._products = [
      {
        id: '0',
        title: 'Футболка 1',
        price: 1500,
        image: burgerImage
      },
      {
        id: '1',
        title: 'Футболка 2',
        price: 1500,
        image: burgerImage
      },
      {
        id: '2',
        title: 'Футболка 3',
        price: 1500,
        image: burgerImage
      },
    ];
  }

  public static get instance(): Store {
    if (!Store._instance) {
      Store._instance = new Store();
    }

    return Store._instance;
  }

  private _products: ProductModel[];

  get products() {
    return this._products;
  }

  cartItems: number[] = [];

  init() {
    //window.Telegram.WebApp.ready();
  }

  eIncrClicked() {

  }

  modeOrder = false;
  toggleMode(mode_order: boolean) {
    this.modeOrder = mode_order;
    var anim_duration, match;
    try {
      anim_duration = window
        .getComputedStyle(document.body)
        .getPropertyValue("--page-animation-duration");
      if ((match = /([\d\.]+)(ms|s)/.exec(anim_duration))) {
        anim_duration = +match[1];
        if (match[2] == "s") {
          anim_duration *= 1000;
        }
      } else {
        anim_duration = 400;
      }
    } catch (e) {
      anim_duration = 400;
    }
    if (mode_order) {
      $(".cafe-order-overview").show();
      $("body").addClass("order-mode");
    } else {
      autosize;
      $("body").removeClass("order-mode");
      setTimeout(function () {
        $(".cafe-order-overview").hide();
      }, anim_duration);
    }
    //this.updateMainButton();
  }
}
