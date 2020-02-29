import React, { memo } from 'react';
/* Import Styles */
import './platformStyle.scss'
/* Import Components */
import Sidebar from './ContentSidebar'
import Navbar from './ContentNavbar'
import Content from './ContentRoutes'

const Index = memo(() => {
    return (
        <div className='container-layout'>
            <Sidebar />
            <div className="container-content">
                <Navbar />
                <Content />
            </div>
        </div>
    );
});

export default Index;