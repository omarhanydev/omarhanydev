import { Button, Stack } from 'react-bootstrap';
import './Hero.scss';

function Hero() {
    return <>
        <section className="hero-section">
            <h3>Passionate creating pixel-perfect with great user experience websites.</h3>
            <Stack className="actions" direction="horizontal" gap={2}>
                <Button href="tel:+201025018036" className='button-primary' variant={null}>
                    Talk with me
                </Button>
                <Button href="" className='button-secondary' variant={null}>
                    See my work
                </Button>
            </Stack>
        </section>
    </>
}

export default Hero;