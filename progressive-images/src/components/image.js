import React, { useState, Fragment } from 'react';
import './image.css';

const Image = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <Fragment>
            {/* 完整版图片未加载完成时显示的较小的图片 */}
            <img
                className="image thumb"
                alt={props.alt}
                src={props.thumb}
                style={{ visibility: isLoaded ? "hidden" : "visible" }}
            />
            {/* 完整版图片 */}
            <img
                onLoad={() => { //图片加载完成后立刻执行
                    setIsLoaded(true);
                }}
                className="image full"
                style={{ opacity: isLoaded ? 1 : 0 }}
                alt={props.alt}
                src={props.src}
            />
        </Fragment>
    );
};

export default Image;