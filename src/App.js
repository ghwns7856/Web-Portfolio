import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';

import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import './App.css';


class App extends Component {

  offsetWidth() {
    if (window.document.body.offsetWidth < 768) {
      return <span className="touch-guide">터치하여 계속 보기</span>
    }
    else {
      return <span className="touch-guide">슬라이드하여 계속 보기</span>
    }
  };

  giudeMsg() {
    if (window.document.body.offsetWidth < 768) {
      return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 터치하여 계속 보기</span>
    }
    else {
      return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 슬라이드하여 계속 보기</span>
    }
  };

 render() {
   return (
    <div className="App">
      <CarouselProvider
        visibleSlides={1}
        orientation="vertical"
        totalSlides={5} // 추가되는대로 변경해야함
        step={1}
        touchEnabled={false}
      >
        <Slider>
          <Slide index={0}>
            <div className="page-1">
              <span className="fa fa-check-circle react-msg" aria-hidden="true"> Developed by React</span>
              {this.giudeMsg()}
              <div className="container-fluid">
                <div className="page-1-content">
                  <p className="page-1-p">안녕하세요.</p>
                  <h1>Full Stack 지향 개발자 <strong>김호준</strong>입니다.</h1>
                  <p><a className="btn btn-dark" href="https://github.com/ghwns7856" role="button" target="_blank">
                    <span className="fa fa-github" aria-hidden="true"></span>
                    &nbsp; Github</a></p>
                </div>
                <ButtonNext className="to-bottom-first">
                  {this.offsetWidth()}
                  <br />
                  <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </div>
          </Slide>

          <Slide index={1}>
            <Page2 />
          </Slide>

          <Slide index={2}>
            <Page3 />
          </Slide>

          <Slide index={3}>
            <Page4 />
          </Slide>

          <Slide index={4}>
            <Page5 />
          </Slide>

        </Slider>
      </CarouselProvider>
    </div>
   );
 }
}

export default App;
