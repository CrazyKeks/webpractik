import React,{createRef, useState, useEffect} from "react";
import LogoHeader from "../LogoHeader";
import Navigation from "../Navigation";
import PhoneHeader from "../PhoneHeader";
import Basket from "../Basket";
import LanguageSite from "../LanguageSite";
import './style.sass'
import BurgerBtn from "../BurgerBtn";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false)
    const [openMobileMenu, updateMobileMenu] = useState(false)
    const ref = React.createRef()

    useEffect(()=>{
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {threshold: [1]}
            )

        observer.observe(cachedRef)

        // unmount
        return function(){
            observer.unobserve(cachedRef)
        }
    }, [])

    const clickBurgerMenu = () => {
        const updateStatusMenu = openMobileMenu ? false : true;
        updateMobileMenu(updateStatusMenu)
    }

    return(
        <header className={'header' + (isSticky ? " isSticky" : "")} ref={ref}>
            <div className="container">
                <div className="header__wrap">
                    <LogoHeader/>
                    <Navigation statusMobileMenu={openMobileMenu} />
                    <PhoneHeader/>
                    <Basket/>
                    <LanguageSite/>
                    <BurgerBtn click={clickBurgerMenu} statusBurgerMenu={openMobileMenu}/>
                </div>
            </div>
        </header>
    )
}

export default Header;