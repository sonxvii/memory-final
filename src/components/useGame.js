import { useState } from "react";

export default function useGame(images) {
    const [finishedItems, setFinishedItems] = useState([]); 
    const [stepsCount, setStepsCount] = useState(0); 

    const randomizeImages = () => {
        images.sort(() => Math.random() - 0.5);
    };

    // проверка совпадения
    const checkItems = (firstItem, secondItem) => {
        const firstImage = images.find(({ id }) => id === firstItem);
        const secondImage = images.find(({ id }) => id === secondItem);

        if (firstImage.url === secondImage.url) {
            setFinishedItems((prevItems) => [...prevItems, firstItem, secondItem]); 
        }


        setStepsCount((prevCount) => prevCount + 1);
    };


    const handleReset = () => {
        setFinishedItems([]); 
        setStepsCount(0); 
        randomizeImages(); 
    };

    
    const isWin = finishedItems.length > 0 && finishedItems.length === images.length;


    return {
        finishedItems,
        handleReset,
        stepsCount,
        checkItems,
        isWin,
    };
}
