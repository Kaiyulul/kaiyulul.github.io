import React from 'react';

export default function LinkCard({
    title, desc, href, img
}) {
    return (
        <a href={href} className='linkCard-container'>
            <div className='hideOverflow'>
                <img src={img} className='linkCard-img'/>
                <div className={`linkCard ${title}`}>
                    <div className='linkCard-content'>
                        <div className={'bold title'}> {title} </div>
                        <div className={'italic desc'}> {desc} </div>
                    </div>
                </div>
            </div>
        </a>
    );
}