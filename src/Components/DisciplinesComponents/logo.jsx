import logo from '../../assets/logo.svg'
import styled from 'styled-components'


function Logo({mainPage}) {
	return <Image mainPage={mainPage} src={logo} alt='logo'/>
}

const Image = styled.img`
	width: ${(props) => (props.mainPage ? '218px' : '292px')};
	height: ${(props) => (props.mainPage ? '45px' : '64px')};
	margin-top: ${(props) => (props.mainPage ? '0px' : '55px')};
`
export default Logo;