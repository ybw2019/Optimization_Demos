import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/use-intersection-observer';
import Image from './image';
import './image-container.css';

const ImageContainer = (props) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => { //回调函数第一个参数固定为数组，其中的每一个成员为一个对象（详见https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html）。第二个参数observerElement代表当前监视器对象
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref.current);
            }
        }
    });
    const aspectRatio = (props.height / props.width) * 100;
    return (
        <div
            ref={ref}
            className="image-container"
            style={{ paddingBottom: `${aspectRatio}%` }} //padding和margin值为百分比时，其值为其父元素的width值*对应的百分比
        >
            {
                isVisible && (
                    <Image className="image" src={props.src} thumb={props.thumb} alt={props.alt} />
                )
            }
        </div>
    );
};

export default ImageContainer;