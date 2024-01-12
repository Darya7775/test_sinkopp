import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import * as screen from "../../../styles/constants";

export const Wrapper = styled.div`
  margin: 58px 0 0 33px;

  @media (max-width: ${screen._768_PX}) {
    margin: 30px 20px 0;
  }
`;

export const StyleSwiper = styled(Swiper)`
  .swiper-wrapper {
    display: grid;
    grid-auto-flow: column;
  }
`;

export const StyleSwiperSlide = styled(SwiperSlide)`
  display: grid;
  gap: 2px;

  p {
    margin: 28px 0 0 8px;
    width: 96%;

    line-height: 110%;
    font-size: 1.7em;
    font-weight: 700;
  }

  div {
    margin-left: 8px;

    font-size: 1.1em;
    font-weight: 600;
    color: #c9d0e1;
  }

  @media (hover: hover) {
    &:hover {
      p {
        color: #4fba67;
      }
    }
  }

  @media (max-width: ${screen._768_PX}) {
    p {
      margin: 15px 0 0 0;
      width: 100%;

      line-height: 110%;
      font-size: 1em;
    }

    div {
      margin-left: 0;

      font-size: 0.9em;
    }
  }
`;

export const StyleImg = styled(Image)`

  &[data-mask="inset_left"] {
    clip-path: inset(0 round 69% 0);
  }

  &[data-mask="inset_right"] {
    clip-path: inset(0 round 0 69%);
  }

  &[data-mask="circle"] {
    clip-path: circle(50%);
  }

  @media (max-width: ${screen._768_PX}) {
    width: 280px;
    height: 280px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 23px 8px 0 0;
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  background-color: #ffffff;

  cursor: pointer;
  user-select: none;

  svg {
    fill: #c9d0e1;

    &[data-device="mobile"] {
      display: none;

      @media (max-width: ${screen._768_PX}) {
        display: block;
      }
    }

    &[data-device="desktop"] {
      display: block;

      @media (max-width: ${screen._768_PX}) {
        display: none;
      }
    }
  }

  @media (hover: hover) {
    &:hover {
      svg {
        fill: #a2acc7;
      }
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    svg {
      fill: #c9d0e1;
    }
  }
`;
