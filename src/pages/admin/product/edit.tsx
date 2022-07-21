import { Button, Col, Form, Input, InputNumber, message, Row, Typography } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
// import { useNavigate, useParams } from 'react-router'
import { getById } from '../../../api/product'
import UploadImage from '../../../components/UploadImage'
import { useNavigate, useParams } from 'react-router-dom'

type ProductEditProps = {
   editItem: (data: any) => void
}
type InputForm = {
   name: string,
   originalPrice: number,
   saleOffPrice: number,
   image: string,
   feature: string,
   description: string
}
const ProductEdit = ({ editItem }: ProductEditProps) => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { handleSubmit, formState: { errors }, control, reset } = useForm<InputForm>();

   useEffect(() => {
      const getProduct = async () => {
         const { data } = await getById(id);
         reset(data)
      }
      getProduct();
   }, [id])

   const onFinish: SubmitHandler<InputForm> = (values: any) => {
      message.success('Sửa thành công')
      editItem(values);
      navigate(-1)
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
      message.error('Sửa thất bại')
   };
   return (
      <div>
         <Typography.Title level={3}>Thêm mới sản phẩm</Typography.Title>
         <Row gutter={16}>
            <Col span={10}>
               <UploadImage />
            </Col>
            <Col span={14}>
               <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
               <Form
                  autoComplete="on"
                  onFinish={handleSubmit(onFinish)}
                  onFinishFailed={onFinishFailed}
               >
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
                     {/* <Col span={12}>
								<Form.Item
								name="saleOffPrice"
								rules={[{ required: true, message: 'Gía sản phẩm' }]}
								>
									<Label>Gía giảm</Label>
									<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="disabled" disabled>
											Disabled
										</Option>
										<Option value="Yiminghe">yiminghe</Option>
									</Select>
								</Form.Item>
							</Col> */}
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
                        Sửa sản phẩm
                     </Button>
                  </Form.Item>
               </Form>
            </Col>
         </Row>
      </div>
   )
}

export default ProductEdit