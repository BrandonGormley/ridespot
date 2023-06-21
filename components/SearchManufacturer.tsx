'use client';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { manufacturers } from '@/constants';

export default function SearchManufacturer({
    manufacturer,
    setManufacturer,
}: SearchManufacturerProps) {
    const [query, setQuery] = useState('');

    const filteredManufacturers =
        query === ''
            ? manufacturers
            : manufacturers.filter((manufacturer) =>
                  manufacturer
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(query.toLowerCase().replace(/\s+/g, ''))
              );
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className={'absolute top-[14px]'}>
                        <Image
                            src={'/car-logo.svg'}
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className={'search-manufacturer__input'}
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {filteredManufacturers.map((manufacturer) => (
                                <Combobox.Option
                                    value={manufacturer}
                                    key={manufacturer}
                                    className={({ active }) =>
                                        `relative search-manufacturer__option ${
                                            active
                                                ? 'bg-[#09bc8a] text-white rounded-full hover:cursor-pointer'
                                                : 'text-gray-900'
                                        }`
                                    }
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? 'font-medium'
                                                        : 'font-normal'
                                                }`}
                                            >
                                                {manufacturer}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                        active
                                                            ? 'text-white'
                                                            : 'text-teal-600'
                                                    }`}
                                                ></span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
