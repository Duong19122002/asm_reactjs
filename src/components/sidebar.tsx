import React from 'react'
import { Link } from 'react-router-dom'
import phoneIcon from '../assets/images/phone.svg';
import arrowIcon from '../assets/images/arrow-right.svg';
import laptopIcon from '../assets/images/laptop.svg';
import tabletIcon from '../assets/images/tablet.svg';
import earIcon from '../assets/images/ear-phone.svg';
import watchIcon from '../assets/images/smart-watch.svg';
import homeIcon from '../assets/images/smart-home.svg';
import accessoryIcon from '../assets/images/phu-kien.svg';
import computerIcon from '../assets/images/computer.svg';
import televisionIcon from '../assets/images/television.svg';
import buyOldIcon from '../assets/images/buy-old.svg';
import oldIcon from '../assets/images/old.svg';
import notficationIcon from '../assets/images/notfication.svg';
import newsIcon from '../assets/images/news.svg';

import styled from 'styled-components';
type Props = {}

const SideBar = (props: Props) => {
   return (
      <div>
         <SideBarLink>
            <div>
               <SideBarIcon src={phoneIcon} alt="" />
               <SideBarText to={""}>Điện thoại</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={laptopIcon} alt="" />
               <SideBarText to={""}>Laptop</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={tabletIcon} alt="" />
               <SideBarText to={""}>Máy tính bảng</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={earIcon} alt="" />
               <SideBarText to={""}>Âm thanh</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={watchIcon} alt="" />
               <SideBarText to={""}>Đồng hồ</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={homeIcon} alt="" />
               <SideBarText to={""}>Nhà thông minh</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={accessoryIcon} alt="" />
               <SideBarText to={""}>Phụ kiện</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={computerIcon} alt="" />
               <SideBarText to={""}>PC - màn hình</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={televisionIcon} alt="" />
               <SideBarText to={""}>Tivi</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={buyOldIcon} alt="" />
               <SideBarText to={""}>Thu cũ</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={oldIcon} alt="" />
               <SideBarText to={""}>Hàng cũ</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={notficationIcon} alt="" />
               <SideBarText to={""}>Khuyến mãi</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
         <SideBarLink>
            <div>
               <SideBarIcon src={newsIcon} alt="" />
               <SideBarText to={""}>Tin công nghệ</SideBarText>
            </div>
            <SideBarIcon src={arrowIcon} alt="" />
         </SideBarLink>
      </div>
   )
}

const SideBarLink = styled.div`
   display : flex;
   justify-content : space-between;
   gap : 10px;
   padding-bottom: 13px;
`

const SideBarIcon = styled.img`
   margin-right : 5px;
`

const SideBarText = styled(Link)`
   color : #000;
`
export default SideBar