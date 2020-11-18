/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './Navbar';
export {default as UserHome} from './User-Home';
export {default as Header} from './Header';
//login/signup
export {Login} from './auth-form';
export {default as Signup} from './Signup';
export {default as MyAccount} from './MyAccount'; //user panel
//cart
export {default as Cart} from './Cart';

//products
export {default as AllProducts} from './AllProducts';
export {default as SingleProduct} from './SingleProduct';
//admin
export {default as Admin} from './Admin';
export {default as SingleUser} from './SingleUser';

//checkout
export {default as Checkout} from './Checkout';
export {default as Payment} from './Payment';
export {default as Success} from './Success';
export {default as Confirmation} from './Confirmation';
