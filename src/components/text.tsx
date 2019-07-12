import React, { FC } from "react";
import classNames from "classnames";
import dompurify from "dompurify";
import { Tag } from "./tag";
import { SharedProps } from "../typings";

const sanitizer = dompurify.sanitize;

export interface Props extends SharedProps {
  /** HTML-tag used around topic text**/
  topicTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Heading text between the your selected topicTag. Is no topic is set, a topicTag will also not set.**/
  topic?: string;
  /** Teaser text between strong tags **/
  teaser?: string;
  /** Paragraph text between p tags **/
  text?: string;
}

export const Text: FC<Props> = ({
  topicTag = "h1",
  topic,
  teaser,
  text,
  className
}) => (
  <div className={classNames("text", className)}>
    {topic && <Tag type={topicTag}>{topic}</Tag>}
    {teaser && (
      <strong dangerouslySetInnerHTML={{ __html: sanitizer(teaser) }} />
    )}
    {text && <p dangerouslySetInnerHTML={{ __html: sanitizer(text) }} />}
  </div>
);

export default Text;
