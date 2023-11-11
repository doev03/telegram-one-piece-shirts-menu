import { ProductParameterType, type ProductModel } from "./models/models";
import shirtExample from '$lib/img/shirt_example.png';
import burgerImage from '$lib/img/Burger_148.png';
import { page } from "$app/stores";

export class AppState {
  private static _instance: AppState;

  private constructor() {
    const paramsStub = [
      {
        type: ProductParameterType.string,
        title: 'Выберите размер',
        items: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      },
      {
        type: ProductParameterType.color,
        title: 'Выберите цвет',
        items: [
          {
            label: 'Белый',
            color: '#ffffff',
          },
          {
            label: 'Черный',
            color: '#000000',
          },
        ],
      },
    ];
    const productStub = {
      id: '0',
      title: 'Burger',
      price: 1500,
      images: [shirtExample],
      params: paramsStub,
    };
    this._products = [
      {
        id: '0',
        title: 'Футболка 1',
        price: 1500,
        images: [shirtExample, burgerImage],
        params: paramsStub,
      },
      {
        id: '1',
        title: 'Футболка 2',
        price: 1500,
        images: [shirtExample],
        params: paramsStub,
      },
      {
        id: '2',
        title: 'Футболка 3',
        price: 1500,
        images: [shirtExample],
        params: paramsStub,
      },
    ];
  }

  public static get instance(): AppState {
    if (!AppState._instance) {
      AppState._instance = new AppState();
    }

    return AppState._instance;
  }

  private _products: ProductModel[];

  get products() {
    return this._products;
  }

  cartItems: number[] = [];

  init() {
    //window.Telegram.WebApp.ready();
  }

  getProduct(id: string) {
    return this.products.find((p) => p.id == id);
  }

  eIncrClicked() {

  }

  updateMainButton() {
  }
}
