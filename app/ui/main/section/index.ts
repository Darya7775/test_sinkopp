import styled from "styled-components";
import * as screen from "../../../styles/constants";

const StyleSection = styled.section`
  padding-top: 123px;

  h1 {
    margin: 0 0 0 42px;

    line-height: 120%;
    font-size: 4.4em;
    font-weight: 600;
    color: #7884a5;
  }

  p {
    width: 56%;

    font-weight: 400;
    margin: 40px 0 0 42px;
    font-size: 1.5em;
    line-height: 126%;
  }

  @media (max-width: ${screen._1024_PX}) {
    padding-top: 30px;

    h1 {
      margin: 0 0 0 20px;

      line-height: 120%;
      font-size: 2.2em;
    }

    p {
      width: auto;

      margin: 20px 20px 0;
      font-size: 1.2em;
      line-height: 120%;
    }
  }

  @media (max-width: ${screen._768_PX}) {
    padding-top: 10px;

    h1 {
      line-height: 120%;
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }
  }
`;

export default StyleSection;
