import styled from 'styled-components';

const Buttons = ({ children }) => {
	return <Wrapper className='buttons'>{children}</Wrapper>;
};

const Wrapper = styled.div`
	width: 100%;
	height: calc(100% - 110px);
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-gap: 10px;
	margin-left: 25px;
`;

export default Buttons;
