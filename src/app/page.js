import Image from 'next/image'
import styles from '../css/style.scss'
import Header from '@/components/Header'
import About from '@/components/About'


export default function Home() {

  return (
    <main>
    <Header/>
    <div className="home">
    <About/>
    <div className="tools-section">
      <div id="tools" className="tools-title"><h1>Tools</h1></div>
      <div className="tools-box">
        <div className="box-content">
          <div className="box-icon"></div>
          <div className="box-text">React</div>
        </div>
        <div className="box-content">
          <div className="box-icon"></div>
          <div className="box-text">Javascript</div>
        </div>
        <div className="box-content">
          <div className="box-icon"></div>
          <div className="box-text">Node.js</div>
        </div>
        <div className="box-content">
          <div className="box-icon"></div>
          <div className="box-text">Express</div>
        </div>
      </div>
    </div>
    <div className="projects-section">
      <div id="projects" className="projects-title"><h2>Projects</h2></div>
      <div className="projects">
        <div className="projects-background"></div>
        <section className="slider">
{/*     <img>      left arrow placeholder
         <img> right arrow placeholder */}
         <div className="slide"></div>
         <div className="slide"></div>
         <div className="slide"></div>
         <div className="slide-active">
{/*           <img></img> */}
         	<div className="slide-detail">
            <h4>Garfield vs Veggies</h4>
            <p className="slide-description">A game description goes here
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum tellus leo, eu sagittis felis rutrum ut. Quisque sed rutrum augue, et pellentesque arcu. Nunc faucibus nulla id elit efficitur iaculis. Nunc in lacus ac libero eleifend tempor. Suspendisse sit amet accumsan mi. Praesent at sodales lectus. Sed commodo non ligula eu varius. In varius finibus volutpat. Nullam sed sagittis lacus.

Nulla orci velit, dictum sit amet hendrerit vel, varius nec mauris. Etiam tempus varius ligula, non suscipit nunc faucibus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget ultricies ex. Phasellus eu tellus sit amet sapien sagittis varius id ut sem. Nam elementum commodo consectetur. Proin porttitor malesuada turpis, eu viverra est accumsan a. Pellentesque sit amet elit iaculis, mollis nulla ac, tristique metus.

Morbi condimentum dolor id ex dictum, et suscipit nisl lobortis. Sed vulputate neque ut ante cursus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae hendrerit velit, at ultrices augue. Quisque sollicitudin interdum purus, et venenatis ex facilisis id. Sed facilisis sem dapibus, egestas eros ut, auctor nulla. Vestibulum sit amet purus rutrum, porttitor elit in, tempor neque.

Nam erat purus, faucibus in molestie vitae, ornare vitae arcu. Phasellus sapien velit, maximus vel convallis in, imperdiet non justo. Nullam rhoncus dolor eu euismod auctor. Aliquam ut nibh eget ante maximus aliquet. Curabitur tempor varius elit, nec luctus arcu sagittis vitae. Nullam non nibh suscipit, aliquet enim a, ullamcorper libero. Pellentesque eget neque facilisis, auctor lorem id, consectetur leo.

Quisque porttitor vitae massa a porttitor. Aenean ante risus, tincidunt in erat in, interdum faucibus purus. Pellentesque eget mollis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus et imperdiet risus, id tristique nisi. Morbi non purus ac risus pharetra vehicula. Etiam venenatis tortor eu purus aliquam, vel vehicula nisi convallis. Vivamus varius mattis metus a placerat. Ut non arcu ac sapien interdum rutrum vel id nulla. Morbi tempor in nibh eget consequat.
</p>
            <span>
              <p className="tool-stack">Javascript</p>
              <a href='https://mapmargaridapereira.github.io/Garfield-VS-Veggies/'>visit</a>
            </span>
          </div>
         </div>
        </section>
      </div>
    </div>
    <footer>
      <div className="social">
        <div id="connect" className="social-title">
          <h2>Connect</h2>
        </div>
      <div className="social-body">
      <a className="github-box" href="https://github.com/mapmargaridapereira" target="_blank"><p>Github</p></a>
      <a className="linkedin-box" href="https://www.linkedin.com/in/mapmargaridapereira/" target="_blank"><p>LinkedIn</p></a>
      </div>
      <a className="social-mail" href="mailto:map.margaridapereira@gmail.com">
        <div className="mail-box">
          <p>Send me an Email</p>
        </div>
      </a>
      </div>
      <div className="end-footer">
        <p>Built with love by Mag</p>
      </div>
    </footer>
    </div>
    </main>
  )
}
