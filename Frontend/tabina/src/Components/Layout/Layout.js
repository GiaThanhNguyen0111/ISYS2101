import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

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
            <Navbar />
            <main>{this.props.children}</main>
            <Footer />
        </>
        )
    }
}
export default Layout;