import React from 'react'
import { Link } from 'react-router-dom'
import './sideBar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <div className='l'>
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
                    </li>
                    </div>
                    <div className='l'>
                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fa fa-shopping-bag"></i> Products</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/admin/products"><i className="fa fa-clipboard"></i> All</Link>
                            </li>

                            <li>
                                <Link to="/admin/product"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>
                    </div>
                    <div className='l'>
                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                    </li>
                    </div>
                    <div className='l'>
                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                    </li>
                    </div>
                    <div className='l'>
                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Reviews</Link>
                    </li>
                    </div>

                    <div className='l'>
                    <li>
                        <a href="#categorySubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fa fa-list-alt"></i> Category</a>
                        <ul className="collapse list-unstyled" id="categorySubmenu">
                            <li>
                                <Link to="/admin/categories"><i className="fa fa-clipboard"></i> All Categories</Link>
                            </li>
                            <li>
                                <Link to="/admin/subs"><i className="fa fa-clipboard"></i> All Subcategories</Link>
                            </li>
                            <li>
                                <Link to="/admin/category"><i className="fa fa-plus"></i> Create Category</Link>
                            </li>
                            <li>
                                <Link to="/admin/sub"><i className="fa fa-plus"></i> Create Sub</Link>
                            </li>
                        </ul>
                    </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar