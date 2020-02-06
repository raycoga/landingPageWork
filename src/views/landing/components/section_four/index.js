import React from 'react';
import './four.scss'
import screens from '../../../../images/screens.png'
import ScrollAnimation from 'react-animate-on-scroll';

const index = () => {
    /* window.addEventListener("scroll", function(event) {
        let top = this.scrollY
      console.log(top,obj)

    }, false); */

    return (
        <div className="container-four">
            <div className="container-background">

            </div>
            <ScrollAnimation animateIn='slideInUp' className="container-image">
                <img src={screens} /* className='animated  slideInUp delay-2s' */ alt="screens" />
            </ScrollAnimation>



        </div>
    );
};

export default index;