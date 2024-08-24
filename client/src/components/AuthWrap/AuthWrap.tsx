import React from 'react'
import { AuthWrapStyle } from 'styles/StyledComponents/AuthWrap'
import { Box, Typography } from '@mui/material'
import assest from 'json/assest'

interface authPrps{
    children?:React.ReactNode;
    headingText?:string;
    subText?:string;
}
const AuthWrap = ({children,headingText,subText}:authPrps) => {
  return (
    <AuthWrapStyle>
        <Box className="auth_container">
            <Box className="left_cont">
                <figure>
                    <img src={assest.auth_lft_img} alt="" />
                </figure>
            </Box>
            <Box className="rgt_cont">
                <Box className="rgt_cont_inner">
                    <Box className="heading">
                    <Typography variant='h2'>
                        {headingText}
                    </Typography>
                    <Typography variant='body1' className='sub'>
                   {subText}
                    </Typography>
                    </Box>
                {children}
                </Box>
            </Box>
        </Box>
    </AuthWrapStyle>
  )
}

export default AuthWrap