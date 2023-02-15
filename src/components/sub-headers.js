import Image from "next/image";
import Link from "next/link";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export default function SubHeader() {
    return (
        <>
            <div className="w-full flex justify-center lg:h-9 xs:h-6 py-2 lg:px-10 bg-bermuda-blue">
                <div className="flex flex-grow lg:w-1/2 sm:w-1/4">
                    <span className="px-2 sm:py-1 flex">
                        <Image
                            priority
                            src="/facebook.svg"
                            height={20}
                            width={20}
                            style={{ width: '1rem', height: '1rem' }}
                            alt="Follow us on Facebook"
                        />
                    </span>
                    <span className="px-2 sm:py-1 flex">
                        <Image
                            priority
                            src="/instagram.svg"
                            height={20}
                            width={20}
                            style={{ width: '1rem', height: '1rem' }}
                            alt="Follow us on Instagram"
                        />
                    </span>
                    <span className="px-2 sm:py-1 flex">
                        <Image
                            priority
                            src="/twitter.svg"
                            height={20}
                            width={20}
                            style={{ width: '1rem', height: '1rem' }}
                            alt="Follow us on Twitter"
                        />
                    </span>
                    <span className="lg:px-2 sm:hidden lg:flex">
                        <span className="text-white text-13 f-500">+2349088337</span>
                    </span>
                </div>
                <div className="flex flex-grow justify-end w-1/2">
                    {/** Desktop View */}
                    <Menu className="sm:hidden lg:block px-10">
                        <MenuHandler>
                            <span className="font-500 text-sm text-white sm:hidden lg:flex cursor-pointer">Language Translator
                                <Image
                                    priority
                                    src="/chevrolet-down.svg"
                                    height={20}
                                    width={20}
                                    className='ml-1 mt-1'
                                    style={{ width: '1rem', height: '1rem' }}
                                    alt="down"
                                />
                            </span>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem className="p-3 bg-pink text-center cursor-default hover:bg-pink" style={{ background: '#FEF3EB' }}>Select Language</MenuItem>
                            <MenuItem className="text-center">French</MenuItem>
                            <MenuItem className="text-center">Arabic</MenuItem>
                            <MenuItem className="text-center">Chinese (Simplified)</MenuItem>
                            <MenuItem className="text-center">English</MenuItem>
                            <MenuItem className="text-center">Dutch</MenuItem>
                            <MenuItem className="text-center">German</MenuItem>
                            <MenuItem className="text-center">Swahili</MenuItem>
                            <MenuItem className="text-center">Hausa</MenuItem>
                            <MenuItem className="text-center">Igbo</MenuItem>
                            <MenuItem className="text-center">Yoruba</MenuItem>
                            <MenuItem className="text-center">Russian</MenuItem>
                            <MenuItem className="text-center">Portuguese</MenuItem>
                            <MenuItem className="text-center">Spanish</MenuItem>
                        </MenuList>
                    </Menu>

                    {/** Mobile View */}
                    <Menu className="sm:block lg:hidden sm:px-10" style={{paddingTop : '1%'}}>
                        <MenuHandler>
                            <span className="text-xs text-white sm:flex lg:hidden">Translator
                                <Image
                                    priority
                                    src="/chevrolet-down.svg"
                                    height={20}
                                    width={20}
                                    className='ml-1 mt-1'
                                    style={{ width: '0.5rem', height: '0.5rem' }}
                                    alt="down"
                                />
                            </span>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem className="p-3 bg-pink text-center cursor-not-allowed hover:bg-pink" style={{ background: '#FEF3EB' }}>Select Language</MenuItem>
                            <MenuItem className="text-center">French</MenuItem>
                            <MenuItem className="text-center">Arabic</MenuItem>
                            <MenuItem className="text-center">Chinese (Simplified)</MenuItem>
                            <MenuItem className="text-center">English</MenuItem>
                            <MenuItem className="text-center">Dutch</MenuItem>
                            <MenuItem className="text-center">German</MenuItem>
                            <MenuItem className="text-center">Swahili</MenuItem>
                            <MenuItem className="text-center">Hausa</MenuItem>
                            <MenuItem className="text-center">Igbo</MenuItem>
                            <MenuItem className="text-center">Yoruba</MenuItem>
                            <MenuItem className="text-center">Russian</MenuItem>
                            <MenuItem className="text-center">Portuguese</MenuItem>
                            <MenuItem className="text-center">Spanish</MenuItem>
                        </MenuList>
                    </Menu>
                    <span className="lg:px-10 sm:hidden lg:flex text-end">
                        <span className="text-white text-13 f-500">Blog</span>
                    </span>
                    <span className="lg:px-10 sm:hidden lg:flex text-end">
                        <span className="text-white text-13 f-500">FAQs</span>
                    </span>

                    {/** Desktop View */}
                    <Menu className="sm:hidden lg:block pl-20">
                        <MenuHandler>
                            <span className="font-500 text-xs text-white sm:hidden lg:flex cursor-pointer">Client Login
                                <Image
                                    priority
                                    src="/chevrolet-down.svg"
                                    height={20}
                                    width={20}
                                    className='ml-1 mt-1'
                                    style={{ width: '1rem', height: '1rem' }}
                                    alt="down"
                                />
                            </span>
                        </MenuHandler>
                        <MenuList style={{ padding: '0px' }} className='lg:w-72'>
                            <MenuItem className="bg-pink text-center cursor-default flex hover:bg-pink" style={{ background: '#FEF3EB', borderRadius: '0px' }}>
                                <span className="w-28 flex">
                                    <span className="text-bermuda-blue text-lg underline cursor-pointer">Individual</span>
                                </span>
                                <span className="w-28 flex justify-end">
                                    <span className="text-bermuda-blue text-lg">Corporate</span>
                                </span>
                            </MenuItem>
                            <MenuItem className="cursor-default hover:bg-white bg-white flex flex-col items-center p-5" style={{ background: '#FFF' }}>
                                <span className="text-grey-light text-xs uppercase">STI Assets Management Limited</span>
                                <Button className="bg-carrot-orange my-2 w-full"> Sign In</Button>
                            </MenuItem>
                            <MenuItem className="text-center flex" style={{ background: '#FFF' }}>
                                <Link href='signup' className="text-grey-light text-xs px-6">Sign Up</Link>
                                <div className="bg-grey-light h-4" style={{ width: '1px' }} />
                                <Link href='forgotPassword' className="text-grey-light text-xs px-6">Forgot Password</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    {/** Mobile View */}
                    <span className="sm:px-2 lg:hidden"></span>
                    <Menu className="lg:hidden sm:block px-20">
                        <MenuHandler>
                            <span className="text-xs text-white sm:flex lg:hidden" style={{ paddingTop: '1%' }}>Client Login
                                <Image
                                    priority
                                    src="/chevrolet-down.svg"
                                    height={20}
                                    width={20}
                                    className='ml-1 mt-1'
                                    style={{ width: '0.5rem', height: '0.5rem' }}
                                    alt="down"
                                />
                            </span>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem className="bg-pink text-center cursor-default flex hover:bg-pink" style={{ background: '#FEF3EB', borderRadius: '0px' }}>
                                <span className="w-1/2 flex">
                                    <span className="text-bermuda-blue text-xs font-semibold underline cursor-pointer">Individual</span>
                                </span>
                                <span className="w-1/2 flex justify-end">
                                    <span className="text-bermuda-blue text-xs font-semibold">Corporate</span>
                                </span>
                            </MenuItem>
                            <MenuItem className="cursor-default hover:bg-white bg-white flex flex-col items-center p-2" style={{ background: '#FFF' }}>
                                <span className="text-grey-light text-xs uppercase">STI Assets Management Limited</span>
                                <Button className="bg-carrot-orange my-2 w-full"> Sign In</Button>
                            </MenuItem>
                            <MenuItem className="text-center flex" style={{ background: '#FFF' }}>
                                <Link href='signup' className="text-grey-light text-xs px-6">Sign Up</Link>
                                <div className="bg-grey-light h-4" style={{ width: '1px' }} />
                                <Link href='forgotPassword' className="text-grey-light text-xs px-6">Forgot Password</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <span className="sm:px-3 lg:hidden"></span>
                </div>
            </div>
        </>
    )
}