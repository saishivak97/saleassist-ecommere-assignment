import ProductListItem from '../ProductListItem'
import './index.css'

const ProductList = (props) => {
    const {productsListDetails} = props

    return (<ul className = "products-list-container">
            {
                productsListDetails.map(eachProductList =><ProductListItem  eachProductList ={eachProductList}/> )
            }
    </ul>
    )

}

export default ProductList;