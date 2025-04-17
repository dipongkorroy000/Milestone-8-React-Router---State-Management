import "./App.css";
import ControlledField from "./component/ControlledField";
import HookForm from "./component/customHook/HookForm";
import FormAction from "./component/FormAction";
import SimpleForm from "./component/SimpleForm";
import UnControlledField from "./component/UnControlledField";
import FamilyTree from "./familyTreeCom/FamilyTree";
import ProductManage from "./productManageComponent/ProductManage";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      {/* <HookForm></HookForm> */}
      {/* <ProductManage></ProductManage> */}
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
