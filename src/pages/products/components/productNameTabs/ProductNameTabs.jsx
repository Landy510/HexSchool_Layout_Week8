import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";

const NameTabs = ({productName = ''}) => {
  const {name} = useParams()
  return (
    <Link 
      className={
        [
          "grow shrikhand py-1 mx-1 rounded-full border border-white border-solid text-center",
          `${productName === name ? 'bg-white text-black' : 'text-white'}`,
          'desktop:px-15 desktop:mx-2-1/2 desktop:text-[1.5rem] desktop:grow-0'
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
    <div className="bg-black py-3 px-[14px] desktop:px-0 flex justify-center">
      {
        productNames.map((name, index) => {
          return <NameTabs key={index} productName={name} />
        })
      }
    </div>
  )
} 

export default ProductNameTabs;

NameTabs.propTypes = {
  productName: PropTypes.string
}

ProductNameTabs.propTypes = {
  productNames: PropTypes.arrayOf(PropTypes.string)
}