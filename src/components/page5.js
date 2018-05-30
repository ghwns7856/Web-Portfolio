import React, { Component } from 'react';
import { ButtonBack } from 'pure-react-carousel';

class Page5 extends Component {
    render() {
        return(
            <div className="page-5">
                <ButtonBack className="to-top-project">
                    <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="container-fluid">
                    <div className="page-5-image">
                        <img src="http://mouda.asia/file/parts/I0005919/8180a802739671fe02da1c15e77bca69.gif"  />
                    </div>
                        <p className="more-contact">귀한 시간내어 봐주셔서 감사합니다. <br /> 
                        더 자세한 저를 알고 싶으시다면 <br />
                        <p><a className="btn btn-dark btn-sm" href="https://drive.google.com/file/d/14XkC9e38Dbdt7PTCleTWOaISVvMDji3F/view?usp=sharing" role="button" target="_blank">
                            <span className=" fa fa-file-text" aria-hidden="true"></span>
                        &nbsp; Resume</a></p></p>
                        <p className="more-contact">연락은 언제나 환영입니다!</p>
                        <p><span className="fa fa-envelope" aria-hidden="true"></span> <a className="email" href="mailto:ghwns7856@naver.com"> ghwns7856@naver.com</a></p>
                </div>
            </div>
        );
    }
}

export default Page5; 
