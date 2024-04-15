import './index.css'

const CategoriesListItem =(props) => {
    const {eachCategoryList} = props;
    const {id, name, icon} = eachCategoryList;

    return (
        <li key = {id} className = "category-list-item">
            <div className = "category-list-container">
            <img src = {icon} alt = {name} className ="category-image"/>
            <p className="category-name">{name}</p>
            </div>
        </li>
    )
}

export default CategoriesListItem;