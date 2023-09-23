import { useParams } from "react-router-dom";
import ProductNameTabs from './components/productNameTabs/ProductNameTabs';
import ProductDetail from "./components/productDetail/ProductDetail";
import Introduction from "./components/introduction/Introduction";
import ShareSection from "./components/shareSection/ShareSection";

const productNames = ['Diane', 'Felix', 'Karina', 'Vito'];
const productsDetail = [
  {
    name: 'Diane',
    imgUrl1: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane_square1.png?raw=true',
    imgUrl2: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane_square2.png?raw=true',
  },
  {
    name: 'Felix',
    imgUrl1: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix_square1.png?raw=true',
    imgUrl2: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix_square2.png?raw=true',
  },
  {
    name: 'Karina',
    imgUrl1: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina_square1.png?raw=true',
    imgUrl2: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina_square2.png?raw=true',
  },
  {
    name: 'Vito',
    imgUrl1: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito_square1.png?raw=true',
    imgUrl2: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito_square2.png?raw=true',
  },
]
const Products = () => {
  const {name} = useParams();
  const productInfo = productsDetail.find(item => item.name === name)
  return (
    <>
      <ProductNameTabs productNames={productNames}/>
      <ProductDetail key={productInfo.name} productInfo={productInfo} />
      <Introduction />
      <ShareSection />
    </>
    
  )
}

export default Products;