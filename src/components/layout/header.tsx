import { ContactsOutlined, HomeOutlined, MenuOutlined, ProductOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import DrawerComponent from '../app/drawer';
import { Link, useParams } from 'react-router-dom';
import './header.css';
import ModalRegister from '../app/modal';
const Header = () => {
    const { id } = useParams<{ id: string }>();
    const [open, setOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>
            <Menu
                mode="horizontal"
                aria-controls='basic-menu'
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Menu.Item
                    key="menu"
                    style={{
                        justifyContent: 'center',
                        marginRight: 'auto',
                        display: 'flex',

                    }}
                    icon={<MenuOutlined />}
                    onClick={() => setOpen(true)}
                >

                </Menu.Item>
                <Menu.Item
                    key="home"
                    icon={<HomeOutlined />}
                    onChange={() => setOpen(true)}
                >
                    <Link
                        to="/"
                    >Trang chủ</Link>
                </Menu.Item>

                <Menu.Item
                    key="services"
                    icon={<ProductOutlined />}
                >
                    <Link to="/destination">Điểm đến</Link>
                </Menu.Item>

                <Menu.Item
                    key="about-us"
                    icon={<ContactsOutlined />}
                    style={{
                        justifyContent: 'center',
                        marginRight: 'auto',
                        display: 'flex',

                    }}
                >
                    <Link to="/about-us">Về chúng tôi</Link>
                </Menu.Item>

                {id &&
                    <Menu.Item
                        key="destination-detail"
                        icon={<ProductOutlined />}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Link to={`/destination/${id}`}>Đăng ký tư vấn</Link>
                    </Menu.Item>
                }

            </Menu>
            <DrawerComponent
                open={open}
                setOpen={setOpen}
            />
            <ModalRegister
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    );
};

export default Header;