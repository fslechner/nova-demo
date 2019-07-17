import React, {
  createRef,
  PureComponent,
  HTMLAttributes,
  KeyboardEvent
} from "react";
import classNames from "classnames";
import dompurify from "dompurify";
import { Button } from "..";

const sanitizer = dompurify.sanitize;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Is loading data */
  isLoading?: boolean;
  /** ClickHandler for fetching data */
  fetchData: (term?: string) => void;
}

export class Search extends PureComponent<Props> {
  private searchInputRef = createRef<HTMLInputElement>();

  handleEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && !this.props.isLoading) {
      this.handleFetch();
    }
  };

  handleFetch = () => {
    const value =
      this.searchInputRef.current && this.searchInputRef.current.value
        ? this.searchInputRef.current.value
        : ""; // this is a quickfix to avoid null error in test
    this.props.fetchData(sanitizer(value));
  };

  render() {
    const { isLoading, className } = this.props;

    return (
      <div className={classNames(className, "search")} data-test="Search">
        <input
          aria-label="Searchfield for filtering food products"
          className="search__input"
          type="text"
          ref={this.searchInputRef}
          onKeyDown={this.handleEnterClick}
          placeholder="e.g. ice cream"
        />
        <Button
          aria-label="Searchbutton for filtering food products"
          className="search__button"
          iconName="search"
          iconSize="l"
          isLoading={isLoading}
          onClick={this.handleFetch}
          data-test="search-button"
        />
      </div>
    );
  }
}

export default Search;
