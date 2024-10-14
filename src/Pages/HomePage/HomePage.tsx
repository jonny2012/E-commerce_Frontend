import styles from "./homePage.module.scss";
import { Categories } from "modules/Categories/Categories";
import { Slider } from "modules/mainPageSlider/Slider";
import RedTitle from "components/ui/RedTitle";
import ProductCard from "components/ProductCard/ProductCard";

import { products } from "./constants";
import { RedButton } from "components/ui/RedButton";

export const HomePage = () => {



  return (
    <section className={styles.homePage}>
      <div className={styles.categoriesSlider}>
        <Categories />
        <Slider />
      </div>
      <div className={styles.productsContainer}>
      <RedTitle title="Today's" />
      <div><h1>Flash Sales</h1></div>
      <div className={styles.products}>
      { products.map((product, i)=>(
         <ProductCard
         key={i}
        img={product.img}
        name={product.name}
        price={product.price}
        discountPrice={product.discountPrice}
        reviews={product.reviews}
      /> ))}
      </div>
      <div className={styles.btnProducts}>
        <RedButton words="All Products" width="234px"/>
        </div>
      </div>
      
    </section>
  );
};
