import React from "react";
import * as F from "./style";
import * as S from "../FavoriteCard/style";

import { FacilitiesCard } from "./FacilitiesCard";
import icon1 from "../../assets/img/facility-icon1.png";
import icon2 from "../../assets/img/facility-icon2.png";
import icon3 from "../../assets/img/facility-icon3.png";
import icon4 from "../../assets/img/facility-icon4.png";
import icon5 from "../../assets/img/facility-icon5.png";
import icon6 from "../../assets/img/facility-icon6.png";
import icon7 from "../../assets/img/facility-icon7.png";
import icon8 from "../../assets/img/facility-icon8.png";
import icon9 from "../../assets/img/facility-icon9.png";

export function Facilities() {
  return (
    <F.SectionMain>
      <S.FavoriteTitle primary>WHAT WE DO</S.FavoriteTitle>
      <S.TitleRoom primary>Our Facilities</S.TitleRoom>
      <F.FacilitiesMain>
        <FacilitiesCard
          src={icon1}
          title="Restaurant"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
        <FacilitiesCard
          src={icon2}
          title="City Map"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
        <FacilitiesCard
          src={icon3}
          title="Swimming Pool"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
      </F.FacilitiesMain>
      <F.FacilitiesMain>
        <FacilitiesCard
          src={icon4}
          title="Conference Room"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
        <FacilitiesCard
          src={icon5}
          title="Relaxation"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
        <FacilitiesCard
          src={icon6}
          title="Air Conditioner"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
      </F.FacilitiesMain>
      <F.FacilitiesMain>
        <FacilitiesCard
          src={icon7}
          title="Hot Showers"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
        <FacilitiesCard
          src={icon8}
          title="Lockers"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
        <FacilitiesCard
          src={icon9}
          title="24/7 Reception"
          content="Aenean vulputate eleifend tellus. Aenean leo ligula, por consequat vitae, eleifend."
        />
      </F.FacilitiesMain>
    </F.SectionMain>
  );
}
