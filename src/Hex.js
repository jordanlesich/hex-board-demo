import React from 'react'
import styled from 'styled-components'

const HexStyle = styled.div`

    float: left;
    margin-left: 3px;
    margin-bottom: -26px;

.top-piece{
width: 0;
border-bottom: 30px solid #6C6;
border-left: 52px solid transparent;
border-right: 52px solid transparent;

}

.middle-piece {

width: 104px;
height: 60px;
background-color: #6C6;
}

.bottom-piece{
width: 0;
border-top: 30px solid #6C6;
border-left: 52px solid transparent;
border-right: 52px solid transparent;

}



`


const Hex = () => {
    return (
        <HexStyle>
            {/* Should be replaced with single div and ::before and ::after classes */}
            <div className='top-piece'></div>
            <div className='middle-piece'></div>
            <div className='bottom-piece'></div>
        </HexStyle>
    )
}

export default Hex
