import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{ backgroundColor: '#BAD8B6' }}>
            <Toolbar>
                <Typography sx={{color:'black'}}>
                    Company Name
                </Typography>
                <Typography sx={{marginLeft:'auto'}}>
                    <img src="https://images.unsplash.com/photo-1735276680696-f1c5bca7cdef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:'30px' ,height:'30px' , borderRadius:'50%'}} />
                </Typography>
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
