
import { Box,CssBaseline } from "@mui/material"
import NavBar from "./template/NavBar"
const Home = ()=>{

    return(
        <Box sx={{
            display:'flex',
        }}>
            <CssBaseline />
            <NavBar />
        <h1>This is the home!</h1>
        </Box>
    )
}
export default Home