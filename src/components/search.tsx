import React from "react";
import classNames from "classnames";
import dompurify from "dompurify";
import { SharedProps } from "../typings";

const sanitizer = dompurify.sanitize;

export interface Props extends SharedProps {
  /** Is loading data */
  isLoading: boolean;
  /** ClickHandler for fetching data */
  fetchData: (term: string) => void;
}

export class Search extends React.Component<Props> {
  private searchInputRef = React.createRef<HTMLInputElement>();

  handleSubmitClick = () => {
    this.props.fetchData(sanitizer(this.searchInputRef.current!.value));
  };

  handleEnterClick = (e: any) => {
    if (e.keyCode === 13 && !this.props.isLoading) {
      this.props.fetchData(sanitizer(this.searchInputRef.current!.value));
    }
  };

  render() {
    const { isLoading, className } = this.props;

    return (
      <div className={classNames(className, "search")}>
        <input
          className="search__input"
          type="text"
          aria-label="Searchfield for fiiltering food products"
          ref={this.searchInputRef}
          onKeyDown={this.handleEnterClick}
          placeholder="e.g. ice cream"
        />
        <button
          className="search__button"
          aria-label="Searchbutton for filtering food products"
          onClick={this.handleSubmitClick}
          disabled={isLoading}
        >
          <span>&#9906;</span>
        </button>
      </div>
    );
  }
}

export default Search;
