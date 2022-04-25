import logo from '../../assets/logo.svg'
import styled from 'styled-components'

function Logo() {
	return <Image src={logo} alt='logo'/>
}

const Image = styled.img`
	width: '218px';
	height: '45px';
	margin-top: '0px';
`
export default Logo;