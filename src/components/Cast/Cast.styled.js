import styled from 'styled-components';
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  justify-content: space-evenly;
  margin: 0;
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
`;
export const NameWrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0;
`;
export const CastItem = styled.li`
  flex-direction: row;
  width: 300px;
  gap: 20px;

  padding: 5px;
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const EmptyCast = styled.p`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 100;
`;
