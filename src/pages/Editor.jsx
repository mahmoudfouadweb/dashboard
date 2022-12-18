import { Inject } from "@syncfusion/ej2-react-charts/src";
import { RichTextEditorComponent } from "@syncfusion/ej2-react-richtexteditor";
import {
  HtmlEditor,
  Image,
  Link,
  QuickToolbar,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor/src";
import React from "react";
import { Header } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title={"Editor"} category="App" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
