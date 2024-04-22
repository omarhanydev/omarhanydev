import { useRef } from "react"
import Header from "./components/Header/Header"
import SideProfile from "./components/SideProfile/SideProfile"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section"
import { Stack } from 'react-bootstrap';
import CardChip from "./components/CardChip/CardChip"
import { SiUdacity } from "react-icons/si";
import SkillsCard from "./components/SkillsCard/SkillsCard"
import WorkCard from "./components/WorkCard/WorkCard"
import { Fade, Slide } from "react-awesome-reveal";
import './App.scss'
import { FaGithub, FaGlobe } from "react-icons/fa"

function App() {
  const worksRef = useRef(null);
  const isMobile = window.innerWidth > 768 ? false : true;
  
  return (
    <>
      <Header worksRef={worksRef} />
      <div className="container main-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="side-profile-wrapper">
              <SideProfile />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content-wrapper">
              <Hero worksRef={worksRef} isMobile={isMobile} />
              <Slide direction="up" duration={200} triggerOnce={true}>
                <Fade direction="up" delay={isMobile ? 0 : 3000} duration={isMobile ? 1000 : 2000} triggerOnce={true}>
                  <article>
                    <hr />
                    <Section title='Working Experience'>
                      <Stack direction="vertical" gap={2}>
                        <CardChip icon={<img src='/img/work-experience/izam.jpeg' alt='Izam inc.' />} title='Senior Front-end Developer' subtitle='Izam inc.' meta='2019 - Present' />
                        <CardChip icon={<img src='/img/work-experience/xdev.svg' alt='XDev' />} title='Front-end Developer' subtitle='XDev' meta='2016 - 2019' />
                      </Stack>
                    </Section>
                    <hr />
                    <Section title='Certificates'>
                      <Stack direction="vertical" gap={2}>
                        <CardChip icon={<SiUdacity />} title='React Developer Nanodegree' subtitle='React.js, Redux and React Native' meta='Udacity' url='https://confirm.udacity.com/LENTMFSD' />
                      </Stack>
                    </Section>
                    <hr />
                    <Section title='Skills'>
                      <SkillsCard />
                    </Section>
                    <hr />
                    <Section title='Works' ref={worksRef}>
                      <h6 className="mb-3"><strong>Product Modules and Landing Pages:</strong></h6>
                      <div className="pb-4">
                        <div className="row g-2">
                          <div className="col-lg-6">
                            <CardChip icon={<FaGlobe />} title='Daftra' subtitle='Cloud ERP System' url='https://www.daftra.com/' />
                          </div>
                          <div className="col-lg-6">
                            <CardChip icon={<FaGlobe />} title='Enerpize' subtitle='Cloud ERP System' url='https://www.enerpize.com/' />
                          </div>
                          <div className="col-lg-6">
                            <CardChip icon={<FaGlobe />} title='Tanqeeb' subtitle='Jobs search engine' url='https://www.tanqeeb.com/' />
                          </div>
                          <div className="col-lg-6">
                            <CardChip icon={<FaGlobe />} title='Online Invoices' subtitle='Cloud ERP System' url='https://www.onlineinvoices.com/' />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <h6 className="mb-3 mt-5"><strong>Front-end Development:</strong></h6>
                      <div className="pb-4">
                        <Stack direction="vertical" gap={2}>
                          <WorkCard thumbnail={<img src="/img/works/justpiece.png" alt="JustPiece" />} name='JustPiece' description='Largest Egyptian online shopping company specializing in displaying tools and spare parts related to industrial processes and maintenance.' url='https://justpiece.com/' />
                          <WorkCard thumbnail={<img src="/img/works/xdev.png" alt="XDev" />} name='XDev' description='A reliable technology partner for customized software solutions.' url='https://x-dev.tech/' />
                          <WorkCard thumbnail={<img src="/img/works/offeratko.png" alt="Offeratko" />} name='Offeratko' description='Mobile Application for Jordan offers in malls and electronic stores and tourism agencies.' url='https://offeratko.com/' />
                          <WorkCard thumbnail={<img src="/img/works/c-reality.png" alt="C.Reality" />} name='C.Reality' description='Innovative and authentic furniture designs company.' url='https://c-reality-front-end.vercel.app/' />
                          <WorkCard thumbnail={<img src="/img/works/go2globe.png" alt="Go2Globe" />} name='Go2Globe' description='Creative Marketing Solutions specialized in animations and illustrations.' url='https://go2globe.x-dev.tech/' />
                        </Stack>
                      </div>
                      <hr />
                      <h6 className="mb-3 mt-5"><strong>WordPress Development:</strong></h6>
                      <div className="pb-4">
                        <Stack direction="vertical" gap={2}>
                          <WorkCard thumbnail={<img src="/img/works/collective-routes.png" alt="Collective Routes" />} name='Collective Routes' description='An enquiry-driven collective committed to researching existing approaches, experimenting with new practices, and producing grounded knowledge in social change.' url='https://www.collectiveroutes.org/' />
                          <WorkCard thumbnail={<img src="/img/works/polti-me.png" alt="Polti Middle East" />} name='Polti Middle East' description='Polti household appliances to clean the home and irons with boilers.' url='https://polti-me.com/' />
                          <WorkCard thumbnail={<img src="/img/works/modern-door.png" alt="Modern Door" />} name='Modern Door' description='Company of Specialized in Automatic Doors with years of experience.' url='https://modern-door.com/' />
                        </Stack>
                      </div>
                      <hr />
                      <h6 className="mb-3 mt-5"><strong>Desktop Apps:</strong></h6>
                      <div className="pb-4">
                        <Stack direction="vertical" gap={2}>
                          <WorkCard thumbnail={<img src="/img/works/safe-movie-player.png" alt="Safe Movie Player" />} name='Safe Movie Player' description='A family-friendly movie player which have the ability to skip any unwanted scenes in the movie.' url='https://omarhanydev.github.io/safe-movie-player/' />
                        </Stack>
                      </div>
                      <hr />
                      <div className="mb-3 mt-4 pb-4">
                        <CardChip icon={<FaGithub />} title='Archived Projects' subtitle='' url='https://github.com/omarhanydev/archived-projects/' />
                      </div>
                    </Section>
                  </article>
                </Fade>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
