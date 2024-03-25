import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import MenuIcons from "../../Assets/Images/Menu/menu.svg";

const items = [
    {
        key: '1',
        label: 'Home',
    },
    {
        key: '2',
        label: 'Clothes',
        children: [
            {
                key: '2-1',
                label: 'Mens',
            },
            {
                key: '2-2',
                label: 'Womens',
            },
            {
                key: '2-3',
                label: 'Kids',
            },
        ],
    },
    {
        key: '3',
        label: 'disabled sub menu',
        children: [
            {
                key: '3-1',
                label: '5d menu item',
            },
            {
                key: '3-2',
                label: '6th menu item',
            },
        ],
    },
];
const MegaMenu = () => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <div onClick={(e) => e.preventDefault()}>
            <Space className='items-center'>
                <img src={MenuIcons} alt="images" className="w-5" />
                <div className='uppercase text-base font-medium'>All Category</div>
                <CaretDownOutlined />
            </Space>
        </div>
    </Dropdown>
);
export default MegaMenu;