import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import Card from "./Card";

export default function CardSlider({data, title}) {
    const [showControls, setShowControls] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const listRef = useRef();

    const handleDirecion = (direction)

    return (
        <Container className="flex column"
        onMouseEnter = {() => setShowControls(true)}
        onMouseLeave = {() => setShowControls(false)}
        >
            <h1>{title}</h1>
            <div className="wrapper">
                <div className={`slider-action left ${
                    !showControls ? "none" : ""
                } flex j-center a-center`}>
                    <AiOutlineLeft onClick={() => handleDirecion("left")} />
                </div>
                <div className="flex slider" ref={listRef}>
                {data.map((movies,index) => {
                    return <Card movieData={movies} index={index} key={movies.id} />;
                    })
                }
                </div>
                <div className={`slider-action left ${
                    !showControls ? "none" : ""
                } flex j-center a-center`}>
                    <AiOutlineRight onClick={() => handleDirecion("right")} />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`

`;