import React, { memo } from 'react';
import handleChange from '../handleChange'
const Selector = memo(({ signUpForm, setsignUpForm, itemsSelector, atribute, classNameContainer }) => {

    const arrayli = itemsSelector.map((res, key) => {
        return (
            <li key={key} onClick={() => handleChange({ target: { name: atribute, value: res._id } }, signUpForm, setsignUpForm)}>{res.option}</li>
        )
    })
    const name = () => {
        const aux = itemsSelector.map((res, key) => {
            if (res._id === signUpForm[atribute]) {
                return res.option
            }else{
                return ''
            }
        })

        return aux
    }
    return (
        <div className={classNameContainer} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{name()}</span>
                <i className="fas fa-caret-down"></i>
            </div>
            <ul >
                {arrayli}
            </ul>
        </div>
    )

});

export default Selector;