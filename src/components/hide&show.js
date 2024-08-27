import { useState } from "react"

export const HideShow = ({randomProp}) => {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <button onClick={toggleVisibility}>
                <h1>{randomProp}</h1>
                {isVisible ? 'Hide Component' : 'Show Component'}
            </button>
            {isVisible && <ChildComponent  newProp={randomProp} />}
        </>
    );
};

const ChildComponent = ({newProp}) => {

    return <>
    <h1>{newProp}</h1>
    This is the Child Component.
    </>

};
