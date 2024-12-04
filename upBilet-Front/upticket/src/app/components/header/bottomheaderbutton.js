import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BottomHeaderButton = ({ menuItems, menuName, menuIcon }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{padding:'2px'}}>
            <IconButton
                size="large"
                edge="end"
                aria-label="dropdown-menu"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
            >
                {menuIcon}
                <Box sx={{ marginRight: '10px' }} /> {/* Boşluk */}
                <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '12px' }}
                >
                    {menuName}
                </Typography>
                {menuItems.length > 0 && <ExpandMoreIcon sx={{ marginLeft: '5px' }} />}

            </IconButton>
            {menuItems.length > 0 && (
                <Menu
                     id="lock-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                      }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} >
                            {item}
                        </MenuItem>
                    ))}
                </Menu>
            )}

        </Box>
    );
};

export default BottomHeaderButton;
