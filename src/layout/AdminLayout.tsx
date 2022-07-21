import React from 'react'
import { AutoComplete, MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import logoIcon from '../assets/images/anhhtus-logo 2.png';
import laptopIcon from '../assets/images/laptop.svg';
import phoneIcon from '../assets/images/phone.svg';
import tabletIcon from '../assets/images/tablet.svg';
import soundIcon from '../assets/images/ear-phone.svg';
import styled from 'styled-components';
import Input from 'antd/lib/input/Input';
import { AiOutlineSearch } from "react-icons/ai";

type Props = {}

const { Header, Content, Sider } = Layout;


const items2: MenuProps['items'] = [
   {
      key: "Phone",
      icon: <img src={phoneIcon} alt="" />,
      label: <Link to={"phone"}>Điện thoại</Link>
   },
   {
      key: "Laptop",
      icon: <img src={laptopIcon} alt="" />,
      label: <Link to={""}>Laptop</Link>
   },
   {
      key: "Tablet",
      icon: <img src={tabletIcon} alt="" />,
      label: <Link to={""}>Máy tính bảng</Link>
   },
   {
      key: "Sound",
      icon: <img src={soundIcon} alt="" />,
      label: <Link to={""}>Âm thanh</Link>
   },
]

const options = [
   { value: 'Burns Bay Road' },
   { value: 'Downing Street' },
   { value: 'Wall Street' },
];

const AdminLayout = (props: Props) => {
   return (
      <Layout>
         <HeaderContainer className="header">
            <Logo>
               <LogoImg src={logoIcon} alt="" />
               <LogoName>Dashboard</LogoName>
            </Logo>
            <SearchBar
               options={options}
               filterOption={(inputValue, option) =>
                  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
               }
            >
               <SearchInput size="middle" prefix={<AiOutlineSearch />} />
            </SearchBar>
            <UserName>Xin chào: Nguyễn Ngọc Dương</UserName>
         </HeaderContainer>
         <Layout>
            <Sider width={200} className="site-layout-background" style={{ height: '170vh ' }}>
               <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0, boxShadow: '0px 2px 150px rgba(90, 97, 105, 0.1)' }}
                  items={items2}
               />
            </Sider>
            <Layout style={{ padding: '0 24px 24px', backgroundColor: '#fff' }}>
               <Content
                  className="site-layout-background"
                  style={{
                     padding: 0,
                     margin: 0,
                     minHeight: 280,
                  }}
               >
                  <Outlet />
               </Content>
            </Layout>
         </Layout>
      </Layout >
   )
}

const HeaderContainer = styled(Header)`
   background-color: #00B0D7;
   padding : 0 30px;
   display : flex;
   align-items: center;
   justify-content: space-between;
`

const Logo = styled.div`
   display : flex;
   align-items: center;
   gap : 12px;
   margin-top: 4px;
`

const LogoImg = styled.img`
   width: 63px;height: 57px;
   margin-bottom : 5px;
`

const LogoName = styled.p`
   font-size : 16px;
   color :#fff;
`


const SearchBar = styled(AutoComplete)`
   width: 533px;
   height: 34px;
`

const SearchInput = styled(Input)`
   border-radius : 10px;
`

const UserName = styled.p`
   color : #fff;
   font-size: 20px;
   font-weight: 600;
   padding-top : 10px;
`


export default AdminLayout