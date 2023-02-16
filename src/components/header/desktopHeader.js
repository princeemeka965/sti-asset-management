import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { Fade, Slide } from "react-awesome-reveal";

export default function DesktopHeader({ classProps, app }) {
    const [active, setActive] = useState('Home');

    const navLabels = ['Home', 'About us', 'Services', 'Products', 'Contact us'];

    return (
        <>
            <div className={classProps}>
                <div className={`bg-home w-full h-lg`}>
                    <div className="w-full flex justify-center py-3 lg:px-20">
                        <div className="flex flex-grow lg:w-1/4">
                            <span className="px-2 lg:py-3 flex">
                                <Image
                                    priority
                                    src="/logo.png"
                                    height={36}
                                    width={36}
                                    alt="Sti Logo"
                                />
                            </span>
                            <span className="px-2 lg:py-3 flex text-white text-13 font-black">
                                STI ASSETS
                                <br />
                                MANAGEMENT
                                <br />
                                LIMITED
                            </span>
                        </div>

                        {/** Navigation */}
                        <div className="flex flex-grow justify-end w-3/4">
                            {navLabels.map((label, index) => (
                                <span className="lg:px-9 lg:flex text-end py-3" key={index}>
                                    <Link href='/' className={`text-white text-13 ${active === label ? 'font-bold' : 'f-500'}`}>{label}</Link>
                                </span>
                            ))}
                            <span className="lg:px-9 lg:flex text-end">
                                <Button className="bg-carrot-orange h-10 w-full"> Request a Quote </Button>
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex justify-start py-3 lg:px-20">
                        <div className="py-3 flex-flex-col w-1/4">
                            <Slide>
                                <span className="text-3xl font-black text-white">
                                    Financial services
                                    made simple
                                </span>
                            </Slide>

                            <Fade top delay={1e3} cascade className="text-white py-5">
                                <p className="text-white py-3">
                                    A wholly owned Nigerian company poised to provide cutting-edge
                                    financial services geared at supporting the business
                                    landscape in the country for both individuals and corporate entities.
                                </p>

                                <p className="text-white font-bold flex text-xl">
                                    Learn More
                                    <Image
                                        priority
                                        src="/arrow.svg"
                                        height={16}
                                        width={16}
                                        className='ml-1'
                                        alt="arrow Logo"
                                    />
                                </p>
                            </Fade>
                        </div>

                        {app === 'home' && (
                            <div className='fixed w-16 h-36 top-20 bg-carrot-orange flex flex-col right-0' id='support'>
                                <span className="p-2 flex flex-col text-white items-center">
                                    <Image
                                        priority
                                        src="/chat.svg"
                                        height={20}
                                        width={20}
                                        alt="arrow Logo"
                                    />
                                    <p className="text-xs font-500 my-1">
                                        Chat
                                    </p>
                                </span>
                                <div className="my-2 w-full h-1-5 bg-divider-grey"></div>
                                <span className="p-2 flex flex-col text-white items-center">
                                    <Image
                                        priority
                                        src="/customer-support.svg"
                                        height={20}
                                        width={20}
                                        alt="support Logo"
                                    />
                                    <p className="text-xs font-500 my-1">
                                        Support
                                    </p>
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}