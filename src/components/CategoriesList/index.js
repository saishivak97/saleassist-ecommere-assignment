import CategoriesListItem from '../CategoriesListItem'
import './index.css'


const CategoriesList = (props) => {
    const {categoriesListDetails} = props;

    return (
        <ul className ="catgories-list-container">
            {
              categoriesListDetails.map(eachCategoryList => <CategoriesListItem eachCategoryList = {eachCategoryList}/>) 
            }
        </ul>
    )

}

export default CategoriesList;