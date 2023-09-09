import {ImStatsBars} from 'react-icons/im'
import {TbTransfer} from 'react-icons/tb'
import {MdAttachMoney} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: ImStatsBars,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: TbTransfer,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: GiMoneyStack,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Spends",
        icon: MdAttachMoney,
        link: "/dashboard",
    },
]