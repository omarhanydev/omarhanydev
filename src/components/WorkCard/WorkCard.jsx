import './WorkCard.scss'

function WorkCard({ thumbnail, name, description, url }) {
    return <>
        <a href={url} className="work-card" target='_blank'>
            {thumbnail &&
                <div className="thumbnail">
                    {thumbnail}
                </div>
            }
            <h6 className="name">
                {name}
            </h6>
            <p className="description">
                {description}
            </p>
        </a>
    </>;
}

export default WorkCard;