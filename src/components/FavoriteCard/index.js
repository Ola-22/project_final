import React from "react";
import * as S from "./style";
import { Card } from "./Card";
import imgCard from "../../assets/img/room-img1.jpg";
import imgCard2 from "../../assets/img/room-img2.jpg";
import imgCard3 from "../../assets/img/room-img3.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function FavoriteCard() {
  return (
    <S.FavoriteMain>
      <S.FavoriteTitle titleFav>CONSCIOUS HOSPITALITY</S.FavoriteTitle>
      <S.TitleRoom>Our Favorite Room</S.TitleRoom>
      <S.RoomMain>
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOnce={true}
          delay={700}
        >
          <Card
            src={imgCard}
            title="Single Room"
            content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInUp
          "
          animateOnce={true}
          delay={1500}
        >
          <Card
            src={imgCard2}
            title="Double Room"
            content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOnce={true}
          delay={700}
        >
          <Card
            src={imgCard3}
            title="Delux Room"
            content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
          />
        </ScrollAnimation>
      </S.RoomMain>
    </S.FavoriteMain>
  );
}
