
import { FieldSettings } from "@syncfusion/ej2-react-dropdowns";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (<div>
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content={'setting'} position='Top'>
            <button><FieldSettings /></button>
            
          </TooltipComponent>
        </div>
    </div>
    </BrowserRouter>
  </div>)
}

export default App;
