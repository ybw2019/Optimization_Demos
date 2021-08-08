import { useEffect } from 'react';

const useIntersectionObserver = ({
    target, //指定被监视的DOM元素
    onIntersect, //可见性变化时调用的回调函数
    threshold = 0.5, //当目标10%可见时触发回调函数（若想设置多个界限值，可以用数组作为参数e.g. [0.1,0.5,0.74]表示当目标可见10%，50%和74%时分别触发一次回调函数）
    rootMargin = "0px" //详情见https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
}) => {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
            rootMargin,
            threshold
            //root属性指定目标元素的容器节点（必须是目标元素的祖先节点），若为指明则默认为viewport（可视窗口）
        });
        const current = target.current;
        observer.observe(current); //开始观察
        return () => {
            observer.unobserve(current); //停止观察
        };
    });
};

export default useIntersectionObserver;