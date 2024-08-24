/* eslint-disable react/no-array-index-key */

import { Box, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import assest from "json/assest";
import { notificationList } from "json/mock/PopupMock";
import Polygon from "ui/Icons/Polygon";

export const NotificationMainPopupWrapper = styled(Box)`
position: relative;
  .polygon {
      position: absolute;
      top: -20px;
      right: 0;
    }
    
  .notificationPopup {
    position: relative;
    padding: 40px 25px;
    z-index: 2;
  
    .titleTxt {
      font-weight: 700;
      font-size: 18px;
      text-transform: capitalize;
      color: ${primaryColors.textPrimaryColor};
      margin-bottom: 30px;
      font-family: "Merriweather";
    }
    .dateTxtWrap {
      position: relative;
      margin-bottom: 20px;
      &::before {
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 1px;
        width: 100%;
        background: ${primaryColors.colorEAF5F9};
      }
      p {
        font-weight: 600;
        font-size: 15px;
        text-transform: capitalize;
        color: ${primaryColors.mainFontColor};
        position: relative;
        display: inline-block;
        padding: 0 18px 0 0;
        background: ${primaryColors.white};
        font-family: "Merriweather";
      }
    }
    .allBoxNotiofication {
      position: relative;
      .singleItemNotification {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 599px) {
          padding-top: 18px;
          position: relative;
        }
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        .wrapper_iconTxt {
          display: flex;
          align-items: center;
          padding-right: 10px;
        }
        i {
          background: rgba(25, 149, 208, 0.1);
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          overflow: hidden;
          @media (max-width: 599px) {
            width: 46px;
            height: 46px;
          }
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .infoTxtNotification {
          width: calc(100% - 56px);
          padding-left: 20px;
          p {
            font-weight: 400;
            font-size: 13px;
          }
          .titleNotific {
            font-size: 15px;
            font-weight: 500;
            color: ${primaryColors.mainFontColor};
            font-family: "Merriweather";
          }
        }
        .timetxt {
          font-size: 13px;
          color: ${primaryColors.primary};
          text-align: right;
          @media (max-width: 599px) {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 12px;
          }
        }
      }
    }
  }
  .notificationAll {
    max-height: 60vh;
    overflow-y: auto;
    padding-right: 10px;
    margin-right: -10px;
    .singleListNotification {
      &:not(:last-of-type) {
        margin-bottom: 30px;
      }
    }
  }
`;
export default function NotificationMainPopup() {
  return (
    <NotificationMainPopupWrapper>
      <i className="polygon">
        {" "}
        <Polygon />
      </i>
      <Box className="notificationPopup">
        <Typography variant="body1" className="titleTxt">
          Notifications
        </Typography>
        <Box className="notificationAll">
          {notificationList.map((item, index) => (
            <Box className="singleListNotification" key={index}>
              <Box className="dateTxtWrap">
                <Typography variant="body1">{item.dayName}</Typography>
              </Box>
              <Box className="allBoxNotiofication">
                {item.subNotification.map((data, index) => (
                  <Box className="singleItemNotification" key={index}>
                    <Box className="wrapper_iconTxt">
                      <i>
                        <img src={data.image} alt="" />
                      </i>
                      <Box className="infoTxtNotification">
                        <Typography variant="body1" className="titleNotific">
                          {data.notificationTitle}
                        </Typography>
                        <Typography variant="body1">{data.subText}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" className="timetxt">
                      {data.dateTxt}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </NotificationMainPopupWrapper>
  );
}
