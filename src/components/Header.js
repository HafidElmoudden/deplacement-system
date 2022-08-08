import React from "react";
import {
  faHouseChimney,
  faBuildingColumns,
  faPeopleGroup,
  faLocationDot,
  faPlane,
  faCar,
  faListOl,
  faFileLines,
  faHorseHead,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import HeaderItem from "./HeaderItem";
function Header() {
  const router = useRouter();
  console.log(router);
  return (
    <div className="header">
      <img
        src={require("../../public/alomrane.png").default.src}
        alt="alomrane logo"
        width={60}
        className="alomrane-logo"
      />
      <div className="h-items-container">
        <HeaderItem
          title="Home"
          icon={faHouseChimney}
          isActive={router.pathname == "/"}
          clickHandle={() => router.push("/")}
        />
        <HeaderItem
          title="Puissances Fiscales"
          icon={faHorseHead}
          isActive={router.pathname == "/puissances-fiscales"}
          clickHandle={() => router.push("/puissances-fiscales")}
        />

        <HeaderItem
          title="Grades"
          icon={faListOl}
          isActive={router.pathname == "/grades"}
          clickHandle={() => router.push("/grades")}
        />

        <HeaderItem
          title="Frais Standards"
          icon={faMoneyCheckDollar}
          isActive={router.pathname == "/frais-standards"}
          clickHandle={() => router.push("/frais-standards")}
        />

        <HeaderItem
          title="Moyens de Transport"
          icon={faPlane}
          isActive={router.pathname == "/moyens-de-transport"}
          clickHandle={() => router.push("/moyens-de-transport")}
        />
        <HeaderItem
          title="Destinations"
          icon={faLocationDot}
          isActive={router.pathname == "/destinations"}
          clickHandle={() => router.push("/destinations")}
        />

        <HeaderItem
          title="Véhicule Personnel"
          icon={faCar}
          isActive={router.pathname == "/vehicule-personnel"}
          clickHandle={() => router.push("/vehicule-personnel")}
        />

        <HeaderItem
          title="Banques"
          icon={faBuildingColumns}
          isActive={router.pathname == "/banques"}
          clickHandle={() => router.push("/banques")}
        />

        <HeaderItem
          title="Employés"
          icon={faPeopleGroup}
          isActive={router.pathname == "/employes"}
          clickHandle={() => router.push("/employes")}
        />

        <HeaderItem
          title="Ordre de Mission"
          icon={faFileLines}
          isActive={router.pathname == "/ordre-de-mission"}
          clickHandle={() => router.push("/ordre-de-mission")}
        />
      </div>
    </div>
  );
}

export default Header;
