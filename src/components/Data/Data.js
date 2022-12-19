import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal
} from '@iconscout/react-unicons'
import { ScaleSharp } from '@mui/icons-material'
import img1 from '../../img/img1.jpg'
import  img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.png'

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics"
    }
]

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31,  40, 28, 51, 42, 109, 100],
            },
        ],

    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "20,970",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10,  100, 50, 70, 80, 30, 40],
            },
        ],

    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "8,970",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10,  25, 15, 30, 12, 15, 20],
            },
        ],

    },
]


export const UpdatesData = [
    {
        img: img1,
        name: 'Ravi Kumar',
        noti: " has ordered Titan Smart watch 2500mh Battery",
        time: '10 seconds ago',
    },
    {
        img: img2,
        name: 'Srikanth',
        noti: " has received Iphone 13 series Mobile",
        time: '1 hour ago',
    },
    {
        img: img3,
        name: 'Sumanth',
        noti: " has ordered One Plus Nord 2T mobile",
        time: '30 minutes ago',
    },
]