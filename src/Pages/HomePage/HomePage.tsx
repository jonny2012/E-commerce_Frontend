import styles from "./homePage.module.scss";
import { CategoriesMenu } from "modules/categoriesMenu/CategoriesMenu";
import { Slider } from "modules/mainPageSlider/Slider";
import RedTitle from "components/ui/RedTitle";
import ProductCard from "components/ProductCard/ProductCard";

import { products } from "./constants";
import { RedButton } from "components/ui/RedButton";
import { BrowseByCategories } from "modules/browseByCategories/BrowseByCategories";
import { useState } from "react";

export const HomePage = () => {
  const [isShowAll, setIsShowAll] = useState(false);

  return (
    <section className={styles.homePage}>
      <div className={styles.categoriesSlider}>
        <CategoriesMenu />
        <Slider />
      </div>
      <div className={styles.productsContainer}>
        <RedTitle title="Today's" />
        <div>
          <h1>Flash Sales</h1>
        </div>
        <div
          className={
            isShowAll ? `${styles.products} ${styles.all}` : styles.products
          }
        >
          {products.map((product, i) => (
            <ProductCard
              key={i}
              img={product.img}
              name={product.name}
              price={product.price}
              discountPrice={product.discountPrice}
              reviews={product.reviews}
            />
          ))}
        </div>
        <div className={styles.btnProducts}>
          <RedButton
            onClick={() => setIsShowAll(!isShowAll)}
            words="All Products"
            width="234px"
          />
        </div>

      </div>
      <BrowseByCategories/>
    </section>
  );
};
