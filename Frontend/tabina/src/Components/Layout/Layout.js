import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../Css/layout/layout.css';

// const Layout = () => {
//     return (
//         <>
//         <Navbar />
//         <main>{this.props.children}</main>
//         <Footer />
//         </>
//     )
// }

class Layout extends React.Component {
    render(){
        return (
        <>
        <div className='layout-container'>
            {/* <Navbar /> */}
            <main>{this.props.children}</main>
            <Footer />
        </div>
        </>
        )
    }
}
export default Layout;