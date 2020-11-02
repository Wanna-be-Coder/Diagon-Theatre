import React from "react";
import CardItem from "../Card/CardItem";
import ToggleButtonComponent from "../ToggleButton/ToggleButtonComponent";

const SectionDirectory = ({ title, list1, list2, media_type, toggleName }) => {
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const cardStyle = {
    main: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "30px",
    },
    title: {
      fontSize: "28px",
      marginBottom: "25px",
    },
    card: {
      display: "flex",
      justifyContent: "space-between",
      overflowX: "scroll",
      overflowY: "hidden",
    },
  };
  return (
    <div style={cardStyle.main}>
      <div style={{ display: "flex" }}>
        <div style={cardStyle.title}>{title}</div>
        <ToggleButtonComponent
          alignment={alignment}
          handleAlignment={handleAlignment}
          toggleName={toggleName}
        />
      </div>
      <div style={cardStyle.card}>
        {alignment === "left"
          ? list1.map((list) => (
              <CardItem
                key={list.id}
                data={list}
                media_type_section={media_type}
              />
            ))
          : list2.map((list) => (
              <CardItem
                key={list.id}
                data={list}
                media_type_section={media_type}
              />
            ))}
      </div>
    </div>
  );
};

export default SectionDirectory;
