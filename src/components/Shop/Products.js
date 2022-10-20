import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'The first book i ever wrote',
  },
  {
    id: 'p2',
    price: 4,
    title: 'My 2 book',
    description: 'The 2 book i ever wrote',
  },
  {
    id: 'p2',
    price: 11,
    title: 'My 3 book',
    description: 'The 3 book i ever wrote',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map(item => 
          (<ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />)
        ) }
        
      </ul>
    </section>
  );
};

export default Products;
