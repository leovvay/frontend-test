import React, { useState } from "react"
import "./../../../src/App.css"
import { styled } from "@mui/system"

const MainWrapper = styled("div")(`
  background-color: #E5E5E5;
  height: 100vh;
  padding: 1rem;
`)

const MainCard = styled("div")(`
position: relative;
top: 0.625;
background-color: #FFFFFF;
 width: 14.31rem;
 border-radius: 0.625rem;
 overflow: hidden;
 &:hover{  
  border-radius: 0.625rem;
  cursor: pointer;
  box-shadow: 0 0 2px 2px #65e9d9
} 
`)
const CardImg = styled("div")(`
max-width: 100%;
`)
const CardDetail = styled("div")(`
margin: 1rem 0rem;
float: left;
margin-left: 1.125rem;

span{
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin-left: 0.2rem;
  margin-buttom: 1px;
  font-family: Plus Jakarta Sans;
  letter_spacing: 0.17px;
}
`)

interface CardProps {
  isChecked?: boolean
  hover?: boolean
}
export const Card = ({ isChecked, hover }: CardProps) => {
  const [check, setCheck] = useState(isChecked)

  const handleDynamci = () => {
    if (isChecked && hover) {
      return "checkBorder hover"
    } else if (!isChecked && hover) {
      return "hover"
    } else {
      return ""
    }
  }
  return (
    <MainWrapper>
      <MainCard className={handleDynamci()}>
        <CardImg>
          <img src="assets/CardMedia.png" alt="img" style={{ width: " 100%" }} />
        </CardImg>
        <CardDetail>
          {check ? (
            <>
              <input type="checkbox" defaultChecked={isChecked} onClick={() => setCheck(false)} /> <span>Flood Zone 3</span>
            </>
          ) : (
            <>
              <input type="checkbox" defaultChecked={isChecked} onClick={() => setCheck(true)} /> <span>Flood Zone 3</span>
            </>
          )}
        </CardDetail>
      </MainCard>
    </MainWrapper>
  )
}
