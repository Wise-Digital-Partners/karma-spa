import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { useOnClickOutside } from '../../hooks'
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from '@emotion/styled';
import tw from 'twin.macro'

import Burger from '../Burger/Burger'
import OffCanvas from '../OffCanvas/OffCanvas'
import ButtonSolid from '../Button/ButtonSolid'

const StyledMainNav = styled.nav`
	${({headerHasBorder}) => headerHasBorder ? 
		tw`border-b border-solid border-white border-opacity-25` : null
	};
    &[data-fixed='true'] {
        ${tw`fixed top-0 left-0 w-full bg-white shadow z-20`}
        #navigation-desktop {
            > .navigation-item {
                > a {
                    ${tw`text-gray-900`}
                }
            }
        }
        .logo-initial {
            ${tw`hidden`}
        }
        .logo-fixed {
            ${tw`flex`}
        }             
    }
    #navigation-desktop {
        > .navigation-item {
            &:not(:last-child) {
                ${tw`mr-10`}
            }
            > a {
                ${({headerLinkColor}) => headerLinkColor === 'white' ? 
                    tw`text-white` : tw`text-gray-900`
                };
                ${tw`relative text-xs font-bold no-underline uppercase tracking-widest pb-8`}
                &:after {
                    content: '';
                    ${tw`absolute left-0 bottom-0 h-2px bg-primary_400 w-0 transform -translate-y-6 transition-all duration-300 ease-linear`}
                }
                &:hover {
                    &:after {
                        ${tw`w-full`}
                    }
                }
            }
        }   
        .is-submenu-parent {
            ${tw`relative`}
            .submenu {
                ${tw`absolute flex flex-col w-auto bg-white px-8 pt-6 pb-10 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
                box-shadow: 0 4px 18px 0 rgba(0,0,0,0.06);
                .navigation-item {
                    ${tw`whitespace-no-wrap`}
                    &:not(:last-child) {
                        ${tw`mb-4`}
                    }
                    a {
                        ${tw`text-gray-800 font-normal no-underline`}
                        &:hover {
                            ${tw`text-primary_400`}
                        }
                    }
                }
            }
            &:hover {
                .submenu {
                    ${tw`opacity-100 visible translate-y-6`}
                }
            }
        }
    }

    #navigation-mobile {
        ${tw`w-full`}
        .navigation-item {
            ${tw`relative`}
            &:not(:last-child) {
                ${tw`mb-8`}
            }
            a {
                ${tw`text-gray-800 font-bold text-xl no-underline`}
                &:hover {
                    ${tw`text-primary_400`}
                }
            }
            &.is-submenu-parent {
                > a {
                    ${tw`block`}
                    &:after {
                        content: '\f078';
                        font-family: 'Font Awesome 5 Pro';
                        ${tw`absolute top-0 right-0 font-normal text-black transition-all duration-300 ease-linear`}
                    }
                    &[aria-expanded="true"] {
                        &:after {
                            content: '\f068';
                        }
                    }
                }
            }
        }
        .submenu {
            ${tw`overflow-hidden flex-col transition-all duration-300 ease-linear`}
            li {
                &:not(:last-child) {
                    ${tw`mb-4`}
                }
                a {
                    ${tw`text-base font-medium`}
                }
            } 
        }    
    }    
`

// mobile submenu temporary height
let submenuTempHeight1 = null,
    submenuTempHeight2 = null,
    submenuTempHeight3 = null;

const MainNav = ({scrolled, headerStyle, headerLinkColor ,headerHasBorder}) => {

    // determine if offcanvas is open
    const [open, setOpen] = useState(false);

    // mobile submenu animate height variables
    const [submenuHeight1, submenuSetHeight1] = useState('initial');
    const [submenuHeight2, submenuSetHeight2] = useState('initial');
    const [submenuHeight3, submenuSetHeight3] = useState('initial');
    const [submenuPaddingTop1, submenuSetPaddingTop1] = useState('20px');
    const [submenuPaddingTop2, submenuSetPaddingTop2] = useState('20px');
    const [submenuPaddingTop3, submenuSetPaddingTop3] = useState('20px');
    const submenuRef1 = useRef(null);
    const submenuRef2 = useRef(null);
    const submenuRef3 = useRef(null);

    // determine if submenu is open
    const [subMenuOpen1, setSubMenuOpen1] = useState(false);
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);
    const [subMenuOpen3, setSubMenuOpen3] = useState(false);

    // handle click of navigation items
    const clickHandler = () => {
        setOpen(!open);
        submenuTempHeight1 = null;
        submenuTempHeight2 = null;
        submenuTempHeight3 = null;
    };

    // close offcanvas onclick outside
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    
    // calculate mobile submenu height
    useEffect(() => {
        if (submenuRef1.current && submenuTempHeight1 === null) {
        submenuTempHeight1 = submenuRef1.current.getBoundingClientRect().height + parseInt(submenuPaddingTop1);
        submenuSetHeight1(0);
        submenuSetPaddingTop1(0);
        }
        if (submenuRef2.current && submenuTempHeight2 === null) {
        submenuTempHeight2 = submenuRef2.current.getBoundingClientRect().height + parseInt(submenuPaddingTop2);
        submenuSetHeight2(0);
        submenuSetPaddingTop2(0);
        }
        if (submenuRef3.current && submenuTempHeight3 === null) {
        submenuTempHeight3 = submenuRef3.current.getBoundingClientRect().height + parseInt(submenuPaddingTop3);
        submenuSetHeight3(0);
        submenuSetPaddingTop3(0);
        }
    }, [submenuPaddingTop1, submenuPaddingTop2, submenuPaddingTop3]);
    
    const data = useStaticQuery(graphql`
        {
            desktopLogoDark: file(relativePath: {eq: "global/logo-color.png"}) {
                childImageSharp {
                    fixed(width: 153, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }
            desktopLogoLight: file(relativePath: {eq: "global/logo-white-orange.png"}) {
                childImageSharp {
                    fixed(width: 153, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }      
            mobileLogoDark: file(relativePath: {eq: "global/logo-color.png"}) {
                childImageSharp {
                    fixed(width: 114, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            } 
            mobileLogoLight: file(relativePath: {eq: "global/logo-white-orange.png"}) {
                childImageSharp {
                    fixed(width: 114, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }       
        }
    `)

    let desktopInitialLogo = null,
        desktopFixedLogo = null,
        mobileInitialLogo = null,
        mobileFixedLogo = null;
    
    if (headerStyle === 'overlap') {
        desktopInitialLogo = data.desktopLogoLight.childImageSharp.fixed;
        desktopFixedLogo = data.desktopLogoDark.childImageSharp.fixed;
        mobileInitialLogo = data.mobileLogoLight.childImageSharp.fixed;
        mobileFixedLogo = data.mobileLogoDark.childImageSharp.fixed;
    } else if (headerStyle === 'classic') {
        desktopInitialLogo = data.desktopLogoDark.childImageSharp.fixed;
        desktopFixedLogo = data.desktopLogoDark.childImageSharp.fixed;
        mobileInitialLogo = data.mobileLogoDark.childImageSharp.fixed;
        mobileFixedLogo = data.mobileLogoDark.childImageSharp.fixed;
    }

    return (
        <StyledMainNav 
            id="main-navigation"
            className="py-2 base-animation-ease"
            role="navigation"
            aria-label="main-navigation"
            data-fixed={scrolled}
            headerStyle={headerStyle}
            headerHasBorder={headerHasBorder}
            headerLinkColor={headerLinkColor}
        >
            <div className="container flex items-center">
                <div className="flex-auto flex items-center">
                    <AniLink fade to="/">
                    <div className="hidden md:flex">
                        <div className="logo-initial">
                            <Img fixed={desktopInitialLogo} alt="Karma Spa Logo" />
                        </div>
                        <div className="logo-fixed hidden">
                            <Img fixed={desktopFixedLogo} alt="Karma Spa Logo" />
                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <div className="logo-initial">
                            <Img fixed={mobileInitialLogo} alt="Karma Spa Logo" />
                        </div>
                        <div className="logo-fixed hidden">
                            <Img fixed={mobileFixedLogo} alt="Karma Spa Logo" />
                        </div>
                    </div>
                    </AniLink>
                </div>
                <div className="flex items-center justify-end flex-auto">
                    <ul id="navigation-desktop" className="hidden lg:flex lg:items-center lg:justify-end mr-10">
                        <li className="is-submenu-parent navigation-item">
                            <AniLink fade to="#">Services</AniLink>
                            <ul className="submenu">
                            <li className="navigation-item"><AniLink fade to="/massage-services/">Massage</AniLink></li>
                            <li className="navigation-item"><AniLink fade to="/massage-packages/">Packages</AniLink></li>
                            <li className="navigation-item"><AniLink fade to="/aesthetic-treatments/">Treatments</AniLink></li>
                            <li className="navigation-item"><AniLink fade to="/skin-care-services/">Skin Care</AniLink></li>
                            </ul>
                        </li>
                        <li className="is-submenu-parent navigation-item">
                            <AniLink fade to="#">Locations</AniLink>
                            <ul className="submenu">
                            <li className="navigation-item"><AniLink fade to="/hillcrest-massage/">Hillcrest</AniLink></li>
                            <li className="navigation-item"><AniLink fade to="/carlsbad-massage/">Carlsbad</AniLink></li>
                            </ul>
                        </li>
                        <li className="is-submenu-parent navigation-item">
                            <AniLink fade to="/about/">About</AniLink>
                            <ul className="submenu">
                            <li className="navigation-item"><AniLink fade to="/about/">About</AniLink></li>
                            <li className="navigation-item"><AniLink fade to="/gift-cards/">Gift Cards</AniLink></li>
                            <li className="navigation-item"><AniLink fade to="/massage-membership/">Membership</AniLink></li>
                            <li className="navigation-item"><AniLink fade to="/blog/">Blog</AniLink></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="hidden lg:inline-block inline-flex items-center">
                        <ButtonSolid data="modal-choose-location" text="Book Appointment"/>
                    </div>

                    <div className="lg:hidden" ref={node}>
                        <Burger open={open} setOpen={setOpen} headerStyle={headerStyle} scrolled={scrolled} aria-controls="mobile-menu"/>
                        <OffCanvas open={open} setOpen={setOpen} id="mobile-menu" className="py-10">
                        <ul id="navigation-mobile" className="mb-16 inline-block">
                            <li className="navigation-item is-submenu-parent">
                            <a aria-expanded={subMenuOpen1 === true ? "true" : "false"} onClick={() => {  
                                if (submenuTempHeight1 === null) 
                                    return;
                                    submenuSetHeight1(submenuHeight1 === 0 ? submenuTempHeight1 : 0);
                                    submenuSetPaddingTop1(submenuPaddingTop1 === 0 ? '20px' : 0);
                                    setSubMenuOpen1(!subMenuOpen1);
                                }}
                            >Commercial Insurance</a>
                            <ul className="submenu ml-6" ref={submenuRef1} style={{maxHeight: submenuHeight1, paddingTop: submenuPaddingTop1}}>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                            </ul> 
                            </li>
                            <li className="navigation-item is-submenu-parent">
                            <a aria-expanded={subMenuOpen2 === true ? "true" : "false"} onClick={() => {  
                                if (submenuTempHeight2 === null) 
                                    return;
                                    submenuSetHeight2(submenuHeight2 === 0 ? submenuTempHeight2 : 0);
                                    submenuSetPaddingTop2(submenuPaddingTop2 === 0 ? '20px' : 0);
                                    setSubMenuOpen2(!subMenuOpen2);
                                }}
                            >Personal</a>
                            <ul className="submenu ml-6" ref={submenuRef2} style={{maxHeight: submenuHeight2, paddingTop: submenuPaddingTop2}}>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                            </ul> 
                            </li>
                            <li className="navigation-item is-submenu-parent">
                            <a aria-expanded={subMenuOpen3 === true ? "true" : "false"} onClick={() => {
                                if (submenuTempHeight3 === null) 
                                    return;
                                    submenuSetHeight3(submenuHeight3 === 0 ? submenuTempHeight3 : 0);
                                    submenuSetPaddingTop3(submenuPaddingTop3 === 0 ? '20px' : 0);
                                    setSubMenuOpen3(!subMenuOpen3);
                                }}
                            >About</a>
                            <ul className="submenu ml-6" ref={submenuRef3} style={{maxHeight: submenuHeight3, paddingTop: submenuPaddingTop3}}>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                                <li className="navigation-item">
                                <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">Lorem Ipsum</AniLink>
                                </li>
                            </ul> 
                            </li> 
                        </ul>
                        <div className="grid grid-cols-2 col-gap-4">
                            <ButtonSolid data="modal-choose-location" text="Book Appointment"/>
                        </div>
                        </OffCanvas>
                    </div>
                </div>
            </div>
        </StyledMainNav>
    );
}
export default MainNav;