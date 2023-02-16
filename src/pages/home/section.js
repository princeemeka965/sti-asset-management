import { Card } from "@material-tailwind/react";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function Section() {

    return (
        <>
            <div className="w-full flex justify-start py-3 lg:pl-16">
                <div className="w-1/3">
                    <span className="font-black text-4xl">
                        Assets Management made easy
                    </span>
                </div>
                <Slide>
                    <Card className="p-4 mx-4 w-11/12 -mt-24">
                        <Fade delay={1e3} cascade>
                            <div className="flex flex-col py-4 pl-2">
                                <Image
                                    priority
                                    src="/dollar-bag.svg"
                                    height={70}
                                    width={70}
                                    alt="Follow us on Facebook"
                                />
                                <span className="my-5">
                                    <p className="text-base font-bold text-bermuda-blue">Private Wealth Management</p>
                                </span>
                                <span className="my-2">
                                    <p className="text-base text-bermuda-blue">
                                        Write a short description, that will describe the title or something informational and useful.
                                    </p>
                                </span>
                                <span className="my-4 text-base font-500 text-bermuda-blue flex">
                                    Read More
                                    <Image
                                        priority
                                        src="/arrow.svg"
                                        height={16}
                                        width={16}
                                        className='ml-1 text-bermuda-blue'
                                        style={{ color: '#2B3056' }}
                                        alt="arrow Logo"
                                    />
                                </span>
                            </div>
                        </Fade>
                    </Card>
                    <Card className="p-4 mx-4 w-11/12 -mt-24">
                        <Fade delay={1e3} cascade>
                            <div className="flex flex-col py-4 pl-2">
                                <Image
                                    priority
                                    src="/wallet.svg"
                                    height={70}
                                    width={70}
                                    alt="Follow us on Facebook"
                                />
                                <span className="my-5">
                                    <p className="text-base font-bold text-bermuda-blue">Individual Funds Management</p>
                                </span>
                                <span className="my-2">
                                    <p className="text-base text-bermuda-blue">
                                        Write a short description, that will describe the title or something informational and useful.
                                    </p>
                                </span>
                                <span className="my-4 text-base font-500 text-bermuda-blue flex">
                                    Read More
                                    <Image
                                        priority
                                        src="/arrow.svg"
                                        height={16}
                                        width={16}
                                        className='ml-1 text-bermuda-blue'
                                        style={{ color: '#2B3056' }}
                                        alt="arrow Logo"
                                    />
                                </span>
                            </div>
                        </Fade>
                    </Card>
                    <Card className="p-4 mx-4 w-11/12 -mt-24">
                        <Fade delay={1e3} cascade>
                            <div className="flex flex-col py-4 pl-2">
                                <Image
                                    priority
                                    src="/bank.svg"
                                    height={70}
                                    width={70}
                                    alt="Follow us on Facebook"
                                />
                                <span className="my-5">
                                    <p className="text-base font-bold text-bermuda-blue">Corporate Investment Schemes</p>
                                </span>
                                <span className="my-2">
                                    <p className="text-base text-bermuda-blue">
                                        Write a short description, that will describe the title or something informational and useful.
                                    </p>
                                </span>
                                <span className="my-4 text-base font-500 text-bermuda-blue flex">
                                    Read More
                                    <Image
                                        priority
                                        src="/arrow.svg"
                                        height={16}
                                        width={16}
                                        className='ml-1 text-bermuda-blue'
                                        style={{ color: '#2B3056' }}
                                        alt="arrow Logo"
                                    />
                                </span>
                            </div>
                        </Fade>
                    </Card>
                </Slide>
            </div>


            {/** ABOUT US */}

            <div className="w-full flex flex-col items-center py-3 my-28 lg:px-16">
                <Fade direction='down' cascade className="flex flex-col items-center">
                    <div className="w-1/2">
                        <p className="text-4xl font-black text-center">
                            About Us
                        </p>
                        <p className="my-5 text-base">
                            STI Assets Management Limited is a non-bank financial company,
                            incorporated in 2008 to provide extensive Financial Services in the Nigerian
                            Financial Sector with special bias for Assets Management and Financial Advisory Services. It is a wholly owned Nigerian company poised to
                            provide cutting-edge financial services geared at supporting the business landscape in the country for both individuals and corporate entities.
                        </p>

                        <p className="my-3 text-base flex text-carrot-orange font-bold">
                            Read More
                            <Image
                                priority
                                src="/arrow-orange.svg"
                                height={16}
                                width={16}
                                className='ml-1'
                                alt="arrow Logo"
                            />
                        </p>

                        <div className="flex w-full my-10">
                            <div className="p-2 w-1/4 flex flex-col">
                                <Image
                                    priority
                                    src="/investment.svg"
                                    height={50}
                                    width={50}
                                    className='ml-1'
                                    alt="investment"
                                />
                                <span className="text-sm my-1">Investment Calculator</span>
                            </div>
                            <div className="p-2 w-1/4 flex flex-col">
                                <Image
                                    priority
                                    src="/support-chat.svg"
                                    height={50}
                                    width={50}
                                    className='ml-1'
                                    alt="investment"
                                />
                                <span className="text-sm my-1">Support System</span>
                            </div>
                            <div className="p-2 w-1/4 flex flex-col">
                                <Image
                                    priority
                                    src="/branch.svg"
                                    height={50}
                                    width={50}
                                    className='ml-1'
                                    alt="investment"
                                />
                                <span className="text-sm my-1">Branch Locator</span>
                            </div>
                            <div className="p-2 w-1/4 flex flex-col">
                                <Image
                                    priority
                                    src="/notification.svg"
                                    height={50}
                                    width={50}
                                    className='ml-1'
                                    alt="investment"
                                />
                                <span className="text-sm my-1">Push Notification</span>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}