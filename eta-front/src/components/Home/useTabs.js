import { useState } from "react";
import BeforeHome from "./BeforeHome";
import AfterHome from "./AfterHome";
import BeforeCommunity from "./BeforeCommunity";
import AfterCommunity from "./AfterCommunity";

let currentUser = null;

const content = [
  {
    tab: "홈",
    content: currentUser !== null ? <BeforeHome /> : <AfterHome />,
  },
  {
    tab: "커뮤니티",
    content: currentUser !== null ? <BeforeCommunity /> : <AfterCommunity />,
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
