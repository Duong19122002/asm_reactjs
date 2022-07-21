import { Button, Col, Form, Input, InputNumber, Row, Typography, message } from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router';
import UploadImage from '../../../components/UploadImage';
type ProductAddProps = {
   handleAdd: (data: any) => void
}

const { TextArea } = Input;

type InputForm = {
   name: string,
   originalPrice: number,
   saleOffPrice: number,
   image: string,
   feature: string,
   description: string
}

const ProductAdd = ({ handleAdd }: ProductAddProps) => {
   const navigate = useNavigate();
   const { handleSubmit, formState: { errors }, control } = useForm<InputForm>();

   const onFinish: SubmitHandler<InputForm> = (values: any) => {
      message.success('Thêm thành công')
      handleAdd(values);
      navigate('/admin/phone')
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
      message.error('Thêm thất bại')
   };

   return (
      <div>
         <Typography.Title level={3}>Thêm mới sản phẩm</Typography.Title>
         <Form
            autoComplete="on"
            onFinish={handleSubmit(onFinish)}
            onFinishFailed={onFinishFailed}
         >
            <Row gutter={16}>
               <Col span={10}>
                  <Controller
                     name='image'
                     control={control}
                     rules={{ required: true }}
                     render={({ field: { onChange } }) =>
                        <UploadImage onChange={onChange} />
                     }
                  />
               </Col>
               <Col span={14}>
                  <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>

                  <Controller
                     name='name'
                     control={control}
                     rules={{ required: true }}
                     render={({ field }) =>
                        <Form.Item
                           labelCol={{ span: 24 }}
                           label="Tên sản phẩm"
                        >
                           <Input size="large" {...field} />
                        </Form.Item>
                     } />
                  {errors.name && <Typography.Text type='danger'>Bạn cần nhập tên sản phẩm</Typography.Text>}

                  <Row gutter={16}>
                     <Col span={12}>
                        <Controller
                           name="originalPrice"
                           control={control}
                           rules={{ required: true }}
                           render={({ field }) =>
                              <Form.Item
                                 label="Giá gốc"
                                 labelCol={{ span: 24 }}
                              >
                                 <InputNumber style={{ width: '100%' }} size="large" {...field} />
                              </Form.Item>
                           }
                        />
                        {errors.originalPrice && <Typography.Text type='danger'>Bạn cần nhập giá sản phẩm</Typography.Text>}
                     </Col>

                     <Col span={12}>
                        <Controller
                           name="saleOffPrice"
                           control={control}
                           rules={{ required: true }}
                           render={({ field }) =>
                              <Form.Item
                                 label="Giá giảm"
                                 labelCol={{ span: 24 }}
                              >
                                 <InputNumber style={{ width: '100%' }} size="large" {...field} />
                              </Form.Item>
                           }
                        />
                        {errors.saleOffPrice && <Typography.Text type='danger'>Bạn cần nhập giá khuyến mãi</Typography.Text>}
                     </Col>
                  </Row>

                  <Controller
                     name="feature"
                     control={control}
                     rules={{ required: true }}
                     render={({ field }) =>
                        <Form.Item
                           labelCol={{ span: 24 }}
                           label="Đặc điểm nổi bật"
                        >
                           <TextArea {...field} />
                        </Form.Item>

                     } />
                  {errors.feature && <Typography.Text type='danger'>Bạn cần nhập đặc điểm</Typography.Text>}

                  <Controller
                     name="description"
                     control={control}
                     rules={{ required: true }}
                     render={({ field }) =>
                        <Form.Item
                           labelCol={{ span: 24 }}
                           label="Mô tả sản phẩm"
                        >
                           <TextArea {...field} />
                        </Form.Item>
                     } />
                  {errors.description && <Typography.Text type='danger'>Bạn cần nhập mô tả</Typography.Text>}

                  <Form.Item>
                     <Button type="primary" htmlType="submit">
                        Tạo mới sản phẩm
                     </Button>
                  </Form.Item>
               </Col>
            </Row>
         </Form>
      </div >
   )
}

export default ProductAdd