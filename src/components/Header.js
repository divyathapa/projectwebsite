import React from "react";

const Header = ({ birthdays }) => {
  return (
    <div>
      {birthdays.map((birthday) => (
        <h3 key={birthday.id}>
          {birthday.months}-{birthday.name}
        </h3>
      ))}
    </div>
  );
};
export default Header;
