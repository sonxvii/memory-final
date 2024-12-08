import './Card.css';
// import { useState } from "react";


export default function Card({ item, isVisible, isFinished, onCardClick }) {
    const {id, url } = item;
    const handleClick = () => {
        onCardClick(id);
    };
    const classCard = `card
    ${isVisible ? "card-finished" : ""}
    ${isFinished ? "card-finished" : ""}`;

    return (
        <div className={classCard} onClick={handleClick}>
            <img className='cards imagecards' src={url} alt="card" />
        </div>
    );
}
//         const [checkCard, setCheckCard] = useState(false);
    
//         const handleClick = () => {
//             setCheckCard(!checkCard);
//         }
    
//         let className = `card ${checkCard ? 'card-check' : ''}`;
        
//     return (
//         <div className={className} onClick={handleClick}>
//             <img className='cards imagecards' src={url} alt="card" />
//         </div>
//     )
// };