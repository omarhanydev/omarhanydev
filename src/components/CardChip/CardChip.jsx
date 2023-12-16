import { LuArrowUpRight } from "react-icons/lu";
import './CardChip.scss';

function CardChip({ icon, title, subtitle, date, url}) {
    const Tag = `${url ? 'a' : 'div'}`;
    return <>
        <Tag href={url} target={url ? '_blank' : null} className='card-chip'>
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                <h6 className="title">{title}</h6>
                <p className="subtitle">{subtitle}</p>
            </div>
            <div className="date">
                {date}
            </div>
            <div className="external">
                {url && <LuArrowUpRight />}
            </div>
        </Tag>
    </>
}

export default CardChip;