import { Form, Input, Modal } from 'antd';
import { notification } from 'antd';
const ModalRegister = (props: any) => {

    const { isModalOpen, setIsModalOpen } = props;
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = () => {
        api['success']({
            message: 'Đăng ký tư vấn thành công',
            description:
                'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.',
        });
    };


    const handleOk = () => {
        setIsModalOpen(false);
        openNotificationWithIcon();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {contextHolder}
            <Modal title="Đăng ký tư vấn" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <Form.Item
                    label="Họ và tên"
                    rules={[{ required: true, message: 'Vui lòng nhập Họ và tên!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                >
                    <Input />
                </Form.Item>
            </Modal>
        </>
    );
};

export default ModalRegister;