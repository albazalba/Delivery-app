import React from 'react'
import styled from '@emotion/styled'
import { textExtraLight } from '../../Styles/themes'

const Switch = () => {
    return (
        <SwitchContainer>
            <input type="checkbox" />
            <span className="slider" />
        </SwitchContainer>
    )
}

const SwitchContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 25px;
    height: 5px;
    background-color: #CDCFD9;
    margin-left: 5px;
    input{
        opacity: 0;
        width: 0;
        height: 0;
    }
}

.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    &:before{
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 0px;
        top: -5px;
        background-color: white;
        border: 1px solid #CDCFD9;
        transition: 0.4s;
    }
}
input:checked + .slider{
    background-color:rgb(31, 182, 63);
}

input:checked + .slider:before{
    transform: translateX(12.5px);
}`;

export default Switch
