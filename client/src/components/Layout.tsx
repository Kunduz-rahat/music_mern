import React from 'react'
type Props = {children?: React.ReactNode};
export const Layout:React.FC<Props> = ({children}) => {
	
	return (
		<React.Fragment>
<div>
	{children}
</div>
		</React.Fragment>
	)
}
