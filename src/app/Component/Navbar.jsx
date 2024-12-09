import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../public/images/Logo.png';
import jubedapic from '../../../public/images/jubedapic.jpg'
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/About', current: false },
    { name: 'Resume', href: '/Resume', current: false },
    { name: 'Portfolio', href: '/Portfolio', current: false },
    { name: 'Services', href: '/Services', current: false },
    { name: 'Blogs', href: '/Blogs', current: false },
    { name: 'Contact', href: '/Contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="sticky top-0 bg-gradient-to-t from-[#c89116] via-black to-[#c89116] text-[#c89116]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#c89116] bg-black hover:bg-[#c89116] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Image alt="Jubeda PArveen" src={logo} className="h-8 w-auto bg-black rounded-full"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={
                                            classNames(item.current ? ' text-[#c89116] hover:bg-[#c89116] hover:text-black hover:rounded-full' : 'text-[#c89116] hover:bg-[#c89116] hover:text-black hover:rounded-full',
                                            'rounded-md px-3 py-1 text-sm font-medium',
                                        )}>{item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full border border-[#fcd786] p-1 text-gray-400 hover:text-black hover:bg-[#c89116] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-[#c89116] focus:ring-offset-2 focus:ring-offset-black">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <Image alt="Jubeda parveen" src={jubedapic} className="size-8 rounded-full"/>
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in p-2 bg-gradient-to-t to-black via-[#c89116] from-black text-[#c89116] uppercase">
                                <MenuItem>
                                    <Link href={"#"} className="block mt-1 px-4 py-2 text-sm rounded-full text-[#c89116] data-[focus]:bg-black data-[focus]:outline-none">
                                        Your Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href={"#"} className="block px-4 py-2 text-sm rounded-full text-[#ebd29c] data-[focus]:bg-black data-[focus]:outline-none">
                                        Settings
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="#" className="block px-4 py-2 text-sm rounded-full text-[#c89116] data-[focus]:bg-black data-[focus]:outline-none">
                                        Sign out
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}>{item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
