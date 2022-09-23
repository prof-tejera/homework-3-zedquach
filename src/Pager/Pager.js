import Button from "components/Button/Button";
import "./Pager.css";
import { useState } from "react";

const Pager = (props) => {
  const [activePage, setActivePage] = useState(props.minPage);
  const itemsOnPager = props.itemShow + 4;
  const incrPage = () => {
    if (props.maxPage !== activePage) {
      setActivePage(activePage + 1);
    }
  };

  const descPage = () => {
    if (props.minPage !== activePage) {
      setActivePage(activePage - 1);
    }
  };

  const generateRange = (min, max) => {
    return Array.from({ length: max - min + 1 }, (_, i) => i + min);
  };

  const PageButtons = () => {
    if (itemsOnPager > props.maxPage - props.minPage + 1) {
      return generateRange(props.minPage, props.maxPage).map((page) => {
        if (page >= props.minPage && page <= props.maxPage) {
          return (
            <Button
              key={page}
              text={page}
              className={`page-button page-button-hover ${
                page === activePage && "page-button-active"
              }`}
              onClick={() => setActivePage(page)}
            />
          );
        }
        return <></>;
      });
    }
    let pages = generateRange(
      activePage - Math.round(props.itemShow / 2),
      activePage + Math.round(props.itemShow / 2)
    );

    const shouldShowLeftDot = activePage > props.minPage + props.itemShow - 1;
    const shouldShowRightDot = activePage < props.maxPage - props.itemShow;

    if (shouldShowLeftDot && !shouldShowRightDot) {
      pages = [
        props.minPage,
        ...generateRange(
          props.maxPage - props.itemShow - Math.round(props.itemShow / 2),
          props.maxPage
        ),
      ];
    } else if (!shouldShowLeftDot && shouldShowRightDot) {
      pages = [
        ...generateRange(
          props.minPage,
          props.minPage + props.itemShow + Math.round(props.itemShow / 2)
        ),
        props.maxPage,
      ];
    } else if (shouldShowLeftDot && shouldShowRightDot) {
      pages.unshift(props.minPage);
      pages.push(props.maxPage);
    }
    const buttons = pages.map((page) => {
      if (page >= props.minPage && page <= props.maxPage) {
        return (
          <Button
            key={page}
            text={page}
            className={`page-button page-button-hover ${
              page === activePage && "page-button-active"
            }`}
            onClick={() => setActivePage(page)}
          />
        );
      }
      return <></>;
    });

    if (shouldShowLeftDot) {
      buttons.splice(
        1,
        0,
        <Button key="left-dot" text="..." className="page-button" />
      );
    }

    if (shouldShowRightDot) {
      buttons.splice(
        buttons.length - 1,
        0,
        <Button key="right-dot" text="..." className="page-button" />
      );
    }

    return buttons;
  };

  return (
    <div className="wrapper">
      <div className="pages">
        <Button
          text="<"
          className="page-button page-side-button"
          onClick={descPage}
        />
        <PageButtons />
        <Button
          text=">"
          className="page-button page-side-button"
          onClick={incrPage}
        />
      </div>
    </div>
  );
};

export default Pager;
