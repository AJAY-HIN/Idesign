import styled from "styled-components";

export const FlxConatiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: linear-gradient(to right, #eacda3, #d6ae7b);
`;

export const CardBody = styled.div`
  width: 300px;
  height: 400px;
  margin: 30px;
  transition: ease 0.5s;
  background-image: linear-gradient(to right, #fffad7, #ffdde1);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Image = styled.div`
  width: 280px;
  height: 180px;
  border: 1px solid #eaeaea;
  margin: 10px;
`;

export const Title = styled.h3`
  color: #3c4048;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Context = styled.div`
  margin: 10px;
`;

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  ${"" /* background-color: rgb(255, 255, 255); */}
  border: none;
  width: 20%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  border: 1px solid #333333;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: rgba(51, 51, 51, 0.3);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 15px 20px;
  margin-top: 10px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
`;

export const Span = styled.span`
  color: #b2b2b2;
  margin-bottom: 13px;
  font-family: "Times New Roman", Times, serif;
`;

export const Select = styled.select`
  padding: 10px 15px;
  position: absolute;
  top: 50px;
  left: 20px;
  background-color: rgba(51, 51, 51, 0.2);
  border: none;
`;
