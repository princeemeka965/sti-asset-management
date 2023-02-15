import Image from "next/image";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import Divider from '@mui/material/Divider';

export default function SubHeader() {
    return (
        <>
            <div className="w-full flex justify-center lg:h-9 xs:h-6 py-2 lg:px-10 bg-bermuda-blue">
                <div className="flex flex-grow w-1/2">
                    <span className="px-2 flex">
                    <Image
                        priority
                        src="/facebook.svg"
                        height={20}
                        width={20}
                        style={{ width: '1rem', height: '1rem' }}
                        alt="Follow us on Facebook"
                        />
                    </span>
                    <span className="px-2 flex">
                        <Image
                            priority
                            src="/instagram.svg"
                            height={20}
                            width={20}
                            style={{ width: '1rem', height: '1rem' }}
                            alt="Follow us on Instagram"
                        />
                    </span>
                    <span className="px-2 flex">
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
                <div className="flex flex-grow justify-center w-1/2">
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
                            <MenuItem className="p-3 bg-pink text-center cursor-not-allowed">Select Language</MenuItem>
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
                    {/** Mobiel View */}
                    <Menu className="sm:block lg:hidden">
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
                            <MenuItem className="p-3 bg-pink text-center cursor-not-allowed">Select Language</MenuItem>
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
                    <Menu className="sm:hidden lg:block px-10">
                        <MenuHandler>
                            <span className="font-500 text-sm text-white sm:hidden lg:flex cursor-pointer">Client Login
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
                            <MenuItem className="bg-pink text-center cursor-not-allowed flex hover:bg-pink" style={{ background: '#FEF3EB'}}>
                                <span className="w-28 flex">
                                    <span className="text-bermuda-blue text-lg underline cursor-pointer">Individual</span>
                                </span>
                                <span className="w-28 flex justify-end">
                                    <span className="text-bermuda-blue text-lg">Corporate</span>
                                </span>
                            </MenuItem>
                            <MenuItem className="cursor-default hover:bg-white bg-white flex flex-col items-center p-2" style={{ background: '#FFF' }}>
                                <span className="text-grey-light text-xs uppercase">STI Assets Management Limited</span>
                                <Button className="bg-carrot-orange my-2 w-full"> Sign In</Button>
                            </MenuItem>
                            <MenuItem className="text-center" style={{ background: '#FFF' }}>
                                <span className="text-grey-light text-xs">Sign Up</span>
                                <Divider orientation="vertical" flexItem />
                            </MenuItem>
                        </MenuList>
                        </Menu>
                    </div>
            </div>
        </>
    )
}