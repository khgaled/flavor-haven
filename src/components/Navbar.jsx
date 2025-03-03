import { AppBar, Toolbar, 
  Typography, Box, 
  Menu, IconButton, 
  Search, InputBase, Notifications, 
  Avatar } from "@mui/material";

export const Navbar = () => {

    return (
        <AppBar position="sticky" className="bg-white shadow-md">
        <Toolbar className="flex justify-between">
          
          <Box className="flex items-center gap-2">
            <IconButton className="text-gray-700">
              <Menu />
            </IconButton>
            <Typography variant="h6" className="text-gray-900 font-semibold">
              MyApp
            </Typography>
          </Box>
  
          
          <Box className="flex items-center bg-gray-100 px-3 py-1 rounded-full w-80">
            <Search className="text-gray-500" />
            <InputBase placeholder="Search…" className="ml-2 flex-1 text-gray-700" />
          </Box>
  
          
          <Box className="flex items-center gap-4">
            <IconButton className="text-gray-700">
              <Notifications />
            </IconButton>
            <Avatar className="cursor-pointer" src="/profile.jpg" />
          </Box>
        </Toolbar>
      </AppBar>
    );
}