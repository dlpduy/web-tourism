import { Drawer, Menu } from 'antd';
import { Link } from 'react-router-dom';
const DrawerComponent = (props: any) => {
    const { open, setOpen } = props

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                placement='right'
                width={500}
                onClose={onClose}
                open={open}
                title="Menu"
            >
                <Menu
                    mode="inline"
                    style={{
                        width: '100%',
                        height: '100%'

                    }}
                >
                    <Menu.Item><Link to='/'>Trang chủ</Link></Menu.Item>
                    <Menu.Item><Link to='/destination'>Điểm đến</Link></Menu.Item>
                    <Menu.Item><Link to='/about-us'>Liên hệ chúng tôi</Link></Menu.Item>
                </Menu>
            </Drawer>
        </>
    );
};

export default DrawerComponent;