import { useEffect, useState } from "react";

const useTitle = (titleText) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = titleText + " - Job Matchers ";
    setTitle(titleText);
  }, [titleText]);
  return [title];
};

export default useTitle;
