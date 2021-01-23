import React from 'react';
import {StyledButton} from './Button.elements'

const Button = ({children}) => {
    return ( 
        <StyledButton>
            {children}
        </StyledButton>
     );
}
 
export default Button;