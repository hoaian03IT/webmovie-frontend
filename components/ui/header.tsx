"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdSearch, MdMenu, MdLocalMovies, MdApartment, MdOutlineBookmark, MdAddCircle } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from "@nextui-org/react";

const searchCategory = [
    {
        id: 0,
        label: "All",
        icon: MdSearch,
    },
    {
        id: 1,
        label: "Titles",
        icon: MdLocalMovies,
    },
    {
        id: 3,
        label: "Company",
        icon: MdApartment,
    },

    {
        id: 4,
        label: "Keyword",
        icon: MdOutlineBookmark,
    },
];

const accountParts = [
    { id: 0, label: "Your activity", link: "" },
    { id: 1, label: "Your watchlist", link: "" },
    { id: 2, label: "Your ratings", link: "" },
    { id: 3, label: "Your lists", link: "" },
    { id: 4, label: "Account settings", link: "" },
    { id: 5, label: "Sign out", link: "" },
];

const languages = [
    { id: "en", label: "English" },
    { id: "vi", label: "Tiếng việt" },
];

export default function Header() {
    const [searchFilter, setSearchFilter] = useState(searchCategory[0].label);
    const [searchValue, setSearchValue] = useState("");
    const [languageOption, setLanguageOption] = useState(languages[0].id);
    const [openAccountOptions, setOpenAccountOptions] = useState(false);
    const [openSearchFilter, setOpenSearchFilter] = useState(false);
    const [openLanguageOption, setOpenLanguageOption] = useState(false);
    const [openResultSearch, setOpenResultSearch] = useState(false);

    const searchResultPopoverRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (!searchValue) {
                setOpenResultSearch(false);
                return;
            }

            if (!searchResultPopoverRef.current || !inputRef.current) {
                setOpenResultSearch(false);
                return;
            }

            if (
                !searchResultPopoverRef.current.contains(event.target as Node) &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setOpenResultSearch(false);
            } else {
                setOpenResultSearch(true);
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, [searchValue]);

    const handleSelectSearchFilter = (value: string) => {
        setSearchFilter(value);
        setOpenSearchFilter(false);
    };

    const handleSelectLanguage = (value: string) => {
        setLanguageOption(value);
    };

    return (
        <nav className="bg-stone-800">
            <div className="container mx-auto text-sm flex gap-2 items-center py-2">
                <Link href="/">
                    <Image
                        className="h-full"
                        src="/logo.png"
                        alt="A-Movie"
                        width={100}
                        height={50}
                        draggable={false}
                        priority={true}
                    />
                </Link>
                <label className="px-4 py-1 h-full flex items-center select-none rounded-sm hover:bg-stone-700 transition-all cursor-pointer text-white">
                    <MdMenu className="text-white size-6 me-1" />
                    <strong>Menu</strong>
                </label>
                <div className="relative flex-1">
                    <div className="flex items-center focus-within:border-yellow-400 border-2 border-white bg-white rounded-sm overflow-hidden">
                        <Popover isOpen={openSearchFilter} onOpenChange={setOpenSearchFilter} placement="bottom-start">
                            <PopoverTrigger>
                                <label className="flex items-center px-2 py-1 text-black bg-white border-r border-stone-300 cursor-pointer hover:bg-stone-50 transition-all">
                                    {searchFilter}
                                    <HiOutlineChevronUpDown className="ms-1" />
                                </label>
                            </PopoverTrigger>
                            <PopoverContent className="mt-1.5 bg-stone-800 py-2 px-0 rounded-sm">
                                <ul>
                                    {searchCategory.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <li
                                                key={item.id}
                                                className="py-2 ps-4 pe-8 flex items-center hover:bg-stone-700 text-white transition-all cursor-pointer"
                                                onClick={() => handleSelectSearchFilter(item.label)}>
                                                <Icon className="text-2xl text-stone-400 me-2" />
                                                {item.label}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </PopoverContent>
                        </Popover>
                        <input
                            ref={inputRef}
                            className="flex-1 px-4 py-1 text-sm text-black outline-none"
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button className="px-2 bg-white text-stone-500">
                            <MdSearch className="size-6" />
                        </button>
                    </div>
                    <div
                        ref={searchResultPopoverRef}
                        className={clsx(
                            "p-2 absolute left-0 right-0 top-[100%] h-[200px] translate-y-1 bg-stone-700 rounded-sm",
                            openResultSearch ? "block" : "hidden"
                        )}></div>
                </div>
                <Link
                    href="/"
                    className="py-1.5 px-2 border-none text-white hover:bg-stone-700 transition-all rounded-sm">
                    <strong>AMovie</strong>
                    <strong className="text-blue-500">Pro</strong>
                </Link>
                <Link
                    href="/"
                    className="py-1.5 px-2 flex items-center border-none text-white hover:bg-stone-700 transition-all rounded-sm">
                    <MdAddCircle className="text-xl me-1" />
                    <strong>Watchlist</strong>
                </Link>
                <div>
                    <Popover isOpen={openAccountOptions} onOpenChange={setOpenAccountOptions} placement="bottom-start">
                        <PopoverTrigger>
                            <label className="font-bold flex items-center py-1.5 px-2 border-none text-white hover:bg-stone-700 transition-all rounded-sm">
                                <FaUserCircle className="text-white text-xl me-1" />
                                {"An"}
                                <HiOutlineChevronUpDown className="ms-1" />
                            </label>
                        </PopoverTrigger>
                        <PopoverContent className="mt-1.5 bg-stone-800 py-2 px-0 rounded-sm">
                            <ul>
                                {accountParts.map((item) => {
                                    return (
                                        <li
                                            key={item.id}
                                            className="py-2 ps-4 pe-8 hover:bg-stone-700 text-white transition-all cursor-pointer"
                                            onClick={() => setOpenAccountOptions(false)}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Popover isOpen={openLanguageOption} onOpenChange={setOpenLanguageOption} placement="bottom-start">
                        <PopoverTrigger>
                            <label className="font-bold flex items-center py-1.5 px-2 border-none text-white hover:bg-stone-700 transition-all rounded-sm">
                                {languageOption.toUpperCase()}
                                <HiOutlineChevronUpDown className="ms-1" />
                            </label>
                        </PopoverTrigger>
                        <PopoverContent className="mt-1.5 bg-stone-800 py-2 px-0 rounded-sm">
                            <RadioGroup onValueChange={handleSelectLanguage} defaultValue={languageOption}>
                                {languages.map((item) => {
                                    const active = item.id === languageOption;
                                    return (
                                        <div
                                            key={item.id}
                                            className="w-full py-2 ps-4 pe-8 hover:bg-stone-700 transition-all">
                                            <Radio value={item.id} color={active ? "warning" : "default"}>
                                                <span className={clsx(active ? "text-warning-400" : "text-white")}>
                                                    {item.label}
                                                </span>
                                            </Radio>
                                        </div>
                                    );
                                })}
                            </RadioGroup>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </nav>
    );
}
