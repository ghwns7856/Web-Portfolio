import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import Typed from 'typed.js';
import Profile from '../profile.jpg'

class Page2 extends Component {
    componentDidMount() {
        const options = {
            strings: ["HTML5", "CSS3", "Javascript", "Node.js", "React", "JAVA"],
            typeSpeed: 150,
            startDelay: 500,
            backSpeed: 100,
            backDelay: 1300,
            loop: true,
        }
        this.typed = new Typed(this.el, options); 
    }
    // 메모리 누수 방지
    componentWillUnmount() {
        this.typed.destroy(); 
    }

    render() {
        return(
            <div className="page-2">
                <ButtonBack className="to-top">
                    <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="container-fluid">
                    <div className="title-wrapper">
                        <h2 className="profile-title">저는 이런 사람입니다.</h2>
                        <h4 className="sub-title">
                        <strong id="typed" style={{ whiteSpace: "pre" }} ref={(el) => { this.el = el; }}></strong> developer</h4>
                    </div>
                        <div className="row profile-wrapper">
                            <div className="col-md-6 profile-image">
                                <img src={Profile} alt="Profile image" class="img-thumbnail" />
                            </div>
                            <div className="col-md-6 profile-info">
                                <ul className="info-wrapper">
                                    <li className="info-comment">
                                        <h5 className="content-title" class="text-left"><span className="fa fa-code" aria-hidden="true"></span>  <strong>김 호 준 (1992.06.10)</strong>
                                        <br />
                                        <small class="text-muted"><p class="text-left">   Always thinking new and challenge</p></small>
                                        </h5>
                                    </li>
                                    <br />
                                    <li className="info-comment">
                                        <h4 className="content-title" class="text-left"><span className="fa fa-road" aria-hidden="true"><strong> History</strong></span></h4>
                                        <ul class="text-left" className="history-list">
                                            <li class="text-left">충남 공주고등학교 졸업 (2011)</li>
                                            <li class="text-left">한국철도기술연구원 ICT융합신기술연구팀 일용 (2017.10~12)</li>
                                            <li class="text-left">한국교통대학교 컴퓨터정보공학과 졸업 (2018.2)</li>
                                        </ul>
                                        <br />
                                        <h4 className="content-title" class="text-left"><span className="fa fa-id-card" aria-hidden="true"><strong> License</strong></span></h4>
                                        <ul class="text-left" className="License-list">
                                            <li class="text-left">정보처리기사 (2017.5 취득)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                <ButtonNext className="to-bottom">
                    <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                </ButtonNext>
                </div>
            </div>
        );
    }
}

export default Page2; 
