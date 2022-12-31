import Navbar from '@/components/Navbar/Navbar'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { RefObject, useEffect, useRef, useState } from 'react'

const Home: NextPage = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false)
	const [selectedTabExperience, setSelectedTabExperience] = useState(0)
	// const elementRef: RefObject<HTMLDivElement> = useRef(null)
	const elementRef = useRef<HTMLDivElement>(null)
	const sections = ['intro', 'about', 'experience', 'work', 'contact']

	useEffect(() => {
		// window.scrollTo(0, 0)
		setIsMounted(true)
	}, [])

	const handleScroll = () => {
		const sectionOffsets = sections.map(section =>
			document.getElementById(section)?.getBoundingClientRect().top
		)

		const currentScroll = window.innerHeight - 0.5
		sectionOffsets.findIndex((offset: any, index: number) => {
			if (offset < currentScroll) {
				document.getElementById(sections[index])?.classList.remove('opacity-0', '-translate-x-5')
				document.getElementById(sections[index])?.classList.add('opacity-100')
			}
		})
	}


	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Head>
				<title>Kittipich H.</title>
				<meta name="description" content="Kittipich Husa" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="viewport" content="width=device-width, minimal-ui" />
				<link rel="icon" href="favicon.ico" />
			</Head>
			<Navbar isMounted={isMounted} />

			<main className='w-full mx-auto min-h-screen bg-cc-main-400 md:px-40 px-4'>

				{/* Intro */}
				<section className='flex flex-col justify-center items-start mx-auto min-h-screen max-w-6xl' id='intro'>
					<div className={classNames("flex justify-between w-full flex-wrap transition-all duration-500 delay-[1200ms] ease-in-out", isMounted ? "opacity-100" : "-translate-x-5 opacity-0")}>
						<div className='flex flex-col justify-start items-start lg:w-3/4 w-full  lg:mb-0 mb-4'>
							<p className='text-lg text-gray-300'>Hi, my name's</p>
							<h1 className="text-6xl font-bold text-cc-orange-400 mb-3">
								Kittipich Husa (Vue)
							</h1>
							<p className='text-base text-gray-300'>I'm a software developer , Experienced in development of web application. Hard-worker who always desire to find best practice of programming to get the most out of framework and possibilities of project.</p>
						</div>
						<div className='lg:w-1/4 w-full flex flex-col items-center justify-center'>
							<Image src={'/images/image_profile.jpg'} className="rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" width="300" height="300" />
						</div>
					</div>
				</section>

				{/* About */}
				<section className='flex flex-col justify-center items-start mx-auto min-h-screen max-w-6xl transition-all duration-500 delay-[800ms] ease-in-out -translate-x-5 opacity-0' id='about'>
					<div className={classNames("flex justify-between w-full flex-wrap")}>
						<div className='flex flex-col justify-start items-start lg:w-1/2 w-full  lg:mb-0 mb-4'>
							<div className="text-2xl font-bold text-cc-orange-400 mb-3 flex">
								<h1>01.</h1><h1 className='text-white ml-1'>About me.</h1>
							</div>
							<p className='text-base text-gray-300'>Hi, my name is Kittipich and I enjoy working in developer.</p>
							<p className='text-base text-gray-300 mb-3'>I'm interested in web develop started back in 2019 when I started working the first year. I have tried many things after that and I enjoyed it. And turns out I have knowledge a lot about HTML & CSS.</p>
							<p className='text-base text-gray-300 mb-3'>a few technologies I’ve been working with recently:</p>
							<div className='grid grid-cols-2 lg:w-2/3 w-full'>
								<div className='flex mb-3'>
									<p className='text-sm'><FontAwesomeIcon className='text-cc-orange-400' icon={faChevronRight} /> Javascript</p>
								</div>
								<div className='flex  mb-3'>
									<p className='text-sm'><FontAwesomeIcon className='text-cc-orange-400' icon={faChevronRight} /> TypeScript</p>
								</div>
								<div className='flex  mb-3'>
									<p className='text-sm'><FontAwesomeIcon className='text-cc-orange-400' icon={faChevronRight} /> PHP</p>
								</div>
								<div className='flex  mb-3'>
									<p className='text-sm'><FontAwesomeIcon className='text-cc-orange-400' icon={faChevronRight} /> NextJs</p>
								</div>
								<div className='flex  mb-3'>
									<p className='text-sm'><FontAwesomeIcon className='text-cc-orange-400' icon={faChevronRight} /> React</p>
								</div>
								<div className='flex  mb-3'>
									<p className='text-sm'><FontAwesomeIcon className='text-cc-orange-400' icon={faChevronRight} /> Angular</p>
								</div>
								<div className='flex  mb-3'>
									<p className='text-sm'><FontAwesomeIcon className='text-cc-orange-400' icon={faChevronRight} /> TailwindCss</p>
								</div>

							</div>
						</div>
					</div>
				</section>

				{/* Experience */}
				<section className='flex flex-col justify-center items-start mx-auto min-h-screen max-w-6xl transition-all duration-500 delay-[800ms] ease-in-out -translate-x-5 opacity-0' id='experience'>
					<div className="flex justify-between w-full flex-wrap min-h-[500px]">
						<div className='flex flex-col justify-start items-start lg:w-3/4 w-full  lg:mb-0 mb-4'>
							<div className="text-2xl font-bold text-cc-orange-400 mb-3 flex">
								<h1>02.</h1><h1 className='text-white ml-1'>Where I've worked.</h1>
							</div>
							<div className='grid lg:grid-cols-4 grid-cols-1 w-full gap-x-3'>
								<div className='flex lg:flex-col flex-row'>
									<button type='button' className={classNames('text-sm text-left p-3 transition-colors duration-300 hover:bg-cc-orange-400 hover:text-orange-800', selectedTabExperience == 0 ? 'bg-cc-orange-400 text-orange-800' : '')} onClick={() => setSelectedTabExperience(0)}>
										Wewasanad Co., Ltd.
									</button>
									<button type='button' className={classNames('text-sm text-left p-3 transition-colors duration-300 hover:bg-cc-orange-400 hover:text-orange-800', selectedTabExperience == 1 ? 'bg-cc-orange-400 text-orange-800' : '')} onClick={() => setSelectedTabExperience(1)}>
										NetCube Software
									</button>
								</div>
								<div className='col-span-3'>
									<div className={classNames('transition-opacity duration-500 ease-out h-full', selectedTabExperience != 0 ? 'hidden' : 'block')}>
										<h1 className='text-xl  py-2'>Frontend Developer
											<Link href={'https://wewasanad.co.th/'} passHref>
												<a target="_blank" className='text-cc-orange-400 ml-1' rel="noopener noreferrer">
													@Wewasanad
												</a>
											</Link>
										</h1>
										<p className='text-sm text-gray-300 mb-3'>
											Mar 2021 - Present
										</p>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Managed frontend development, project structure and API integration of an mobile wallpaper platform, using NextJS.</p>
										</div>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Developed a design system library for various projects using React/TypeScript, deployed on private npm or Bit.</p>
										</div>
										<div className='flex mb-3 items-start'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.</p>
										</div>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Analyzed API documents to find best practices handling state management and communication between components.</p>
										</div>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Collaborated with design and product teammates to develop UI components, focusing on usability.</p>
										</div>
									</div>

									<div className={classNames('transition-opacity duration-500 ease-out h-full', selectedTabExperience != 1 ? 'hidden' : 'block')}>
										<h1 className='text-xl py-2'>Full Stack Developer
											<Link href={'https://www.netcube.co.th/th'} passHref>
												<a target="_blank" className='text-cc-orange-400 ml-1' rel="noopener noreferrer">
													@NetCube
												</a>
											</Link>
										</h1>
										<p className='text-sm text-gray-300  mb-3'>
											May 2019 - Feb 2021
										</p>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Responsible for application flow design, UX design and development of website.</p>
										</div>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Analyze requirement of customer with the team according to project's timeline in order to complete the project in time.</p>
										</div>
										<div className='flex mb-3 items-start'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.</p>
										</div>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Develop Frontend web application with Angular Bootstrap and SCSS .</p>
										</div>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Develop Backend web application with C# Rest API.</p>
										</div>
										<div className='flex mb-3'>
											<FontAwesomeIcon className='text-cc-orange-400 mr-2 h-[1.2em]' icon={faChevronRight} /> <p className='text-sm'>Develop Mobile application with Ionic Framework.</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>

				{/* Work */}
				<section className='flex flex-col justify-center items-start mx-auto min-h-screen max-w-6xl transition-all duration-500 delay-[800ms] ease-in-out -translate-x-5 opacity-0' id='work'>
					<div className="flex justify-between w-full flex-wrap">
						<div className='flex flex-col justify-start items-start w-full lg:mb-0 mb-4'>
							<div className="text-2xl font-bold text-cc-orange-400 mb-3 flex">
								<h1>03.</h1><h1 className='text-white ml-1'>Some things what I've built.</h1>
							</div>
							<div className='grid lg:grid-cols-2 grid-cols-1 gap-3 w-full'>
								<Link href={'https://app.pichoro.com/'} passHref>
									<a href="" target="_blank" rel="noopener noreferrer">
										<div className='bg-slate-800 w-full p-3 flex gap-x-3 items-start pb-10 rounded-sm transition-all hover:-translate-y-1 hover:bg-orange-400 h-full min-h-[160px] duration-300'>
											<div>
												<Image src={'/images/pichoro.png'} alt="pichoro" width={80} height={80} objectFit='contain' />
											</div>
											<div>
												<h1 className='text-white text-lg mb-2'>PICHORO</h1>
												<p className='text-sm mb-1'>
													Buying and selling electronic assets and data management system (backend site) in the form of Web Application.
												</p>
												<p className='text-xs text-gray-500 font-bold'>
													NextJS Go SQLServer
												</p>
											</div>
										</div>
									</a>
								</Link>

								<Link href={'https://bds.sme.go.th/'} passHref>
									<a href="" target="_blank" rel="noopener noreferrer">
										<div className='bg-slate-800 w-full p-3 flex gap-x-3 items-start pb-10 rounded-sm transition-all hover:-translate-y-1 hover:bg-orange-400 h-full min-h-[160px] duration-300'>
											<div>
												<Image src={'/images/bds.png'} alt="bds" width={80} height={80} objectFit='contain' />
											</div>
											<div>
												<h1 className='text-white text-lg mb-2'>BDS</h1>
												<p className='text-sm mb-1'>
													A system to support small and medium enterprises (SME) to use services from business service providers (BDS) registered on the BDS system in the form of Web Application.
												</p>
												<p className='text-xs text-gray-500 font-bold'>
													C# .NET SQLServer
												</p>
											</div>
										</div>
									</a>
								</Link>

								<Link href={'https://new.welearnpro.com/'} passHref>
									<a href="" target="_blank" rel="noopener noreferrer">
										<div className='bg-slate-800 w-full p-3 flex gap-x-3 items-start pb-10 rounded-sm transition-all hover:-translate-y-1 hover:bg-orange-400 h-full min-h-[160px] duration-300'>
											<div>
												<Image src={'/images/new-welearnpro.png'} alt="new-welearnpro" width={80} height={80} objectFit='contain' />
											</div>
											<div>
												<h1 className='text-white text-lg mb-2'>New WeLearnPro</h1>
												<p className='text-sm mb-1'>
													Online course system and facilities for students and teachers in the form of Web Application and Android & IOS Application.
												</p>
												<p className='text-xs text-gray-500 font-bold'>
													C# .NET SQLServer Kotlin Swift
												</p>
											</div>
										</div>
									</a>
								</Link>

								<Link href={'https://www.consultant.pdmo.go.th/matching/'} passHref>
									<a href="" target="_blank" rel="noopener noreferrer">
										<div className='bg-slate-800 w-full p-3 flex gap-x-3 items-start pb-10 rounded-sm transition-all hover:-translate-y-1 hover:bg-orange-400 h-full min-h-[160px] duration-300'>
											<div>
												<Image src={'/images/matching-web.png'} alt="matching-web" width={80} height={80} objectFit='contain' />
											</div>
											<div>
												<h1 className='text-white text-lg mb-2'>Matching Web</h1>
												<p className='text-sm mb-1'>
													Project matching system with qualified consultants automatically in the form of Web Application.
												</p>
												<p className='text-xs text-gray-500 font-bold'>
													HTML Javascript PHP SQLServer
												</p>
											</div>
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Contact */}
				<section className='flex flex-col justify-center items-start mx-auto min-h-screen max-w-6xl transition-all duration-500 delay-[800ms] ease-in-out -translate-x-5 opacity-0' id='contact'>
					<div className="flex justify-between w-full flex-wrap">
						<div className='flex flex-col justify-center items-center w-full lg:mb-0 mb-4 lg:px-40 px-0'>
							<h1 className="text-2xl font-bold text-cc-orange-400 mb-3 flex">
								04. Interested in me?
							</h1>
							<h1 className="text-7xl font-bold text-gray-300 mb-5  text-center">
								Drop a message
							</h1>
							<p className='text-base text-gray-300 mb-5'>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
							<button type='button' onClick={() => window.location.href = "mailto:ktpskittipich@gmai.com"} className='transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none border rounded-md border-cc-orange-400 text-cc-orange-400 p-3'>
								ktpskittipich@gmail.com
							</button>
						</div>
					</div>
				</section>
			</main>
			<footer className='bg-cc-main-400 flex justify-center text-sm text-gray-700 py-5'>
				© 2022 Kittipich Husa. All Rights Reserved.
			</footer>
		</>
	)
}

export default Home
