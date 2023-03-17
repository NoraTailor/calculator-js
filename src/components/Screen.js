import styled from 'styled-components';

const Screen = ({ value }) => {
	return (
		<Wrapper className='screen' mode='single' max={70}>
			{value}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100px;
	width: 100%;
	margin-bottom: 10px;
	padding: 0 10px;
	background-color: grey;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: white;
	font-weight: bold;
	box-sizing: border-box;

	@media screen and (min-width: 768px) {
	}
`;

export default Screen;
