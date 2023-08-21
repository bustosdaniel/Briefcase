import { Box, IconButton, Stack, Typography } from '@mui/material'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react'
import ProfileInformation from './information';

export default function Profile() {
  const [ profile, setProfile] = useState(true)
  
  const handleProfile = () => {
    setProfile(!profile)
  }
  return (
    <Box width='560px'>
      {profile ? 
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          borderBottom='1px solid #c6c6c6'
          paddingBottom='20px'
        >
          <Box
            component='button'
            border='none'
            bgcolor='#FFF'
            color='#000'
            onClick={handleProfile}
            display='flex'
            sx={{
              cursor: 'pointer',
              ':hover': {
                bgcolor: '#e7e7e7',
                borderRadius: '10px',
                padding: '5px 15px',
                color: '#9a9a9a'
              }
            }}
          >
            <Typography
              variant='body1'
              fontSize='18px'
              fontWeight='500'
              textAlign='left'
            >
              Profile
            </Typography> 
          </Box>
          <Stack flexDirection='row' alignItems='center' gap='20px' >
            <IconButton
              href='https://www.instagram.com/neiifer_/'
              color='secondary'
              sx={{
                cursor: 'pointer',
                ':hover': {
                color: '#9a9a9a'
              }
              }}
            >
              <InstagramIcon fontSize='medium' />
            </IconButton>
            <IconButton
              href='https://www.linkedin.com/in/daniel-bustos-21961624a/'
              color='primary'
              sx={{
                cursor: 'pointer',
                ':hover': {
                color: '#9a9a9a'
              }
              }}
            >
              <LinkedInIcon fontSize='medium' sx={{cursor: 'pointer'}}/>
            </IconButton>
            <IconButton
              href='https://github.com/bustosdaniel'
              color='inherit'
              sx={{
                cursor: 'pointer',
                ':hover': {
                color: '#9a9a9a'
              }
              }}
            >
              <GitHubIcon fontSize='medium' sx={{cursor: 'pointer'}}/>
            </IconButton>
          </Stack>
        </Stack>
        :
        <Box borderBottom='1px solid #c6c6c6'>
          <Box
            component='button'
            border='none'
            bgcolor='#FFF'
            color='#000'
            onClick={handleProfile}
            sx={{
              cursor: 'pointer',
              ':hover': {
                bgcolor: '#e7e7e7',
                borderRadius: '10px',
                padding: '5px 15px',
                color: '#9a9a9a',
              }
            }}
          >
            <Stack flexDirection='row' alignItems='center'>
              <SwitchAccountIcon fontSize='medium'sx={{paddingRight: '10px'}}/>
              <Typography
                variant='body1'
                fontSize='18px'
                fontWeight='500'
                textAlign='left'
              >
                Profile 
              </Typography>
            </Stack>
          </Box>
          <ProfileInformation />
        </Box>
      }
    </Box>
  )
}
