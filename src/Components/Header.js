import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCurrentTheme } from '../features/theme/themeSlice';


function Header() {
    const theme = useSelector((state)=>state.theme.currentTheme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        if (theme === 'light') {
          dispatch(setCurrentTheme(('dark')));
        } else {
          dispatch(setCurrentTheme(('light')));
        }
      }
    return (
        <div>
            <Button onClick={toggleTheme}>Toggle Theme Button</Button>
        </div>
    )
}

export default Header

const Button = styled.button`
    cursor:pointer;
    background:red;
    padding:10px;
`;
