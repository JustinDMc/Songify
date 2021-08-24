import styled from "styled-components"
// import { Lightbulb } from "@styled-icons/open-iconic/Lightbulb"
import { Heart } from "@styled-icons/boxicons-regular/Heart"
import { Comment } from "@styled-icons/boxicons-regular/Comment"
import { DotsHorizontal } from "@styled-icons/boxicons-regular/DotsHorizontal"
import { Music } from "@styled-icons/crypto/Music"
import { Identification } from "@styled-icons/heroicons-outline/Identification"
import { Headphone } from "@styled-icons/boxicons-regular/Headphone"
import { HandThumbsUp } from "@styled-icons/bootstrap/HandThumbsUp"
import { InfoCircle } from "@styled-icons/bootstrap/InfoCircle"
import { ArrowDownRight } from "@styled-icons/bootstrap/ArrowDownRight"


export const Navbar = styled.nav`
  background: #000000;
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

// export const PostButton = styled.button`
// `

export const HeaderLogo = styled(Music)`
color: white;
height: 1.2em
`

export const HeartLogo = styled(Heart)`
`

export const CommentLogo = styled(Comment)`
`

export const DotsLogo = styled(DotsHorizontal)`
`

export const WhoWeAreLogo = styled(Identification)`
`

export const HeadphoneLogo = styled(Headphone)`
`

export const ThumbLogo = styled(HandThumbsUp)`
`

export const InfoLogo = styled(InfoCircle)`
`

export const ArrowLogo = styled(ArrowDownRight)`
`