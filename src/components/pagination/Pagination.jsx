import PropTypes from 'prop-types';

const Pagination = ({
  dataLength,
  quantityToDisplayPerPage,
  clickEvt,
  activePageIndex
}) => {
  const pages = (dataLength % quantityToDisplayPerPage > 0 ? 1 : 0) + parseInt(dataLength / quantityToDisplayPerPage)

  return (
    <ol className="flex justify-center">
      {
        Array.from({length: pages}).map((_, index) => {
          return <li key={index}>
          <a 
            href="javascript:void(0)"
            className={[
              "saira-extra-condensed text-[1.5rem] text-white mr-6 border-b-[1px] border-solid hover:border-white",
              index === activePageIndex ? 'border-white' : 'border-transparent'
            ].join(' ')}
            onClick={() => {
              clickEvt(index)
            }}
          >
            {index+1}
          </a>
        </li>
        })
      }
    </ol>
  )
}

export default Pagination;

Pagination.propTypes = {
  dataLength: PropTypes.number,
  quantityToDisplayPerPage: PropTypes.number,
  clickEvt: PropTypes.func,
  activePageIndex: PropTypes.number  
}
