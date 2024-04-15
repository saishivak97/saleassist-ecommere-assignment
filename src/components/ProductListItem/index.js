import './index.css'

const ProductListItem = (props) => {
    const {eachProductList} = props;
    const {id, name, FinalPrice, Mrp, image} = eachProductList;

    return (
        <li key = {id} className ="product-list-item">
            <div className ="product-bookmark-container">
            <img className ="product-image" src = {image} alt = {name} />
            <img className="bookmark-icon" src= "images-icons/Header Icons/bookmark-icon.png" alt = "bookmark-icon"/>

            </div>
            
            <h1 className = "product-name">{name}</h1>
            <div className ="product-price-container">
                <div className = "price-container">
                <img src= "images-icons/Other Icons/rupee-sign.png" alt = "rupee-icon" />    
                <p className="final-price">{FinalPrice}</p>
                <p className="mrp">{Mrp} </p>
                <p className="offer">(50% Off)</p>
                
                
                </div>
                <div>
                    <img src ="images-icons/Other Icons/Group 450.png" alt = "grouping"/>
                </div>
                
                
            </div>
            
        </li>
    )
}

export default ProductListItem;