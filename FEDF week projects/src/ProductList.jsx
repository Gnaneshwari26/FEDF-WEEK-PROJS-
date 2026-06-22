import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      name: "Mobile",
      price: 15000,
      image: "https://darlingretail.com/cdn/shop/files/iPhone_15_Blue_Pure_Back_iPhone_15_Blue_Pure_Front_2up_Screen__WWEN_600x.jpg?v=1695103868"
    },
    {
      name: "Laptop",
      price: 50000,
      image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/dell-laptop/db14250-non-touch/dell-db14250nt-laptop-c-22040rf115-bl-fpr.psd?wid=1200&hei=630&fmt=png-alpha"
    }
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;