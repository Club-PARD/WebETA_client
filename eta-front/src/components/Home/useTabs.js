import { useState } from "react";
import BeforeHome from "./BeforeHome";
import AfterHome from "./AfterHome";

let currentUser = null;

const content = [
  {
    tab: "홈",
    content: currentUser !== null ? <BeforeHome /> : <AfterHome />,
  },
  {
    tab: "커뮤니티",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

export { content, useTabs };
