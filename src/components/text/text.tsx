import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import dompurify from "dompurify";
import { Tag, Collapse, Button } from "..";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** This component does not support custom children. */
  children?: never;
  /** HTML-tag used around topic text**/
  topicTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Heading text between the your selected topicTag. Is no topic is set, a topicTag will also not set.**/
  topic?: string;
  /** Teaser text between strong tags **/
  teaser?: string;
  /** Paragraph text between p tags **/
  text?: string;
  /** Text shown within collapse **/
  textHidden?: string;
}

export const Text: FC<Props> = ({
  topicTag = "h1",
  topic,
  teaser,
  text,
  textHidden,
  className,
  ...rest
}) => (
  <div className={classNames("text", className)} data-test="Text" {...rest}>
    {topic && <Tag type={topicTag}>{topic}</Tag>}
    {teaser && <strong dangerouslySetInnerHTML={{ __html: teaser }} />}
    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    {textHidden && (
      <Collapse
        className="text-center"
        text="read more" // TODO: Should also come from parent. Use this as default!
        textOpen="read less" // TODO: Should also come from parent Use this as default!
        textInline={true}
        closeItem={<Button iconName="close" iconSize="l" />}
      >
        <p dangerouslySetInnerHTML={{ __html: textHidden }} />
      </Collapse>
    )}
  </div>
);

export default Text;
