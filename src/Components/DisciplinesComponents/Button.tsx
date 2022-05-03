import { ToggleButtonGroup, ToggleButton } from "@mui/material";

function Button({value, setValue, setSearch}: any) {
	const handleValue = (event: any, newValue: any) => {
		if(newValue !== null) {
			setValue(newValue);
		}
	}
	
	return (
		<ToggleButtonGroup
			sx={{ marginTop: 4, marginBottom: 4, border: '1px solid rgba(25, 118, 210, 0.5)'}}
			color='primary'
			fullWidth
			value={value}
			exclusive
			onChange={handleValue}
			>
				<ToggleButton value='disciplinas' onClick={() => setSearch('')}>DISCIPLINAS</ToggleButton>
				<ToggleButton value='instrutores' onClick={() => setSearch('')}>PESSOA INSTRUTORA</ToggleButton>
				<ToggleButton value='adicionar' onClick={() => setSearch('')}>ADICIONAR</ToggleButton>
			
			</ToggleButtonGroup>
	)
}

export default Button