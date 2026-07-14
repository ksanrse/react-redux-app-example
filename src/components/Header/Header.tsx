import { Component } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
`;

interface HeaderState {
  timeNow: Date;
}

export default class Header extends Component<
  Record<string, never>,
  HeaderState
> {
  private intervalID?: ReturnType<typeof setInterval>;
  state: HeaderState = {
    timeNow: new Date(),
  };

  componentDidMount(): void {
    this.intervalID = setInterval(() => {
      this.setState({ timeNow: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <HeaderContainer>
        <span>Привет</span>
        <span>Время сейчас: {this.state.timeNow.toLocaleTimeString()}</span>
      </HeaderContainer>
    );
  }
}
