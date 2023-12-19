
import { AppBar, Toolbar ,Typography,Link} from "@mui/material"
import { useTheme } from "@mui/material/styles"
const primaryAppBar = ()=>{
// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme()
    return (
        <AppBar sx={{
            backgroundColor: '#f5f5f5',
            borderBottom: `1px solid ${theme.palette.background.default}`,
            color:'black',
            
            
        }}>
            <Toolbar variant="dense"
            sx={{
                height:50
            }}>
                <Link href='/' color="inherit" underline="none" >
                    <Typography
                    variant="h6"
                    noWrap
                    component='div'
                    sx={{display:{
                        fontWeight:700,
                        letterSpacing:'-.5px',
                        
                    }}}>

                         Chat App
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default primaryAppBar
