import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Page4 extends Component {
    render() {
        return(
            <div className="page-4">
                <ButtonBack className="to-top-project">
                    <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="container">저는
                    <div className="flip">
                        <div><div>Improve</div></div>
                        <div><div>Trendy</div></div>
                        <div><div>Sensitive</div></div>
                    </div>
                    <div className="flip">
                        <div><div>끊임없이 나를 향상시키는</div></div>
                        <div><div>트렌드를 추구하는</div></div>
                        <div><div>세심하며 감성있는</div></div>
                    </div>
                     개발자가 되고싶습니다.
                </div>
                <ButtonNext className="to-bottom">
                    <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                </ButtonNext>
            </div>
        );
    }
}

export default Page4;