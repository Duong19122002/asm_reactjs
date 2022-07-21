import React from 'react'
import styled from 'styled-components'
import logoImg from './../assets/images/anhhtus-logo 2.png';
import storeImg from './../assets/images/Frame.svg';
import orderImg from '../assets/images/Frame-1.svg';
import cartImg from '../assets/images/Frame-2.svg'
import { AutoComplete, Input } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
type Props = {}


const options = [
   { value: 'Burns Bay Road' },
   { value: 'Downing Street' },
   { value: 'Wall Street' },
];

const Header = (props: Props) => {
   return (
      <HeaderWrapper>
         <Container>
            <Logo src={logoImg} alt="" />
            <SearchBar
               options={options}
               filterOption={(inputValue, option) =>
                  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
               }
            >
               <SearchInput size="middle" prefix={<AiOutlineSearch />} />
            </SearchBar>
            <Contact>
               <Item>
                  <Text> Gọi mua hàng
                     1800.2097</Text>
               </Item>
               <Item>
                  <img src={storeImg} alt="" />
                  <Text>
                     Cửa hàng gần bạn
                  </Text>
               </Item>
               <Item>
                  <img src={orderImg} alt="" />
                  <Text>Tra cứu đơn hàng</Text>
               </Item>
               <Item>
                  <img src={cartImg} alt="" />
                  <Text>Giỏ hàng</Text>
               </Item>
            </Contact>
         </Container>
      </HeaderWrapper >
   )
}

const HeaderWrapper = styled.div`
   background-color: #D70018;
   height: 64px;
   display : flex;
   align-items : center;
`

const Container = styled.div`
   max-width : 1000px;
   margin : 0 auto;
   display : flex;
   align-items: center;
`

const Logo = styled.img`
   width: 65px;
   height: 57px;
   margin-right : 60px;
`

const SearchBar = styled(AutoComplete)`
   width: 533px;
   height: 34px;
`

const SearchInput = styled(Input)`
   border-radius : 10px;
`

const Contact = styled.div`
   display : flex;
   gap : 14px;
   margin-left : 10px;
`

const Item = styled.div`
   display : flex;
   align-items: center;
   gap : 5px;
   color : #fff;
`

const Text = styled.p`
`
export default Header