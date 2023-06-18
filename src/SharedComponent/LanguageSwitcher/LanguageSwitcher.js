import React, { memo } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeLanguage } from '../../Redux/Language/languageReducer';


const options = [
    {
        id: 1,
        name: 'English',
        code: 'en',
        flag: `https://flagcdn.com/w20/us.png`
    },
    {
        id: 2,
        name: 'French',
        code: 'fr',
        flag: 'https://flagcdn.com/w20/fr.png'

    },
    {
        id: 3,
        name: 'Albanian',
        code: 'sq',
        flag: 'https://flagcdn.com/w20/al.png'
    },
    {
        id: 4,
        name: 'Spanish',
        code: 'es',
        flag: 'https://flagcdn.com/w20/es.png'
    }
]

const LanguageSwitcher = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();


    const currentLanguageCode = useSelector(state => state.language.currentLanguage);
    const currentLanguage = options.find(option => option.code === currentLanguageCode);

    


    const handleLanguageChange = (code) => {

        dispatch(handleChangeLanguage(code))
        handleClose()

    }


    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size='small'
                sx={{
                    textTransform: 'uppercase'
                }}
            >
                <img
                    style={{ marginRight: '10px' }}
                    loading="lazy"
                    width="20"
                    src={currentLanguage?.flag}
                    alt=""
                /> {currentLanguage?.code}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }} 
            >
                {
                    options.map((option) => (
                        <MenuItem key={option.code} onClick={() => handleLanguageChange(option.code)}>
                            <img
                                style={{ marginRight: '10px' }}
                                loading="lazy"
                                width="20"
                                src={option.flag}
                                alt=""
                            />
                            {option.name}


                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
};

export default memo(LanguageSwitcher);