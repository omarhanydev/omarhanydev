import Header from "./components/Header/Header"
import SideProfile from "./components/SideProfile/SideProfile"
import './App.scss'
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section"
import { Stack } from 'react-bootstrap';
import CardChip from "./components/CardChip/CardChip"
import { SiUdacity } from "react-icons/si";

function App() {
  return (
    <>
      <Header />
      <div className="container main-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="side-profile-wrapper">
              <SideProfile />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content-wrapper">
              <Hero />
              <hr />
              <Section title='Working Experience'>
                <Stack direction="vertical" gap={2}>
                  <CardChip icon={<img src='/img/work-experience/izam.jpeg' alt='Izam inc.' />} title='Senior Front-end Developer' subtitle='Izam inc.' date='2019 - Present' />
                  <CardChip icon={<img src='/img/work-experience/xdev.svg' alt='XDev' />} title='Front-end Developer' subtitle='XDev' date='2016 - 2019' />
                </Stack>
              </Section>
              <hr />
              <Section title='Certificates'>
                <Stack direction="vertical" gap={2}>
                  <CardChip icon={<SiUdacity />} title='React Developer Nanodegree' subtitle='React.js, Redux and React Native' date='Udacity' url='https://confirm.udacity.com/LENTMFSD' />
                </Stack>
              </Section>
              <hr />
              <Section title='Skills'>
                <h6>Languages:</h6>
                <div class="d-flex align-items-center flex-wrap gap-2 mb-4">
                  <span className="badge text-bg-light border border-dark">HTML</span>
                  <span className="badge text-bg-light border border-dark">CSS</span>
                  <span className="badge text-bg-light border border-dark">JavaScript</span>
                  <span className="badge text-bg-light border border-dark">TypeScript</span>
                  <span className="badge text-bg-light border border-dark">PHP</span>
                </div>
                <h6>Frameworks, Libraries, Preprocessors & Bundlers:</h6>
                <ul>
                  <li>
                    <strong class="d-block mb-1">Front-end Development:</strong>
                    <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                      <span className="badge text-bg-light border border-dark">jQuery</span>
                      <span className="badge text-bg-light border border-dark">SASS</span>
                      <span className="badge text-bg-light border border-dark">Bootstrap</span>
                      <span className="badge text-bg-light border border-dark">Tailwind</span>
                      <span className="badge text-bg-light border border-dark">Materialize</span>
                      <span className="badge text-bg-light border border-dark">React</span>
                      <span className="badge text-bg-light border border-dark">Redux</span>
                      <span className="badge text-bg-light border border-dark">Angular +4</span>
                      <span className="badge text-bg-light border border-dark">Vue.js</span>
                      <span className="badge text-bg-light border border-dark">Gulp</span>
                      <span className="badge text-bg-light border border-dark">Webpack</span>
                      <span className="badge text-bg-light border border-dark">Vite</span>
                    </div>
                  </li>
                  <li>
                    <strong class="d-block mb-1">Mobile App Development:</strong>
                    <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                      <span className="badge text-bg-light border border-dark">React Native</span>
                    </div>
                  </li>
                  <li>
                    <strong class="d-block mb-1">Desktop App Development:</strong>
                    <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                      <span className="badge text-bg-light border border-dark">Electron.js</span>
                    </div>
                  </li>
                  <li>
                    <strong class="d-block mb-1">Back-end Development:</strong>
                    <div class="d-flex align-items-center flex-wrap gap-2 mb-4">
                      <span className="badge text-bg-light border border-dark">Laravel</span>
                      <span className="badge text-bg-light border border-dark">Node.js</span>
                      <span className="badge text-bg-light border border-dark">Express.js</span>
                    </div>
                  </li>
                </ul>
                <h6>WordPress:</h6>
                <div class="d-flex align-items-center flex-wrap gap-2 mb-4">
                    <span className="badge text-bg-light border border-dark">Theme Development</span>
                    <span className="badge text-bg-light border border-dark">Metaboxes</span>
                    <span className="badge text-bg-light border border-dark">WooCommerce</span>
                    <span className="badge text-bg-light border border-dark">Page Templates</span>
                    <span className="badge text-bg-light border border-dark">CMB2</span>
                    <span className="badge text-bg-light border border-dark">Custom Post Types</span>
                    <span className="badge text-bg-light border border-dark">WPML</span>
                    <span className="badge text-bg-light border border-dark">WPJM</span>
                </div>
                <h6>Methodologies & Patterns:</h6>
                <ul>
                  <li>
                    <strong class="d-block mb-1">CSS:</strong>
                    <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                      <span className="badge text-bg-light border border-dark">BEM</span>
                      <span className="badge text-bg-light border border-dark">SMACSS</span>
                      <span className="badge text-bg-light border border-dark">Prefixed SMACSS</span>
                      <span className="badge text-bg-light border border-dark">OOCSS</span>
                    </div>
                  </li>
                  <li>
                    <strong class="d-block mb-1">JavaScript:</strong>
                    <div class="d-flex align-items-center flex-wrap gap-2 mb-4">
                      <span className="badge text-bg-light border border-dark">OOP JavaScript</span>
                      <span className="badge text-bg-light border border-dark">Data Attribute Selectors for JavaScript</span>
                    </div>
                  </li>
                </ul>
                <h6>Template Languages, Tools & Other:</h6>
                <div class="d-flex align-items-center flex-wrap gap-2 mb-4">
                  <span className="badge text-bg-light border border-dark">Laravel Blade</span>
                  <span className="badge text-bg-light border border-dark">JSX</span>
                  <span className="badge text-bg-light border border-dark">EJS</span>
                  <span className="badge text-bg-light border border-dark">Shopify Liquid</span>
                  <span className="badge text-bg-light border border-dark">Git</span>
                  <span className="badge text-bg-light border border-dark">Chrome DevTools</span>
                  <span className="badge text-bg-light border border-dark">Adobe XD</span>
                  <span className="badge text-bg-light border border-dark">Figma</span>
                  <span className="badge text-bg-light border border-dark">Adobe Illustrator</span>
                  <span className="badge text-bg-light border border-dark">Adobe Photoshop</span>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
