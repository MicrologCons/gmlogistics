import React, { Component } from "react";
import Link from "next/link";

class PageBanner extends Component {
  render() {
    let {
      pageTitle,
      homePageUrl,
      homePageText,
      activePageText,
      bgImgClass,
      detailPageText,
      backUrl,
      detailPage,
    } = this.props;

    return (
      <div className={`page-title-area ${bgImgClass}`}>
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              {detailPage ? (
                <li>{homePageText}</li>
              ) : (
                <li>
                  <Link href={homePageUrl}>
                    <a>{homePageText}</a>
                  </Link>
                </li>
              )}

              {detailPage ? (
                <>
                  <li>
                    <Link href={backUrl}>
                      <a>{activePageText}</a>
                    </Link>
                  </li>
                  <li>{detailPageText}</li>
                </>
              ) : (
                <li>{activePageText}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default PageBanner;
