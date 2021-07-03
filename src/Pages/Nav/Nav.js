import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Nav/Nav.scss';

function Nav() {
  const history = useHistory();

  const [isNav, setIsNav] = useState(false);
  const [isDownClick, setIsdownClick] = useState(false);
  const [navList, setNavList] = useState([]);

  const goMain = () => {
    history.push('/');
  };

  const changePage = page => {
    history.push(`${page}`);
  };

  useEffect(() => {
    // fetch('http://18.116.64.187:8000/products/category')
    fetch('/data/Favorite/Favorite.json')
      .then(res => res.json())
      .then(data => {
        setNavList(data.category);
      });
  }, []);

  // const cateClick = e => {
  //   console.log(`/product-list/${e.target.id * 1 - 1}`);
  //   history.push(`/product-list/${e.target.id}`);
  // };

  return (
    <div className="Navigation">
      <div className={isNav ? 'nav_hover' : 'nav'}>
        <div className="left">
          <div className="logo" onClick={goMain}>
            <img src="http://duftndoft.com/_images/ft_logo.png" alt="logo" />
          </div>
          <div className="menuBox">
            <button className="menuBtn" onClick={() => setIsNav(!isNav)}>
              <i className="menuHamber fas fa-bars fa-2x"></i>
            </button>
            <div className="listMenu">
              <span
                onClick={() => changePage('/basket')}
                className="goToBasket"
              >
                <i className="fas fa-shopping-bag"></i>
              </span>
              <span
                onClick={() => changePage('/favoriteproduct')}
                className="goToFavortie"
              >
                <i className="fas fa-heart"></i>
              </span>
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      {isNav && (
        <div className="right">
          <div className="rightBox">
            <div className="menu">
              <ul>
                <li className="goToSomething">
                  <span onClick={() => goMain()} className="goLink">
                    Main
                  </span>
                  <div
                    className="goLink"
                    onClick={() => setIsdownClick(!isDownClick)}
                  >
                    ProductList
                    {!isDownClick && (
                      <div className="aboutList">
                        {!!navList.length &&
                          navList.map((category, idx) => {
                            return (
                              <span
                                className="smallList"
                                key={idx}
                                onClick={() =>
                                  changePage(
                                    `/product-list/${
                                      category.main_category_id * 1 - 1
                                    }`
                                  )
                                }
                              >
                                {category.main_category_name}
                              </span>
                            );
                          })}
                        <div className="smallList">Best_Product</div>
                        <div className="smallList">Sale_Product</div>
                      </div>
                    )}
                  </div>
                  <span
                    onClick={() => changePage('/basket')}
                    className="goLink"
                  >
                    Cart
                  </span>
                  <span
                    onClick={() => changePage('/favoriteproduct')}
                    className="goLink"
                  >
                    My_List
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
