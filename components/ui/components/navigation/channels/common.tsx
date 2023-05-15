import { styled } from "solid-styled-components";

export const SidebarBase = styled("div", "Sidebar")`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: ${(props) => props.theme!.layout.width["channel-sidebar"]};

  background: ${({ theme }) => theme!.colours["background-100"]};

  a {
    text-decoration: none;
  }

  > div {
    flex-grow: 1;
  }
`;
