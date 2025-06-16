import React from 'react';
import Header from "@/common/Header";

const BaseLayout = ({children}) => {
    return (
        <div className={ "wrapper" }>
            <Header/>
            {children}
        </div>
    );
};

export default BaseLayout;