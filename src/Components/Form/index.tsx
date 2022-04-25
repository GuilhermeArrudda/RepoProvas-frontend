import styled from "styled-components"
import { Link } from "react-router-dom"

const FormContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	@media(max-width: 650px) {
		width: 100%;
		margin-top: 50px;
	}
`
const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`

const Title = styled.h1`
	font-size: 24px;
	line-height: 24px;
	letter-spacing: 0.15px;
	color: rgba(0, 0, 0, 0.8);
`

const Input = styled.input`
	width: 96%;
	height: 45px;
	margin-bottom: 5px;
	padding-left: 13px;
`

const Label = styled.label`
	font-size: 14px;
	line-height: 26px;
`

const Buttons = styled.div`
 width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Button = styled.button`
	width: 116px;
	height: 36px;
	color: #FFFFFF;
	border-width: 0px;
	background: #1877F2;
	cursor: pointer;
`

const Line = styled.div`
  width: 100%;
  height: 12px;
  border-bottom: 1px solid #C4C4C4;
  text-align: center;
  
  span{
    background-color: #fff;
    padding: 0 3px 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.8);
  }
`

const GitHubButton = styled.button`
  width: 100%;
  height: 36px;
  background: #424445;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`

const StyledLink = styled(Link)`
	font-size: 12px;
	line-height: 24px;
	text-decoration-line: underline;
	color: rgba(70, 115, 202, 0.8);
`

export {
	FormContainer,
	Form,
	Input,
	Title,
	Label,
	Buttons,
	Button,
	Line,
	GitHubButton,
	StyledLink
}