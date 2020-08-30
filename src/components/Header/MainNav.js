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
    @media (min-width: 1024px) {
        ${({megaMenuHovering}) => megaMenuHovering ? 
            tw`bg-white` : null
        };
    }
    @media (max-width: 1023px) {
        ${({offcanvasOpen}) => offcanvasOpen ? 
            tw`bg-gray-100 border-gray-100` : null
        };
       	${({headerStyle}) => headerStyle == 'overlap' ? 
		    tw`border-b border-solid border-white border-opacity-25` : null
        }; 
    }    
    &[data-fixed='true'] {
        ${tw`fixed top-0 left-0 w-full bg-white shadow z-20`}
        @media (max-width: 1023px) {
            ${({offcanvasOpen}) => offcanvasOpen ? 
                tw`bg-gray-100` : null
            };
        }         
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
                ${({megaMenuHovering}) => megaMenuHovering ? 
                    tw`text-gray-900`: null
                };
                ${tw`relative text-xs font-bold no-underline uppercase tracking-widest pb-8`}
                &:after {
                    content: '';
                    ${tw`absolute left-0 bottom-0 h-px bg-primary_400 w-0 transform -translate-y-6 transition-all duration-300 ease-linear`}
                }
                &:hover {
                    &:after {
                        ${tw`w-full`}
                    }
                }
            }
            &.active {
                > a {
                    &:after {
                        ${tw`w-full`}
                    }
                }
            }
        }   
        .is-submenu-parent {
            ${tw`relative`}
            .submenu {
                ${tw`absolute flex flex-col w-auto bg-white shadow-lg px-8 pt-6 pb-10 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
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
                    ${tw`opacity-100 visible translate-y-7`}
                }
            }
        }
        .is-mega-menu-parent {
            ${tw`static`}
            .mega-menu {
                ${tw`absolute left-0 flex flex-col w-full bg-white shadow-lg pt-20 pb-12 opacity-0 invisible z-10 transform translate-y-12 transition-all duration-300 ease-linear`}
            }
            &:hover {
                .mega-menu {
                    ${tw`opacity-100 visible translate-y-7`}
                }
            }
        }        
    }

    #navigation-mobile {
        ${tw`w-full text-center`}
        > .navigation-item {
            ${tw`relative`}
            &:not(:last-child) {
                ${tw`mb-8`}
            }
            > a {
                ${tw`text-3xl font-heading text-gray-900 font-semibold no-underline`}
                &:hover {
                    ${tw`text-primary_400`}
                }
            }
            &.is-submenu-parent {
                > a {
                    ${tw`block`}
                    /* &:after {
                        content: '\f078';
                        font-family: 'Font Awesome 5 Pro';
                        ${tw`absolute top-0 right-0 font-normal text-black transition-all duration-300 ease-linear`}
                    }
                    &[aria-expanded="true"] {
                        &:after {
                            content: '\f068';
                        }
                    } */
                }
            }
        }
        .submenu {
            ${tw`overflow-hidden flex-col transition-all duration-300 ease-linear`}
            li {
                &:not(:last-child) {
                    ${tw`mb-6`}
                }
                a {
                    ${tw`text-sm font-semibold text-gray-700 uppercase`}
                    &:hover {
                        ${tw`text-primary_400`}
                    }                    
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
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    // Hover on parent links
    const [megaMenuHovering, setMegaMenuHovering] = useState(false);
    const isHoveringMegaMenu = () => setMegaMenuHovering(true);
    const notHoveringMegaMenu = () => setMegaMenuHovering(false);

    const [subMenuHovering1, setSubMenuHovering1] = useState(false);
    const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
    const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

    const [subMenuHovering2, setSubMenuHovering2] = useState(false);
    const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
    const notHoveringSubMenu2 = () => setSubMenuHovering2(false);    

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
        setOffcanvasOpen(!offcanvasOpen);
        submenuTempHeight1 = null;
        submenuTempHeight2 = null;
        submenuTempHeight3 = null;
    };

    // close offcanvas onclick outside
    const node = useRef();
    useOnClickOutside(node, () => setOffcanvasOpen(false));
    
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
            massageServices: file(relativePath: {eq: "repeating/massage-services.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			} 
			specialPackages: file(relativePath: {eq: "repeating/special-packages.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			} 
			aestheticTreatments: file(relativePath: {eq: "repeating/aesthetic-treatments.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			} 
			skinCareServices: file(relativePath: {eq: "repeating/skin-care-services.jpg"}) {
				childImageSharp {
					fluid(maxWidth: 504, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
            }       
        }
    `)

    // Define logos based on header style
    let initialLogo = null,
        fixedLogo = null;
    
    if (headerStyle === 'overlap') {
        initialLogo = [
            data.desktopLogoLight.childImageSharp.fixed,
            {
            ...data.mobileLogoLight.childImageSharp.fixed,
                media: `(max-width: 767px)`,
            },
        ] 
        fixedLogo = [
            data.desktopLogoDark.childImageSharp.fixed,
            {
            ...data.mobileLogoDark.childImageSharp.fixed,
                media: `(max-width: 767px)`,
            },
        ]
    } else if (headerStyle === 'classic') {
        initialLogo = [
            data.desktopLogoDark.childImageSharp.fixed,
            {
            ...data.mobileLogoDark.childImageSharp.fixed,
                media: `(max-width: 767px)`,
            },
        ] 
        fixedLogo = [
            data.desktopLogoDark.childImageSharp.fixed,
            {
            ...data.mobileLogoDark.childImageSharp.fixed,
                media: `(max-width: 767px)`,
            },
        ]
    }

    // Change logo on mega menu reveal
    if (megaMenuHovering) {
        initialLogo = data.desktopLogoDark.childImageSharp.fixed;
    }

    if(offcanvasOpen) {
        initialLogo = [
            data.desktopLogoDark.childImageSharp.fixed,
            {
            ...data.mobileLogoDark.childImageSharp.fixed,
                media: `(max-width: 767px)`,
            },
        ] 
        fixedLogo = [
            data.desktopLogoDark.childImageSharp.fixed,
            {
            ...data.mobileLogoDark.childImageSharp.fixed,
                media: `(max-width: 767px)`,
            },
        ] 
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
            megaMenuHovering={megaMenuHovering}
            offcanvasOpen={offcanvasOpen}
        >
            <div className="container flex items-center">
                <div className="flex-auto flex items-center">
                    <AniLink fade to="/">
                        <div className="logo-initial">
                            <Img fixed={initialLogo} alt="Karma Spa Logo" />
                        </div>
                        <div className="logo-fixed hidden">
                            <Img fixed={fixedLogo} alt="Karma Spa Logo" />
                        </div>
                    </AniLink>
                </div>
                <div className="flex items-center justify-end flex-auto">
                    <ul id="navigation-desktop" className="hidden lg:flex lg:items-center lg:justify-end mr-10">
                        <li className={`is-mega-menu-parent navigation-item ${megaMenuHovering ? 'active' : ''}`} onMouseEnter={isHoveringMegaMenu} onMouseLeave={notHoveringMegaMenu}>
                            <AniLink fade to="#">Services</AniLink>
                            <div className="mega-menu">
                                <div className="container flex items-center">
                                    <div className="grid grid-cols-1 lg:grid-cols-4 row-gap-12 lg:row-gap-0 lg:col-gap-16">
                                        <div className="group relative">
                                            <Img className="mb-6" fluid={data.massageServices.childImageSharp.fluid} alt="Massage Services" />
                                            <div className="flex justify-between items-center">
                                                <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 base-animation-ease">Massage Services</p>
                                                <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 base-animation-ease"></i>
                                            </div>
                                            <p className="text-small mb-0">No matter your indulgence, we have a massage for you.</p>
                                            <AniLink fade to="/massage-services/"><span className="link-overlay"></span></AniLink>
                                        </div>
                                        <div className="group relative">
                                            <Img className="mb-6" fluid={data.specialPackages.childImageSharp.fluid} alt="Special Packages" />
                                            <div className="flex justify-between items-center">
                                                <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 base-animation-ease">Special Packages</p>
                                                <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 base-animation-ease"></i>
                                            </div>
                                            <p className="text-small mb-0">Our popular packages will pamper you with great value.</p>
                                            <AniLink fade to="/massage-packages/"><span className="link-overlay"></span></AniLink>
                                        </div>
                                        <div className="group relative">
                                            <Img className="mb-6" fluid={data.aestheticTreatments.childImageSharp.fluid} alt="Aesthetic Treatments" />
                                            <div className="flex justify-between items-center">
                                                <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 base-animation-ease">Aesthetic Treatments</p>
                                                <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 base-animation-ease"></i>
                                            </div>
                                            <p className="text-small mb-0">Karma Bella aesthetic treatments bring out your best self.</p>
                                            <AniLink fade to="/aesthetic-treatments/"><span className="link-overlay"></span></AniLink>
                                        </div>
                                        <div className="group relative">
                                            <Img className="mb-6" fluid={data.skinCareServices.childImageSharp.fluid} alt="Skin Care Services" />
                                            <div className="flex justify-between items-center">
                                                <p className="font-heading text-2xlarge text-gray-900 group-hover:text-primary_400 mb-1 base-animation-ease">Skin Care Services</p>
                                                <i className="fal fa-long-arrow-right text-3xl opacity-0 group-hover:text-primary_400 group-hover:opacity-100 base-animation-ease"></i>
                                            </div>
                                            <p className="text-small mb-0">Facials, waxing, scrubs and saunas for the ultimate glow-up.</p>
                                            <AniLink fade to="/skin-care-services/"><span className="link-overlay"></span></AniLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`is-submenu-parent navigation-item ${subMenuHovering1 ? 'active' : ''}`} onMouseEnter={isHoveringSubMenu1} onMouseLeave={notHoveringSubMenu1}>
                            <AniLink fade to="#">Locations</AniLink>
                            <ul className="submenu">
                                <li className="navigation-item"><AniLink fade to="/hillcrest-massage/">Hillcrest</AniLink></li>
                                <li className="navigation-item"><AniLink fade to="/carlsbad-massage/">Carlsbad</AniLink></li>
                            </ul>
                        </li>
                        <li className={`is-submenu-parent navigation-item ${subMenuHovering2 ? 'active' : ''}`} onMouseEnter={isHoveringSubMenu2} onMouseLeave={notHoveringSubMenu2}>
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
                        <Burger offcanvasOpen={offcanvasOpen} setOffcanvasOpen={setOffcanvasOpen} headerStyle={headerStyle} scrolled={scrolled} aria-controls="mobile-menu"/>
                        <OffCanvas offcanvasOpen={offcanvasOpen} setOffcanvasOpen={setOffcanvasOpen} id="mobile-menu" className="py-10">
                            <ul id="navigation-mobile" className="mb-16 inline-block">
                                <li className="navigation-item is-submenu-parent">
                                    <a aria-expanded={subMenuOpen1 === true ? "true" : "false"} onClick={() => {  
                                        if (submenuTempHeight1 === null) 
                                            return;
                                            submenuSetHeight1(submenuHeight1 === 0 ? submenuTempHeight1 : 0);
                                            submenuSetPaddingTop1(submenuPaddingTop1 === 0 ? '20px' : 0);
                                            setSubMenuOpen1(!subMenuOpen1);
                                        }}
                                    >Services</a>
                                    <ul className="submenu" ref={submenuRef1} style={{maxHeight: submenuHeight1, paddingTop: submenuPaddingTop1}}>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-services/">Massage</AniLink>
                                        </li>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-packages/">Packages</AniLink>
                                        </li>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/aesthetic-treatments/">Treatments</AniLink>
                                        </li>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/skin-care-services/">Skin Care</AniLink>
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
                                    >Locations</a>
                                    <ul className="submenu" ref={submenuRef2} style={{maxHeight: submenuHeight2, paddingTop: submenuPaddingTop2}}>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/hillcrest-massage/">Hillcrest</AniLink>
                                        </li>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/carlsbad-massage/">Carlsbad</AniLink>
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
                                    <ul className="submenu" ref={submenuRef3} style={{maxHeight: submenuHeight3, paddingTop: submenuPaddingTop3}}>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/about/">About</AniLink>
                                        </li>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/gift-cards/">Gift Cards</AniLink>
                                        </li>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/massage-membership/">Membership</AniLink>
                                        </li>
                                        <li className="navigation-item">
                                            <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="/blog/">Blog</AniLink>
                                        </li>                                        
                                    </ul> 
                                </li> 
                            </ul>

                            <ul className="text-center mb-12">
                                <li className="font-heading font-medium mb-5"><a className="text-gray-700 no-underline" href="tel:+1-619-299-9888">Hillcrest: <span className="italic">(619) 299-9888</span></a></li>
                                <li className="font-heading font-medium"><a className="text-gray-700 no-underline" href="tel:+1-760-729-9888">Carlsbad: <span className="italic">(760) 729-9888</span></a></li>
                            </ul>                        
                            <div className="grid grid-col-1 row-gap-5">
                                <ButtonSolid as="button" data="modal-hillcrest" text="Book San Diego"/>
                                <ButtonSolid as="button" data="modal-carlsbad" text="Book Carlsbad"/>
                            </div>
                        </OffCanvas>
                    </div>
                </div>
            </div>
        </StyledMainNav>
    );
}
export default MainNav;