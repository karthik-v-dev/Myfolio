import React, { useState } from "react";
import styled from "styled-components";
import CheckboxToggle from "./ckeckbox";

const ColorBox = styled.div`
  background-color: ${({ currentColor }) => currentColor};
  margin: 0 10px 1px;
`;

const RangeInput = ({ label, value, max = 100, onChange }) => {
  return (
    <div>
      {label}{" "}
      <input
        type="range"
        value={value}
        min={0}
        max={max}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

const Colorpicker=()=>{
  const [hue, setHue] = useState(210);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);

  const currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return (
<div className="checkbx" style={{ paddingLeft: "18%", marginBottom: "10px",paddingTop:'3px' }}>
    <CheckboxToggle currentColor={currentColor}/>
      <ColorBox currentColor={currentColor} />

      <RangeInput label="Hue" value={hue} onChange={setHue} max={360}className="mt-0"/>
      <RangeInput
        label="Saturation"
        value={saturation}
        onChange={setSaturation}
      />
      <RangeInput
        label="Brightness"
        value={lightness}
        onChange={setLightness}
      />
    </div>
  );
}
export default Colorpicker;