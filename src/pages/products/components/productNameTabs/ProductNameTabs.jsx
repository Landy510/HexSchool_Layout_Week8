import { Link, useParams } from "react-router-dom";

const NameTabs = ({productName = ''}) => {
  const {name} = useParams()
  return (
    <Link 
      className={
        [
          "shrikhand fs-24 py-1 px-15 mx-2-1/2 rounded-full border border-white border-solid",
          `${productName === name ? 'bg-white text-black' : 'text-white'}`
        ].join(' ')
      }
      to={`/products/${productName}`}
    >
      {productName}
    </Link>
  )
}

const ProductNameTabs = ({productNames = []}) => {
  return (
    <div className="bg-black py-3 text-center">
      {
        productNames.map((name, index) => {
          return <NameTabs key={index} productName={name} />
        })
      }
    </div>
  )
} 

export default ProductNameTabs;