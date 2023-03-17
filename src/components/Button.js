import styled from 'styled-components';

const Button = ({ className, value, onClick }) => {
	return (
		<Wrapper>
			<button className={className} onClick={onClick}>
				{value}
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	button {
		border: none;
		background-color: lightgray;
		font-size: 24px;
		color: black;
		font-weight: bold;
		cursor: pointer;
		border-radius: 10px;
		outline: none;
		padding: 1rem;
	}

	button:hover {
		background-color: rgb(61, 43, 184);
	}

	.equals {
		grid-column: 3 / 5;
		background-color: rgb(243, 61, 29);
	}

	.equals:hover {
		background-color: rgb(228, 39, 15);
	}
`;

export default Button;
