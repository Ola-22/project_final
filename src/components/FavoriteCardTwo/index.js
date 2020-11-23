import React from "react";
import * as S from "./style";
import { Card } from "./Card";
import imgCard from "../../assets/img/room-img1.jpg";
import imgCard2 from "../../assets/img/room-img2.jpg";
import imgCard3 from "../../assets/img/room-img3.jpg";

export function FavoriteCardTwo() {
  return (
    <S.FavoriteMain primary>
      <S.FavoriteTitle primary>CONSCIOUS HOSPITALITY</S.FavoriteTitle>
      <S.TitleRoom primary>Our Favorite Room</S.TitleRoom>
      <S.RoomMain>
        <Card
          src={imgCard}
          title="Single Room"
          content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
        />
        <Card
          src={imgCard2}
          title="Double Room"
          content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
        />
        <Card
          src={imgCard3}
          title="Delux Room"
          content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
        />
      </S.RoomMain>
      <S.RoomMain>
        <Card
          src={imgCard}
          title="Single Room"
          content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
        />
        <Card
          src={imgCard2}
          title="Double Room"
          content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
        />
        <Card
          src={imgCard3}
          title="Delux Room"
          content="Nunc id turpis ligula. Orcivarius natoque penatibus et magdispa montes, nascetur civarius natoque penatibus"
        />
      </S.RoomMain>
    </S.FavoriteMain>
  );
}
