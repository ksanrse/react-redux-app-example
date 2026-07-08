import { useEffect, useState } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
`;

export default function Header() {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <HeaderContainer>
      <span>Привет</span>
      <span>Время сейчас: {timeNow.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
