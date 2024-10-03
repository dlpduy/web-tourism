import { HomeOutlined, LoginOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            label: <Link to="/">Home</Link>,
            key: 'mail',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/login">Login</Link>,
            key: 'login',
            icon: <LoginOutlined />
        },
    ];

    return (
        <Menu
            mode="horizontal"
            items={items} />
    );
};

export default Header;