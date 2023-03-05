import { useEffect, useState } from "react";

export default function TabContent({ tab }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return setFade("");
  }, [tab]);

  return (
    <div className={`"tab-container start ${fade}`}>
      {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
    </div>
  );
}
