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
                    <Menu.Item><Link to='/'>Sản phẩm</Link></Menu.Item>
                    <Menu.Item><Link to='/trai-nghiem'>Trải nghiệm</Link></Menu.Item>
                    <Menu.Item><Link to='/uu-dai'>Ưu đãi</Link></Menu.Item>
                    <Menu.Item><Link to='/ve-chung-toi'>Về chúng tôi</Link></Menu.Item>
                </Menu>
            </Drawer>
        </>
    );
};

export default DrawerComponent;