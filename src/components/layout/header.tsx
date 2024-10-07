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
                    key="san-pham"
                    icon={<HomeOutlined />}
                    onChange={() => setOpen(true)}
                >
                    <Link
                        to="/"
                    >Sản phẩm</Link>
                </Menu.Item>

                <Menu.Item
                    key="trai-nghiem"
                    icon={<ProductOutlined />}
                >
                    <Link to="/trai-nghiem">Trải Nghiệm</Link>
                </Menu.Item>

                <Menu.Item
                    key="uu-dai"
                    icon={<ContactsOutlined />}
                >
                    <Link to="/uu-dai">Ưu đãi</Link>
                </Menu.Item>

                <Menu.Item
                    key="ve-chung-toi"
                    icon={<ContactsOutlined />}
                    style={{
                        justifyContent: 'center',
                        marginRight: 'auto',
                        display: 'flex',

                    }}
                >
                    <Link to="/ve-chung-toi">Về chúng tôi</Link>
                </Menu.Item>


                <Menu.Item
                    key="destination-detail"
                    icon={<ProductOutlined />}
                    onClick={() => setIsModalOpen(true)}
                >
                    Đăng ký
                </Menu.Item>


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