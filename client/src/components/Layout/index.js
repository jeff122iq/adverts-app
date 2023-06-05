import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {ChildrenWrapper, LayoutWrapper} from "./styled";

const Layout = ({children}) => {
    return (
        <LayoutWrapper>
            <Header/>
                <ChildrenWrapper>
                    {children}
                </ChildrenWrapper>
            <Footer/>
        </LayoutWrapper>
    );
};

export default Layout;