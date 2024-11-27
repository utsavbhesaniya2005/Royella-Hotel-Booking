import './RoyellaRooms.css';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const RoyellaRooms = () => {
    return(
        <>
            <section className="checkout mt-[-75px]">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-10">
                            <div className="checkout-data px-[20px] py-6 flex">
                                <div className="p-[12px] checkout-detail">
                                    <p className='ms-[12px]'>Check In</p>
                                    <div className="date flex items-center py-[8px] px-[12px] items-center pt-0.5">
                                        <input type="date" className='bg-transparent text-white focus:border-none outline-0 text-sm border-none'/>
                                    </div>
                                </div>
                                <div className="p-[12px] checkout-detail">
                                    <p className='ms-[12px]'>Check Out</p>
                                    <div className="date flex items-center py-[8px] px-[12px] items-center pt-0.5">
                                        <input type="date" className='bg-transparent text-white focus:border-none outline-0 text-sm border-none'/>
                                    </div>
                                </div>
                                <div className="p-[12px] checkout-detail">
                                    <Menu as="div" className="relative inline-block text-left align-middle">
                                        <div className='menu-btn borer-none'>
                                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent text-sm font-semibold hover:bg-gray-50 font-normal">
                                                Rooms
                                            <ChevronDownIcon aria-hidden="true" className="size-4 text-gray-400 ms-[95px]" />
                                            </MenuButton>
                                            <div className="room-detail text-lg pt-[14px] text-white">
                                                <span>1 Room</span>
                                            </div>
                                        </div>

                                        <MenuItems transition
                                            className="menu absolute left-0 z-20 mt-[25px] w-56 origin-top-right rounded-md shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                            <div className="py-[16px]">
                                                <MenuItem>
                                                    <div className="flex justify-between">
                                                        <a href="#" className="block px-[20px] py-2 text-sm text-white font-normal">
                                                            <span>1 Room</span>
                                                        </a>
                                                        <div className="counter flex me-[20px] mt-[8px]">
                                                            <div className="add me-[8px]">
                                                                <button>+</button>
                                                            </div>
                                                            <div className="sub">
                                                                <button>-</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu>
                                </div>
                                <div className="p-[12px] checkout-detail">
                                    <Menu as="div" className="relative inline-block text-left align-middle">
                                        <div className='menu-btn borer-none'>
                                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent text-sm font-semibold hover:bg-gray-50 font-normal">
                                                Guests
                                            <ChevronDownIcon aria-hidden="true" className="size-4 text-gray-400 ms-[95px]" />
                                            </MenuButton>
                                            <div className="room-detail text-lg pt-[14px] text-white">
                                                <span>1 Adult, 0 Child</span>
                                            </div>
                                        </div>

                                        <MenuItems transition
                                            className="menu absolute left-0 z-20 mt-[25px] w-56 origin-top-right rounded-md shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                            <div className="py-[16px]">
                                                <MenuItem>
                                                    <div className="flex justify-between">
                                                        <a href="#" className="block px-[20px] py-2 text-sm text-white font-normal">
                                                            <span>1 Adult</span>
                                                        </a>
                                                        <div className="counter flex me-[20px] mt-[8px]">
                                                            <div className="add me-[8px]">
                                                                <button>+</button>
                                                            </div>
                                                            <div className="sub">
                                                                <button>-</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </MenuItem>
                                                <MenuItem>
                                                    <div className="flex justify-between">
                                                        <a href="#" className="block px-[20px] py-2 text-sm text-white font-normal">
                                                            <span>1 Child</span>
                                                        </a>
                                                        <div className="counter flex me-[20px] mt-[8px]">
                                                            <div className="add me-[8px]">
                                                                <button>+</button>
                                                            </div>
                                                            <div className="sub">
                                                                <button>-</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu>
                                </div>
                                <div className="p-[12px] checkout-detail ms-[50px] mt-[5px]">
                                    <button className='btn1 discover-btn text-capitalize'>Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rooms py-[120px] pt-[280px]">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RoyellaRooms;