
import Header from '../Header'
import CategoriesList from '../CategoriesList'
import ProductList from '../ProductsList'
import './index.css'


const Home = (props)=>{

    const {headericons,categoriesListDetails,productsListDetails} = props;
    return (<div className = "home-page">
    <Header headericons = {headericons}/>
    <CategoriesList categoriesListDetails = {categoriesListDetails}/>
    <ProductList productsListDetails = {productsListDetails} />
    <ProductList productsListDetails = {productsListDetails} />
    </div>)
}

export default Home;