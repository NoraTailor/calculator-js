import styled from 'styled-components';

const Wrapper = ({ children }) => {
	return <Wrap className='wrapper'>{children}</Wrap>;
};

const Wrap = styled.div`
	width: 340px;
	height: 540px;
	padding: 10px;
	margin-top: 3rem;
	border-radius: 10px;
	background-color: #485461;
	background-image: linear-gradient(
		315deg,
		#485461 0%,
		#28313b 74%
	);
`;
export default Wrapper;
