import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Page3 extends Component {
    render() {
        return(
            <div className="page-3">
                <ButtonBack className="to-top-project">
                    <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="container-fluid">
                    <div className="">
                        <div className="title-wrapper">
                            <h2 className="project-title-p3"><strong>스마트폰 음성인식 기반의 스마트 미러</strong></h2>
                            <h4 className="sub-title">IoT Project</h4>
                        </div>
                        <div className="content-wrapper row">
                            <div className="col-md-6 video-wrapper">
                                <div className="embed-responsive embed-responsive-16by9 media">
                                    <iframe title="project1" className="embed-responsive-item project-video" src="https://www.youtube.com/embed/JCPKE8XqV7o" frameBorder="0" gesture="media" allowFullScreen />
                                </div>
                                <div className="btn-wrapper">
                                    <div className="btn-group" role="group" aria-label="button group">
                                        <form action="https://drive.google.com/file/d/1ZUmzYD1FvhpaODYM-30_MZib8mbnz3qm/view?usp=sharing" target="_blank">
                                            <button type="submit" className="btn btn-info-link btn-outline-secondary">
                                                <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                                                &nbsp;Thesis
                                            </button>
                                        </form>
                                            <form action="https://drive.google.com/file/d/1lASBiRBEXfz84p-ruIlWxm8bR7e6985q/view?usp=sharing" target="_blank">
                                            <button type="submit" className="btn btn-info-link btn-outline-secondary">
                                                <span className="fa fa-file" aria-hidden="true"></span>
                                                &nbsp;Report
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ul className="info" class="text-left">
                                    <li className="info-list">
                                        <h4 className="content-title"><span className="fa fa-info"></span>&nbsp;<strong>개요</strong></h4>
                                        <p className="fa fa-comments" aria-hidden="true">  현대인의 일상생활에서 밀접한 거울을 통하여 필요한 정보를 제공받는다면<br />
                                        &emsp;&nbsp;효율적인 시간관리는 물론 편의성까지 제공되지 않을까?</p>
                                    </li>
                                    <li className="info-list">
                                        <h4 className="content-title"><span className="fa fa-info"></span>&nbsp;<strong>역할</strong></h4>
                                        <ul className="content-did-work">
                                            <li className="fa fa-cog">  음성 인식 기능 구현 및 데이터 처리</li><br />
                                            <li className="fa fa-cog">  날씨, 지하철, 동영상 API</li>
                                        </ul>
                                    </li>
                                    <li className="info-list">
                                        <h4 className="content-title"><span className="fa fa-info"></span>&nbsp;<strong>Spec</strong></h4>
                                        <ul className="content-did-work">
                                            <li className="fa fa-check">  서버 : Express</li><br />
                                            <li className="fa fa-check">  음성 인식 : Annyang API</li><br />
                                            <li className="fa fa-check">  주요 기능 : 영상 참조</li>
                                        </ul>
                                    </li>
                                    <h4 className="content-title"><span className="fa fa-cogs"></span>&nbsp;<strong>Tech</strong></h4>
                                    <code>Node.js</code>&nbsp;<code>Android Studio</code>&nbsp;<code>Raspberry Pi</code>&nbsp;<code>Electron</code>
                                </ul>
                            </div>
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

export default Page3;