import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Breadcrumb, message, Modal, Popconfirm, Space, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import addIcon from '../../../assets/images/Add.svg';

type ProductListprops = {
   data: any[],
   removeItem: (id: number) => void,
}




const ProductList = ({ data, removeItem }: ProductListprops) => {
   const confirm = () => {
      message.success('Xóa thành công');
   };

   const cancel = () => {
      message.info('Hủy thành công');
   };

   const columns = [
      {
         title: '#',
         dataIndex: 'id',
         key: 'id'
      },
      {
         title: 'Tên',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Giá gốc',
         dataIndex: 'originalPrice',
         key: 'originalPrice',
      },
      {
         title: 'Giá khuyến mãi',
         dataIndex: 'saleOffPrice',
         key: 'saleOffPrice',
      },
      {
         title: 'Mô tả',
         dataIndex: 'description',
         key: 'description',
      },
      {
         title: 'Thao tác',
         key: 'action',
         render: (record: any) => {
            return <Space>
               <Link to={`edit/${record.id}`}>
                  <EditOutlined style={{ color: '#000' }} />
               </Link>
               <Popconfirm
                  title="Bạn có muốn xóa không"
                  onConfirm={() => {
                     removeItem(record.id)
                     confirm();
                  }}
                  onCancel={cancel}
                  okText="Có"
                  cancelText="Không"
               >
                  <DeleteOutlined />
               </Popconfirm>
            </Space>
         }
      },
   ];

   console.log(data, "proppppppppppppp")
   const dataSource = data && data.map((item: any, index: number) => {
      return {
         id: item.id,
         name: item.name,
         originalPrice: item.originalPrice,
         saleOffPrice: item.saleOffPrice,
         description: item.description,
      }
   })


   return (
      <div>
         <StyledHeader>
            <NameDashboard>Điện thoại</NameDashboard>
            <StyledAddIcon to={'add'}>
               <img src={addIcon} alt="" />
            </StyledAddIcon>
         </StyledHeader>
         <Table dataSource={dataSource} columns={columns} />
      </div>
   )
}


const StyledHeader = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 24px 0 30px 0;
`
const NameDashboard = styled(Breadcrumb)`
   color :#5F5E61;
   font-size: 20px;
   font-weight: 700px;
`

const StyledAddIcon = styled(Link)`
   width: 59px;
`

export default ProductList