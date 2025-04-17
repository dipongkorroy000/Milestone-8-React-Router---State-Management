import React, { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "../FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Aunt</h3>
      <button onClick={() => setMoney(money + 5000)}>Add 5000 tk</button>
      <section className="flex">
        <Cousin asset={asset} name="Toma"></Cousin>
        <Cousin name="Jojo"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
