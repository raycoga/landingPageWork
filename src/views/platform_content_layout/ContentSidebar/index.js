import React, { memo } from 'react';
import './sidebar.scss'
const Index = memo(() => {
    return (
        <div className="container-sidebar">
            <div className="logo-sidebar">
                <div onClick={() => alert("le di click para fijar el sidebar")} className="button"></div>
            </div>
            <div className="user-sidebar">
                asd
            </div>
        </div>
    );
});

export default Index;