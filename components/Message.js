import styled from "styled-components";

function Message({ user, message }) {
  return (
    <div className="Message">
      <p>{message.message}</p>
    </div>
  );
}

export default Message;

const Container = styled.div`
  border: 5px solid black;
`;
