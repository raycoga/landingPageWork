import React, { memo } from 'react';
import './burger.scss'
const BurgerMenu = memo(({ toggle, change }) => {

    return (
        <div className={`container-burger ${toggle}`} onClick={change}>
            <button data-toggle="collapse" data-target="#collapseExample">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </button>

        </div>
    );
});

export default BurgerMenu;