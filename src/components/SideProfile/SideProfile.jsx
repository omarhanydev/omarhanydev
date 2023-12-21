import { Button, Stack, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AttentionSeeker } from "react-awesome-reveal";
import './SideProfile.scss'

function SideProfile() {
    return <>
        <div className="side-profile">
            <img src="/img/me.png" alt="Omar Hany" />
            <h1 className='d-flex'>I'm Omar Hany <AttentionSeeker effect='heartBeat'>👋</AttentionSeeker></h1>
            <h2>Front-end Developer</h2>
            <h3>I like to craft solid and scalable frontend products with great user experiences.</h3>
            <Stack direction="horizontal" gap={2} className='social-links'>
                <OverlayTrigger
                    overlay={(props) => (
                        <Tooltip {...props}>
                            Phone
                        </Tooltip>
                    )}
                >
                    <Button href='tel:+201025018036' target="_blank" variant={null} className='button-secondary'>
                        <FaPhoneAlt />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(props) => (
                        <Tooltip {...props}>
                            Email address
                        </Tooltip>
                    )}
                >
                    <Button href='mailto:omarhany.dev@gmail.com' target="_blank" variant={null} className='button-secondary'>
                        <FaEnvelope />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(props) => (
                        <Tooltip {...props}>
                            Github
                        </Tooltip>
                    )}
                >
                    <Button href='https://github.com/omarhanydev' target="_blank" variant={null} className='button-secondary'>
                        <FaGithub />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(props) => (
                        <Tooltip {...props}>
                            LinkedIn
                        </Tooltip>
                    )}
                >
                    <Button href='https://www.linkedin.com/in/omarhanydev/' target="_blank" variant={null} className='button-secondary'>
                        <FaLinkedinIn />
                    </Button>
                </OverlayTrigger>
            </Stack>
        </div>
    </>
}

export default SideProfile;