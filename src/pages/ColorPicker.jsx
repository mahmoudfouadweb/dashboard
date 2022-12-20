import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
    setCurrentColor(args.currentValue.hex);
  };

  const { setCurrentColor } = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title={"Color Picker"} category="App" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="pallete"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>

            <ColorPickerComponent
              id="inline-picker"
              mode="Palette"
              modeSwitcher={false}
              showButtons={false}
              change={change}
              inline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
