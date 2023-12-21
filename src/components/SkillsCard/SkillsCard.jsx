import './SkillsCard.scss'

function SkillsCard() {
    return <>
        <div className="card bg-white p-4 skills-card">
            <h6 className="mb-3"><strong>Languages:</strong></h6>
            <div className="d-flex align-items-center flex-wrap gap-2">
                <span className="badge text-body-secondary border border-dark">HTML</span>
                <span className="badge text-body-secondary border border-dark">CSS</span>
                <span className="badge text-body-secondary border border-dark">JavaScript</span>
                <span className="badge text-body-secondary border border-dark">TypeScript</span>
                <span className="badge text-body-secondary border border-dark">PHP</span>
            </div>
            <div className="py-2">
                <hr />
            </div>
            <h6 className="mb-3"><strong>Frameworks, Libraries, Preprocessors & Bundlers:</strong></h6>
            <ul>
                <li>
                    <p className="mb-1">Front-end Development:</p>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                        <span className="badge text-body-secondary border border-dark">jQuery</span>
                        <span className="badge text-body-secondary border border-dark">SASS</span>
                        <span className="badge text-body-secondary border border-dark">Bootstrap</span>
                        <span className="badge text-body-secondary border border-dark">Tailwind</span>
                        <span className="badge text-body-secondary border border-dark">Materialize</span>
                        <span className="badge text-body-secondary border border-dark">React</span>
                        <span className="badge text-body-secondary border border-dark">Redux</span>
                        <span className="badge text-body-secondary border border-dark">Angular +4</span>
                        <span className="badge text-body-secondary border border-dark">Vue.js</span>
                        <span className="badge text-body-secondary border border-dark">Gulp</span>
                        <span className="badge text-body-secondary border border-dark">Webpack</span>
                        <span className="badge text-body-secondary border border-dark">Vite</span>
                    </div>
                </li>
                <li>
                    <p className="mb-1">Mobile App Development:</p>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                        <span className="badge text-body-secondary border border-dark">React Native</span>
                    </div>
                </li>
                <li>
                    <p className="mb-1">Desktop App Development:</p>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                        <span className="badge text-body-secondary border border-dark">Electron.js</span>
                    </div>
                </li>
                <li>
                    <p className="mb-1">Back-end Development:</p>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-0">
                        <span className="badge text-body-secondary border border-dark">Laravel</span>
                        <span className="badge text-body-secondary border border-dark">Node.js</span>
                        <span className="badge text-body-secondary border border-dark">Express.js</span>
                    </div>
                </li>
            </ul>
            <div className="py-2">
                <hr />
            </div>
            <h6 className="mb-3"><strong>WordPress:</strong></h6>
            <div className="d-flex align-items-center flex-wrap gap-2 mb-0">
                <span className="badge text-body-secondary border border-dark">Theme Development</span>
                <span className="badge text-body-secondary border border-dark">Metaboxes</span>
                <span className="badge text-body-secondary border border-dark">WooCommerce</span>
                <span className="badge text-body-secondary border border-dark">Page Templates</span>
                <span className="badge text-body-secondary border border-dark">CMB2</span>
                <span className="badge text-body-secondary border border-dark">Custom Post Types</span>
                <span className="badge text-body-secondary border border-dark">WPML</span>
                <span className="badge text-body-secondary border border-dark">WPJM</span>
            </div>
            <div className="py-2">
                <hr />
            </div>
            <h6 className="mb-3"><strong>Methodologies & Patterns:</strong></h6>
            <ul>
                <li>
                    <p className="mb-1">CSS:</p>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                        <span className="badge text-body-secondary border border-dark">BEM</span>
                        <span className="badge text-body-secondary border border-dark">SMACSS</span>
                        <span className="badge text-body-secondary border border-dark">Prefixed SMACSS</span>
                        <span className="badge text-body-secondary border border-dark">OOCSS</span>
                    </div>
                </li>
                <li>
                    <p className="mb-1">JavaScript:</p>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-0">
                        <span className="badge text-body-secondary border border-dark">OOP JavaScript</span>
                        <span className="badge text-body-secondary border border-dark">Data Attribute Selectors for JavaScript</span>
                    </div>
                </li>
            </ul>
            <div className="py-2">
                <hr />
            </div>
            <h6 className="mb-3"><strong>Template Languages, Tools & Other:</strong></h6>
            <div className="d-flex align-items-center flex-wrap gap-2 mb-0">
                <span className="badge text-body-secondary border border-dark">Laravel Blade</span>
                <span className="badge text-body-secondary border border-dark">JSX</span>
                <span className="badge text-body-secondary border border-dark">EJS</span>
                <span className="badge text-body-secondary border border-dark">Shopify Liquid</span>
                <span className="badge text-body-secondary border border-dark">Git</span>
                <span className="badge text-body-secondary border border-dark">Chrome DevTools</span>
                <span className="badge text-body-secondary border border-dark">Adobe XD</span>
                <span className="badge text-body-secondary border border-dark">Figma</span>
                <span className="badge text-body-secondary border border-dark">Adobe Illustrator</span>
                <span className="badge text-body-secondary border border-dark">Adobe Photoshop</span>
            </div>
        </div>
    </>
}

export default SkillsCard;