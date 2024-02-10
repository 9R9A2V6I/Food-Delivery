import React, { useState, useEffect } from 'react';
import './Menu_A.css';
import Data from './MenuData.js';
import { Search, ShoppingCart,Add } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {addToCart} from "../../../Redux/cartSlice.js"
// import {Loader} from 'react-loader-spinner';

import men13 from '../../../Assets/icon_1.png';
import men14 from '../../../Assets/icon_2.png';
import men15 from '../../../Assets/icon_3.png';

const ITEMS_PER_PAGE = 1;
function Menu_A() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
 

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulating an asynchronous operation (e.g., fetching Data from an API)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [currentPage, selectedCategory]);

  const filteredItems =
    selectedCategory === ''
      ? Data.categories
      : Data.categories.filter(
          (category) => category.name === selectedCategory
        );

  const currentItems = filteredItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Reset page when category changes
  };

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="menuContainer">
      <div className="menuHeaderBar">
        <h1 className="menuTxt">DISCOVER OUR MENU</h1>
      </div>
      <div className="mainMenuContainer">
        <div className="menuItemContainer">
          <ul className="MenuList">
            {Data.categories.map((category) => (
              <li
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={
                  category.name === selectedCategory ? 'activeCategory' : ''
                }
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {loading ? (
        <main className="mainLoaderPage">
          <div class="loader">
            <span></span>
          </div>
        </main>
      ) : (
        <>
          {currentItems.map((category) => (
            <div className="menuBarCon">
              {category.items.map((item) => (
                <div className="menuImgContainer">
                  <img src={item.img} className="menuBarImg" />
                  <h1 className="menuText">{item.Text}</h1>
                  <p>{item.Para}</p>
                  <p className="pizzaPrice">{item.Price}</p>
                  <div onClick={() => handleAddToCart(item)} className='menuAddCartBtn'>
                  <ShoppingCart/>
                  {/* <Add/> */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}

      <div className="menuContainerB">
        <div className="menuRecipiesCont">
          <div className="MenrecipiesContent">
            <img src={men13} alt="" />
            <div deliveryTextContainer>
              <h1 className="Menurecipietec">QUALITY FOODS</h1>
              <p>
                Sit amet, consectetur adipiscing elit quisque eget maximus
                velit, non eleifend libero curabitur dapibus mauris sed leo
                cursus aliquetcras suscipit.
              </p>
            </div>
          </div>
          <div className="MenrecipiesContent">
            <img src={men14} alt="" />
            <div deliveryTextContainer>
              <h1 className="Menurecipietec">ORIGINAL RECIPES</h1>
              <p>
                Sit amet, consectetur adipiscing elit quisque eget maximus
                velit, non eleifend libero curabitur dapibus mauris sed leo
                cursus aliquetcras suscipit.
              </p>
            </div>
          </div>
          <div className="MenrecipiesContent">
            <img src={men15} alt="" />
            <div deliveryTextContainer>
              <h1 className="Menurecipietec">FASTEST DELIVERY</h1>
              <p>
                Sit amet, consectetur adipiscing elit quisque eget maximus
                velit, non eleifend libero curabitur dapibus mauris sed leo
                cursus aliquetcras suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu_A;
