import styled from "styled-components";

interface IRow {
  isSelected: boolean;
}

export const Text = styled.p`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Topic = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
`;

export const TipicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled("div")<IRow>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 0;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(141, 246, 222, 0.6)" : ""};
  &:hover {
    background-color: rgba(141, 246, 222, 0.6);
  }
`;

export const SubList = styled.div`
  width: calc(100% - 10px);
  margin-left: 10px;
`;
