import "./detailCard.css"

export default function DetailCard({ cardInfo, id }) {
    return (
        <div className="detail-card" key={id}>
            <h4 className="feature-name">{cardInfo.feature}</h4>
            <p className="feature-description">{cardInfo.description}</p>
            <div className="feature-skills">
                {cardInfo.skills.map((skill, indx) => (
                    <p className="feature-skill" key={indx}>{skill}</p>
                ))}
            </div>
        </div>
    )
};
