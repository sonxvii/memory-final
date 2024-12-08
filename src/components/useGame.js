import { useState } from "react";


    export default function useGame(images) {
        const [finishedItems, setFinishedItems] = useState([]);
        const [stepsCount, setStepsCount] = useState(0);
    
        const random = () => {
            images.push = Math.random() - 0.5;
        }

        const checkItems = (firstItem, secondItem) => {
            const firstImage = images.find(({id}) => id === firstItem);
            const secondImage = images.find(({id}) => id === secondItem);
    
            if (firstImage.url === secondImage.url) {
                setFinishedItems((items) => [...items, firstItem, secondItem]);
            }
            setStepsCount((i) => i + 1);
            };
    
            const handleReset = () => {
                setFinishedItems([]);
                setStepsCount(0);
                random();
            };
    
            const isWin = finishedItems.length > 0 && finishedItems.length === images.length;
    
            return{
                finishedItems,
                handleReset,
                stepsCount,
                checkItems,
                isWin
            };
        }
