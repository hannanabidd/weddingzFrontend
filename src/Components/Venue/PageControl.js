import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PageControl = ({previousPage,pageNumber,nextPage}) => {
	return (
		<div className="pages-control">
			<div className="back" onClick={previousPage}><ArrowBackIcon /></div>
			<div className="page">{pageNumber}</div>
			<div className="next" onClick={nextPage}><ArrowForwardIcon /></div>
		</div>
	)
}

export default PageControl;