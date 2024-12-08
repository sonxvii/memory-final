import './Grid.css';

import { useState } from "react";
import Card from "../card/Card";
// import { images } from "../../data.js";


export default function Grid({ images, finishedItems, checkItems }) {
    const [visibleItems, setVisibleItems] = useState([]);

    const handleCardClick = (id) => {
        if (finishedItems.includes(id) || visibleItems.includes(id)) {
            return;
        }

        switch (visibleItems.length) {
            case 0: 
            setVisibleItems([id]);
            break;

            case 1:
                setVisibleItems((items) => [...items, id]);
                checkItems(visibleItems[0], id);
                setTimeout(() => {
                    setVisibleItems([]);
                }, 1000);
                break;
                default: 
                setVisibleItems([]);
        }
    }
    return (
        <div className='grid'>
            {images.map((item) => (
                <Card
                key={item.id}
                item={item}
                isVisible={visibleItems.includes(item.id)}
                isFinished={finishedItems.includes(item.id)}
                onCardClick={handleCardClick}
                />
            ))}
        </div>
    );
    // return (
    //     <div className="grid"> 
    //         {images.map((item) => (
    //             <Card
    //                 key={item.id} 
    //                 url={item.url}
    //                 />
    //         ))}
          
    //     </div>
    // );
}
