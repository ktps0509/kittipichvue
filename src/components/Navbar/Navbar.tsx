import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'
import styles from './Navbar.module.scss'
import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

type props = {
	isMounted: boolean
}

function Navbar({ isMounted }: props): JSX.Element {

	const router = useRouter()
	const [navbarOpen, setNavbarOpen] = useState(false);

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(false)

	const handleScroll = () => {
		const currentScrollPos = window.scrollY

		if (currentScrollPos > prevScrollPos) {
			setVisible(false)
		} else {
			setVisible(true)
		}

		setPrevScrollPos(currentScrollPos)
	}

	const openInNewTab = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer');
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll)

	})


	useEffect(() => {
		if (navbarOpen) {

		}
	}, [navbarOpen])

	function onClickMenu() {
		if (navbarOpen) setNavbarOpen(false)
	}

	return (
		<>
			<nav className={classNames(styles.navMenu, (navbarOpen ? styles.collapse : styles.collapsed), visible ? '' : !navbarOpen ? '!-top-20' : "", " sticky  justify-between px-5 py-3 bg-cc-main-400 shadow-lg top-0 w-full transition-all duration-500")}>
				<div className="px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<button type='button' className={classNames("ml-2 cursor-pointer first-letter:text-xl font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white transition-all duration-500 ease-in-out", isMounted ? "opacity-100" : "-translate-y-1 opacity-0")} onClick={() => router.reload()}>
							<Image src={'/images/ktpslogo.jpg'} width={35} height={35} />
						</button>
						<button
							className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<FontAwesomeIcon icon={(navbarOpen == true ? faXmark : faBars)} />
						</button>
					</div>
					<div className={classNames("lg:flex flex-grow items-start mx-0", styles.menu)}>
						<ul className={classNames("flex flex-col lg:justify-end justify-start lg:flex-row list-none w-full lg:h-auto", (navbarOpen == true ? "h-auto" : "h-0"))}>
							<li className={classNames("nav-item mr-3 transition-all duration-500 delay-200 ease-in-out flex lg:h-auto h-10", isMounted ? "opacity-100" : "-translate-y-1 opacity-0")}>
								<Link activeClass="active" onClick={onClickMenu} className="px-3 flex items-center lg:text-xs text-lg uppercase font-bold leading-snug text-white hover:text-cc-orange-400" to="about" spy={true} smooth={true} duration={500} ><span className="ml-2 cursor-pointer">1. About</span></Link>
							</li>
							<li className={classNames("nav-item mr-3 transition-all duration-500 delay-500 ease-in-out flex lg:h-auto h-10", isMounted ? "opacity-100" : "-translate-y-1 opacity-0")}>
								<Link activeClass="active" onClick={onClickMenu} className="px-3 flex items-center lg:text-xs text-lg uppercase font-bold leading-snug text-white hover:text-cc-orange-400" to="experience" spy={true} smooth={true} duration={500} ><span className="ml-2 cursor-pointer">2. Experience</span></Link>
							</li>
							<li className={classNames("nav-item mr-3 transition-all duration-500 delay-700 ease-in-out flex lg:h-auto h-10", isMounted ? "opacity-100" : "-translate-y-1 opacity-0")}>
								<Link activeClass="active" onClick={onClickMenu} className="px-3 flex items-center lg:text-xs text-lg uppercase font-bold leading-snug text-white hover:text-cc-orange-400" to="work" spy={true} smooth={true} duration={500} ><span className="ml-2 cursor-pointer">3. Work</span></Link>
							</li>
							<li className={classNames("nav-item mr-3 transition-all duration-500 delay-1000 ease-in-out flex lg:h-auto h-10", isMounted ? "opacity-100" : "-translate-y-1 opacity-0")}>
								<Link activeClass="active" onClick={onClickMenu} className="px-3 flex items-center lg:text-xs text-lg uppercase font-bold leading-snug text-white hover:text-cc-orange-400" to="contact" spy={true} smooth={true} duration={500} ><span className="ml-2 cursor-pointer">4. Contact</span></Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='fixed bottom-4 left-0 md:block hidden px-5'>
				<div className={classNames('flex flex-col ml-6 transition-all duration-500 delay-200 ease-in-out', isMounted ? "opacity-100" : "translate-y-2 opacity-0")}>
					<a className='transition transform hover:text-cc-orange-400 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none' href="https://github.com/ktps0509" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} className="text-2xl mb-4" />
					</a>
					<a className='transition transform hover:text-cc-orange-400 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none' href="https://www.linkedin.com/in/kittipichdev/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedinIn} className="text-2xl mb-4" />
					</a>
					<a className='transition transform hover:text-cc-orange-400 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none' href="https://www.instagram.com/ktps__/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} className="text-2xl mb-4" />
					</a>
				</div>
			</div>
		</>
	)
}

export default Navbar