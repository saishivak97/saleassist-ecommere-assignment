import './index.css'

const headerItems = ["Bags","Travel","Accesories","Gifting","Jewelery"]

// Here instead of list we can use Link and Route from "react-router-dom" mpm package.but here i am using list items.

const Header = (props) => {

    const {headericons} = props;

    return (
        <div className ="header-container">
            <img src = "./images-icons/Company Logo/TANN TRIM.png" alt = "company-logo"/>
            <ul className = "header-items-list">
            {
                headerItems.map(eachItem => <li className = "header-items"><h1>{eachItem}</h1></li>)
            }
            </ul>
            <ul className ="header-icons-container">
                {headericons.map(eachHeadericon =>{
                    const {id, name, icon} = eachHeadericon;
                    return (<li key = {id} className ="header-icons">
                        <img src = {icon} alt = {name}/>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Header;