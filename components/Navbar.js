import React, { Fragment, useState } from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.png";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const navHandler = () => {
		setNav((prevNav) => !prevNav);
	};

	const { data: session } = useSession();

	return (
		<div className="fixed h-14 w-full flex items-center p-4 bg-[#0e0e10] mb-[2px] z-10">
			{/* Left side */}
			<div className="flex grow items-center justify-start">
				<Link href="/">
					<a className="flex">
						<Image
							src={Logo}
							width="36"
							height="36"
							alt="/"
							className="cursor-pointer z-10"
							onClick={navHandler}
						/>
					</a>
				</Link>
				<p className="p-4 font-bold">Browse</p>
				<div className="p-4">
					<Menu as="div" className="relative text-left">
						<div className="flex">
							<Menu.Button>
								<BsThreeDotsVertical size={20} />
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-500 text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												Settings
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-500 text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												Support
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-500 text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												License
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>

			{/* Middle */}
			<div className="hidden md:flex grow-[2] items-center justify-center">
				<div className="bg-gray-500 text-white flex justify-between items-center rounded-2xl w-full max-w-[400px] mx-auto p-2">
					<div>
						<input
							type="text"
							placeholder="Search"
							className="bg-transparent border-none text-white focus:outline-none"
						/>
					</div>
					<div>
						<BsSearch />
					</div>
				</div>
			</div>

			{/* Right Side */}
			<div className="hidden md:flex grow items-center justify-end">
				{session ? (
					<div className="flex items-center">
						<Link href="/account">
							<div>
								<p className="pr-4 cursor-pointer">
									Welcome, {session.user.name}
								</p>
							</div>
						</Link>
						<Menu as="div" className="relative text-left">
							<div className="flex">
								<Menu.Button>
									<Image
										className="rounded-full"
										src={session.user.image}
										alt="/"
										width="45"
										height="45"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<p
													className={classNames(
														active
															? "bg-gray-500 text-gray-100"
															: "text-gray-200",
														"block px-4 py-2 text-sm cursor-pointer"
													)}
												>
													<div className="flex items-center">
														<MdManageAccounts size={18} className="mr-1" />
														<Link href="/account">Account</Link>
													</div>
												</p>
											)}
										</Menu.Item>

										<Menu.Item>
											{({ active }) => (
												<p
													onClick={() => signOut()}
													className={classNames(
														active
															? "bg-gray-500 text-gray-100"
															: "text-gray-200",
														"block px-4 py-2 text-sm cursor-pointer"
													)}
												>
													<div className="flex items-center">
														<FiLogOut size={18} className="mr-1" />
														Logout
													</div>
												</p>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				) : (
					<div className="flex items-center">
						<Link href="/account">
							<button className="px-4 py-[6px] bg-[#9147FF] rounded-lg font-bold mr-2">
								Account
							</button>
						</Link>
						<BsPerson size={30} />
					</div>
				)}
			</div>

			{/* Hamburger Menu */}
			<div onClick={navHandler} className="block md:hidden z-10 cursor-pointer">
				{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
			</div>

			{/* Mobile View */}
			<div
				className={
					nav
						? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
						: "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
				}
			>
				<ul className="text-center">
					<li
						onClick={navHandler}
						className="text-3xl font-bold py-4 hover:text-[#9147ff]"
					>
						<Link href="/">Home</Link>
					</li>
					<li
						onClick={navHandler}
						className="text-3xl font-bold py-4 hover:text-[#9147ff]"
					>
						<Link href="/#live">Live Chanels</Link>
					</li>
					<li
						onClick={navHandler}
						className="text-3xl font-bold py-4 hover:text-[#9147ff]"
					>
						<Link href="/#categories">Top Categories</Link>
					</li>
					<li
						onClick={navHandler}
						className="text-3xl font-bold py-4 hover:text-[#9147ff]"
					>
						<Link href="/account">Account</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
