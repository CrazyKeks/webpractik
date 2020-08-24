import React from "react";
import './style.sass';

const Instagram = () => {

    const instaImgLink = [
        '/assets/images/insta/inst-01.jpg',
        '/assets/images/insta/inst-02.jpg',
        '/assets/images/insta/inst-03.jpg',
        '/assets/images/insta/inst-04.jpg',
        '/assets/images/insta/inst-05.jpg',
        '/assets/images/insta/inst-06.jpg',
        '/assets/images/insta/inst-07.jpg',
        '/assets/images/insta/inst-08.jpg',
        '/assets/images/insta/inst-09.jpg',
        '/assets/images/insta/inst-10.jpg'
    ]

    function b64EncodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    }

    return(
        <div className="instagram">
            <h2 className="instagram__title">Следите за нами в Instagram</h2>
            <span className="instagram__hashtag">@pizzamenu</span>

            <ul className="instagram__list">
                {
                    instaImgLink.map((link,index) => (
                        <li className="instagram__item" key={b64EncodeUnicode(link)}>
                            <a href="#" className="instagram__link">
                                <img src={process.env.PUBLIC_URL + link} alt="" className="instagram__img" loading="lazy"/>
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Instagram;