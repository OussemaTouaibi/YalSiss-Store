import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GIIcons from 'react-icons/gi';

import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';

import MediaQuery from 'react-responsive';

export const SidebarData = [
  {
    title: 'Clothes',
    path: '/',
    icon: <GIIcons.GiClothes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Men',
        path: '/category/vetements-homme',
        icon: <IoIcons.IoIosMan />
      },
      {
        title: 'Women',
        path: '/category/vetements-femme',
        icon: <IoIcons.IoIosWoman />
      },
      {
        title: 'Kids',
        path: '/category/vetements-enfant',
        icon: <FaIcons.FaChild />
      }
    ]
  },
  {
    title: 'Electronics',
    path: '/',
    icon: <GIIcons.GiSmartphone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mobile Phones & Tablet',
        path: '/category/telephones-and-tablettes',
        icon: <FaIcons.FaTabletAlt />,
        cName: 'sub-nav'
      },
      {
        title: 'Computers & TVs',
        path: '/category/ordinateurs-and-tvs',
        icon: <FaIcons.FaLaptop />,
        cName: 'sub-nav'
      },
      {
        title: 'Other Electronics',
        path: '/category/others',
        icon: <FaIcons.FaPlus />
      }
    ]
  },
  {
    title: 'House & Office',
    path: '/',
    icon: <GIIcons.GiSofa />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Furnitures',
        path: '/category/meubles',
        icon: <GIIcons.GiDesk />
      },
      {
        title: 'Decoration',
        path: '/category/decoration',
        icon: <GIIcons.GiColumnVase />
      }
    ]
  },

  {
    title: 'Health & beauty',
    path: '/',
    icon: <GIIcons.GiHealing />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Parfums',
        path: '/category/parfums',
        icon: <GIIcons.GiPerfumeBottle />
      },
      {
        title: 'Makeup',
        path: '/category/maquillages',
        icon: <GIIcons.GiLipstick />
      },
      {
        title: 'Accessories',
        path: '/category/accesoires',
        icon: <FaIcons.FaShoppingBag />
      },
      {
        title: 'Watches',
        path: '/category/watches',
        icon: <BsIcons.BsWatch />
      }
    ]
  },


];
