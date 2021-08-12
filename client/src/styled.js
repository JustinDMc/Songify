import styled from "styled-components"
import { Lightbulb } from "@styled-icons/open-iconic/Lightbulb"


export const Navbar = styled.nav`
  background: #262626;
  height: 4.0em;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    text-decoration: none;
    padding: 1em;
    transition: background 0.3s 0s ease-in-out;
    &:hover {
      background: #992b1d;
    }
  }
`;

export const Logo = styled(Lightbulb)`
color: white;
height: 1.2em
`