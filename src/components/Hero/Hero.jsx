import { Button, Stack } from 'react-bootstrap';
import { Fade, Slide } from "react-awesome-reveal";
import { useWindowScroll } from "@uidotdev/usehooks";
import './Hero.scss';

function Hero({ worksRef, isMobile }) {
    const [{ x, y }, scrollTo] = useWindowScroll();

    return <>
        <section className="hero-section">
            <Fade triggerOnce={true}>
                <h3 className='d-block d-lg-none'>
                    Passionate creating pixel-perfect with great user experience websites.
                </h3>
            </Fade>
            <h3 className='d-none d-lg-block'>
                <Fade cascade damping={0.04} triggerOnce={true}>
                    Passionate creating pixel-perfect
                </Fade>
                <Fade cascade damping={0.05} triggerOnce={true} delay={1400}>
                    with great user experience
                </Fade>
                <Fade cascade damping={0.05} triggerOnce={true} delay={2900}>
                    websites.
                </Fade>
            </h3>
            <Slide direction="up" duration={200} triggerOnce={true}>
                <Fade direction="up" delay={isMobile ? 0 : 3600} duration={1000} triggerOnce={true}>
                    <Stack className="actions" direction="horizontal" gap={2}>
                        <Button href="tel:+201025018036" className='button-primary' variant={null}>
                            Talk with me
                        </Button>
                        <Button className='button-secondary' onClick={() => scrollTo({ left: 0, top: worksRef.current.getBoundingClientRect().top + window.pageYOffset - 70, behavior: "smooth" })} variant={null}>
                            See my work
                        </Button>
                    </Stack>
                </Fade>
            </Slide>
        </section>
    </>
}

export default Hero;