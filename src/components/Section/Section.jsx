import { forwardRef } from 'react';
import './Section.scss';

const Section = forwardRef(function Section({ title, children }, ref) {
    return <>
        <section className='section' ref={ref}>
            {title && <h5 className='section-title'>{title}</h5>}
            {children}
        </section>
    </>
});

export default Section;