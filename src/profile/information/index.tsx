import { Box, IconButton, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function ProfileInformation() {
  return (
    <Box marginTop='20px' >
      <Box marginLeft='10px'>
        <Typography fontSize='18px' fontWeight='600'>
          Neifer Daniel Bustos Carrillo
        </Typography>
        <Typography fontSize='18px' fontWeight='500'>
          Desarrollador y Estudiante de Ingenieria de Sistemas
        </Typography>
        <Typography fontSize='18px' marginTop='30px' fontWeight='400'>
          Hola, soy Neifer, soy desarrollador y llevo en este ambito más de 2 años, soy Front End y me estoy preparando para poder desenvolverme mejor en cualquier area.
        </Typography>
        <Typography fontSize='18px' fontWeight='400' paddingBottom='30px'>
          Manejo lenguajes como Css, HTML 5, JavaScript, React.js, TypeScript y React Native.
        </Typography>
      </Box>
      <Stack flexDirection='row' alignItems='center' gap='20px' marginBottom='20px'>
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
    </Box>
  )
}
