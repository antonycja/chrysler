import "./detailCard.css"

export default function DetailCard({ cardInfo, id }) {
    return (
        <div className="detail-card" key={id}>
            <p className="feature"><span>{cardInfo.key}:</span></p>
            <p>
                {cardInfo.feature}</p>
        </div>
    )
};
