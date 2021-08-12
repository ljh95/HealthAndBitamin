import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductSub from './ProductSub';
import ProductCountBox from './ProductCountBox';
import ProductTotalBox from './ProductTotalBox';
import ProductInfoimage from './ProductInfoimage';
import ProductDescript from './ProductDescript';
import './ProductDetail.scss';

type image = {
  image_id: number;
  image_url: string;
};

export type SubItemType = {
  id: number;
  image_id: number;
  image_url: string;
  name: string;
  price: number;
  stock: number;
  count: number;
  discount: number;
};

export type Product = {
  id: number;
  name: string;
  detail: string;
  price: number;
  stock: number;
  count: number;
  shipping_fee: number;
  discount: number;
  minimum_free: number;
  imageList: image[];
  subItemList: SubItemType[];

  currentImageUrl: string;
  subItemAddList: number[];
};

export type productType = 'main' | 'sub';

export default function ProductDetail() {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: '',
    detail: '',
    price: 0,
    stock: 0,
    count: 1,
    shipping_fee: 0,
    discount: 10,
    minimum_free: 0,
    imageList: [],
    subItemList: [],

    currentImageUrl: '',
    subItemAddList: [],
  });

  useEffect(() => {
    api<ProductResponseData>(`/data/ProductInfoData/testDetail.json`)
      .then(data => {
        const {
          id,
          name,
          detail,
          price,
          stock,
          shipping_fee,
          discount,
          minimum_free,
          detail_images,
          option_items,
        } = data.RESULT[0];

        console.log(option_items);

        setProduct({
          id,
          name,
          detail,
          price,
          stock,
          count: 0,
          shipping_fee,
          discount,
          minimum_free,
          imageList: detail_images,
          subItemList: option_items.map((item: SubItemType) => {
            item.count = 1;
            item.discount = 10;
            return item;
          }),

          currentImageUrl: detail_images[0].image_url,
          subItemAddList: [],
        });
      })
      .catch(error => {
        /* show error message */
        console.log(error);
      });
  }, []);

  function api<T>(url: string): Promise<T> {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  type ProductResponseData = {
    RESULT: ProductEntity[];
  };

  type ProductEntity = {
    id: number;
    name: string;
    detail: string;
    price: number;
    stock: number;
    shipping_fee: number;
    discount: number;
    minimum_free: number;
    detail_images: image[];
    option_items: SubItemType[];
  };

  const history = useHistory();
  const goToOtherPage = (id: number) => {
    if (id === 1) {
      history.push('/pay');
    }
    if (id === 2) {
      const { subItemList, subItemAddList, id, count } = product!;
      let nnn = subItemList.filter(product =>
        subItemAddList.includes(product.id)
      );

      let productIdAndCountList: {
        product_id: number;
        count: number;
      }[] = nnn.map(el => {
        return { product_id: el.id, count: el.count };
      });

      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set('Content-Type', 'application/json');
      requestHeaders.set(
        'Authorization',
        localStorage
          ?.getItem('token')
          ?.slice(1, localStorage.getItem('token')!.length - 1) || 'no token'
      );
      fetch('http://18.116.64.187:8000/carts', {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          products: [
            ...productIdAndCountList,
            { product_id: id, count: count },
          ],
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('detail');
          console.log(data);
        });
      history.push('/basket');
    }
    if (id === 3) {
      history.push('/favoriteproduct');
    }
  };

  const changeCurrentImage = (index: number) => {
    setProduct({
      ...product,
      currentImageUrl: product.imageList[index].image_url,
    });
  };

  const calcTotalPrice = (): number => {
    const { price, count, discount, subItemList, subItemAddList } = product!;
    return (
      price * count -
      price * (discount / 100) * count +
      subItemList
        .filter(subItem => subItemAddList.includes(subItem.id))
        .reduce((acc, subItem) => {
          if (!subItem.count) subItem.count = 1;
          return acc + subItem.price * subItem.count;
        }, 0)
    );
  };

  const addSubItemList = (id: number) => {
    let { subItemAddList } = product!;

    if (!subItemAddList.includes(id)) {
      setProduct({
        ...product,
        subItemAddList: [...subItemAddList, id],
      });
    }
  };

  const updateItem = (type: productType, count: number, id: number) => {
    type === 'main' ? updateMainCount(count) : updateSubCount(count, id);
  };

  const updateMainCount = (count: number) => {
    setProduct({
      ...product,
      count,
    });
  };

  const updateSubCount = (count: number, id: number) => {
    let { subItemList } = product!;

    setProduct({
      ...product,
      subItemList: subItemList.map(item => {
        item.count = item.id === id ? count : item.count;
        return item;
      }),
    });
  };

  const deleteItem = (type: productType, id: number) => {
    type === 'main' ? deleteMainItem() : deleteSubItem(id);
  };

  const deleteMainItem = () => {
    alert('main 제품은 삭제할 수 없습니다.');
  };

  const deleteSubItem = (id: number) => {
    let { subItemList, subItemAddList } = product;

    setProduct({
      ...product,
      subItemAddList: subItemAddList.filter(item => item !== id),
      subItemList: subItemList.map(item => {
        item.count = item.id === id ? 1 : item.count;
        return item;
      }),
    });
  };

  return (
    <div className="productDetail">
      <aside className="imageBox">
        <img
          className="productImage"
          src={product.currentImageUrl}
          alt="product"
        />
        <ol className="productImageBox">
          {product.imageList.map((image, index) => {
            return (
              <ProductInfoimage
                key={image.image_id}
                image={image.image_url}
                id={image.image_id}
                index={index}
                changeCurrentImage={changeCurrentImage}
              />
            );
          })}
        </ol>
        <div className="expandImageBox">
          <i className="fas fa-search" />
          &nbsp;
          <span className="expandImageSpan">확대보기</span>
        </div>
      </aside>
      <article className="infoBox">
        <ProductDescript
          name={product.name}
          price={product.price}
          // count={product.count}
          discount={product.discount}
          shipping_fee={product.shipping_fee}
        />
        <p className="guideArea">(최소주문수량 1개 이상)</p>
        <ProductSub
          subItemList={product.subItemList}
          subItemAddList={product.subItemAddList}
          addSubItemList={addSubItemList}
        />
        <p className="alertCount">
          <span className="alertCountSpan">!</span>
          &nbsp;&nbsp;수량을 선택해주세요.
        </p>
        <ProductCountBox
          id={product.id}
          type={'main'}
          count={product.count}
          price={product.price}
          stock={product.stock}
          name={product.name}
          discount={product.discount}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
        {product.subItemList
          .filter(p => product.subItemAddList.includes(p.id))
          .map(p => {
            return (
              <ProductCountBox
                key={p.id}
                id={p.id}
                type={'sub'}
                name={p.name}
                count={p.count}
                price={p.price}
                stock={p.stock}
                discount={p.discount}
                updateItem={updateItem}
                deleteItem={deleteItem}
              />
            );
          })}
        <ProductTotalBox totalPrice={calcTotalPrice()} count={product.count} />
        <div className="productInfoButtonBox">
          {BUTTONS.map(el => {
            return (
              <button
                key={el.id}
                className={el.className}
                onClick={() => goToOtherPage(el.id)}
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </article>
    </div>
  );
}

const BUTTONS = [
  {
    id: 1,
    name: '바로 구매하기',
    className: 'btnBuy btn',
  },
  {
    id: 2,
    name: '장바구니',
    className: 'btnBasket btn',
  },
  {
    id: 3,
    name: '관심상품',
    className: 'btnInterest btn',
  },
];
