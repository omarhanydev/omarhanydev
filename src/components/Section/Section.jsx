import './Section.scss';

function Section({ title, children }) {
    return <>
        <section className='section'>
            {title && <h5 className='section-title'>{title}</h5>}
            {children}
        </section>
    </>
}

export default Section;