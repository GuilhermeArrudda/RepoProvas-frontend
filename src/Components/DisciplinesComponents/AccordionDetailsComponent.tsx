import { AccordionDetails } from "@mui/material"
import LinkComponent from "./LinkComponent"

function AccordionDetailsComponent({ categoriesInfo }: any) {
	return (
		categoriesInfo.map(
			(category: any) => 
				category.tests.length !== 0 && (
					<AccordionDetails
						sx= {{px: 4}}
						key= {category.id}
					>
						{category.name}
						<br/>
						<LinkComponent tests={category.tests}/>
					</AccordionDetails>
				)
		)
	)
} 

export default AccordionDetailsComponent