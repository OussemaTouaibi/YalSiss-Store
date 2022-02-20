import './App.scss';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';





import Homme from './userInterface/pages/categorypages/homme';
import HomePage from './userInterface/pages/home-page';
import About from './userInterface/pages/aboutUs';
import NotFound from './userInterface/pages/notfound-page';
import Homepage2 from './userInterface/pages/home-page2';
import ContactPage from './userInterface/pages/ContactPage';
import Femme from './userInterface/pages/categorypages/femme'
import Enfant from './userInterface/pages/categorypages/phones';

// Cart Imports
import Cart from './userInterface/components/cart/cart'
import Shipping from './userInterface/components/cart/shipping';
import ConfirmOrder from './userInterface/components/cart/confirmOrder';
import OrderSuccess from './userInterface/components/cart/orderSuccess';

// Order Imports
import ListOrders from './userInterface/components/order/ListOrders';
import OrderDetails from './userInterface/components/order/OrderDetails';




// Auth or Users Imports
import LogIn from './userInterface/user/login/login';
import Signup from './userInterface/user/signup/signup';
import UpdatePassword from './userInterface/user/updatePassword/updatePassword'
import ForgotPassword from './userInterface/user/forgotPassword/forgotPassword'
import NewPassword from './userInterface/user/newPassword/newPassword'
import Profile from './userInterface/user/profile/profile';
import ProductDetails from './userInterface/components/product/productDetails'
import UpdateProfile from './userInterface/user/updateProfile/updateProfile'

// Admin Imports
import Dashboard from './adminInterface/component/dashboard/dashboard';
import ProductsList from './adminInterface/component/product/productList';
import NewProduct from './adminInterface/component/product/newProduct';
import UpdateProduct from './adminInterface/component/product/updateProduct';
import OrdersList from './adminInterface/component/order/orderList';
import ProcessOrder from './adminInterface/component/order/processOrder';
import UsersList from './adminInterface/component/user/userList';
import UpdateUser from './adminInterface/component/user/updateUser';
import ProductReviews from './adminInterface/component/review/productReviews';
import CategoryCreate from './adminInterface/component/category/categoryCreate';
import CategoryList from './adminInterface/component/category/categoryList';
import SubCreate from './adminInterface/component/sub/CreateSub';
import ListSub from './adminInterface/component/sub/ListSub';

import ProtectedRoutes from './userInterface/route/protectedRoutes';
import { loadUser } from './actions/userActions'
import store from './store'
import Parfums from './userInterface/pages/categorypages/parfums';
import Watches from './userInterface/pages/categorypages/watches';
import Phones from './userInterface/pages/categorypages/phones';
import Kids from './userInterface/pages/categorypages/kids';
import Comp from './userInterface/pages/categorypages/computer';
import Other from './userInterface/pages/categorypages/other';
import Decoration from './userInterface/pages/categorypages/decoration';
import Meuble from './userInterface/pages/categorypages/meuble';
import Makeup from './userInterface/pages/categorypages/maquillage';
import Accessories from './userInterface/pages/categorypages/Acc';








function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={ContactPage} />

        <Route  path="/product/:id" component={ProductDetails} />
       
        <Route  path='/password/forgot' component={ForgotPassword}  />
        <Route  path='/password/reset/:token' component={NewPassword} exact />
        <Route  path='/category/vetements-homme' component={Homme} exact />
        <Route  path='/category/vetements-femme' component={Femme} exact />
        <Route  path='/category/watches' component={Watches} exact />
        <Route  path='/category/parfums' component={Parfums} exact />
        <Route  path='/category/telephones-and-tablettes' component={Phones} exact />
        <Route  path='/category/vetements-enfant' component={Kids} exact />
        <Route  path='/category/ordinateurs-and-tvs' component={Comp} exact />
        <Route  path='/category/others' component={Other} exact />
        <Route  path='/category/decoration' component={Decoration} exact />
        <Route  path='/category/meubles' component={Meuble} exact />
        <Route  path='/category/maquillages' component={Makeup} exact />
        <Route  path='/category/accesoires' component={Accessories} exact />











        


        
        
        <Route exact path='/cart' component={Cart} exact />
        <ProtectedRoutes exact path='/shipping' component={Shipping} />
        <ProtectedRoutes exact path='/order/confirm' component={ConfirmOrder} />
        <ProtectedRoutes exact path='/orders/me' component={ListOrders} />
        <ProtectedRoutes exact path='/order/:id' component={OrderDetails} />


        <ProtectedRoutes exact path='/success' component={OrderSuccess} />



        <ProtectedRoutes  path='/me' component={Profile} exact />
        <ProtectedRoutes  path='/me/update' component={UpdateProfile} exact />
        <ProtectedRoutes  path='/password/update' component={UpdatePassword} exact />

        
        <ProtectedRoutes  path='/dashboard' isAdmin={true} component={Dashboard} exact />
        <ProtectedRoutes  path='/admin/products' isAdmin={true} component={ProductsList} exact />
        <ProtectedRoutes  path='/admin/product' isAdmin={true} component={NewProduct} exact />
        <ProtectedRoutes  path='/admin/product/:id' isAdmin={true} component={UpdateProduct} exact />
        <ProtectedRoutes  path='/admin/orders' isAdmin={true} component={OrdersList} exact />
        <ProtectedRoutes  path='/admin/order/:id' isAdmin={true} component={ProcessOrder} exact />
        <ProtectedRoutes  path='/admin/users' isAdmin={true} component={UsersList} exact />
        <ProtectedRoutes  path='/admin/user/:id' isAdmin={true} component={UpdateUser} exact />
        <ProtectedRoutes  path='/admin/reviews' isAdmin={true} component={ProductReviews} exact />
        <ProtectedRoutes  path='/admin/category' isAdmin={true} component={CategoryCreate} exact />
        <ProtectedRoutes  path='/admin/category' isAdmin={true} component={CategoryCreate} exact />
        <ProtectedRoutes  path='/admin/categories' isAdmin={true} component={CategoryList} exact />
        <ProtectedRoutes  path='/admin/sub' isAdmin={true} component={SubCreate} exact />
        <ProtectedRoutes  path='/admin/subs' isAdmin={true} component={ListSub} exact />















        <Route  path='/search/:keyword' component={Homepage2} />
        <Route  path='/Home2' component={Homepage2} />
        <Route  path='/login' component={LogIn} />
        <Route  path='/signup' component={Signup} />
        <Route  path='*' component={NotFound} />
      </Switch>
    </div>

  );
}

export default App;
