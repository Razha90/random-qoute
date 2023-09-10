import './loaderAnimation.css';
import addClass from '../Function/addClass';
import removeClass from '../Function/removeClass';
import { useEffect } from 'react';
import  setting  from "../img/setting.svg";

const LoaderAnimation = (
    loading
) => {
    useEffect(() => {
        setTimeout(() => {
            if (loading) {
                setTimeout(() => {
                    addClass('loading','loader-screen');
                }, 500);
                addClass('img-setting-done', 'img-setting');
            } else {
                removeClass('loading', 'loader-screen');
                removeClass('img-setting-done', 'img-setting')
            }
        }, 1000);
    }, [loading]);

    return (
        <div>
            <div className='loader-screen'>
                <div>
                    <img alt='Scroll' src={setting} className='img-setting'/>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='loader-screen'>
                <div>
                <img alt='Scroll' src={setting} className='img-setting'/>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoaderAnimation;