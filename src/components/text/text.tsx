import React, { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { Tag, Collapse, Button } from "..";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | ReactNode[] | string;
  /** HTML-tag used around topic text**/
  topicTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Heading text between the your selected topicTag. Is no topic is set, a topicTag will also not set.**/
  topic?: string;
  /** Teaser text between strong tags */
  teaser?: string;
  /** Paragraph text between p tags */
  text?: string;
  /** Wether the text should appear in colums or not */
  textColumns?: "two-columns";
  /** Text shown within collapse */
  textHidden?: string;
}

export const Text: FC<Props> = ({
  topicTag = "h1",
  topic,
  teaser,
  text,
  textColumns,
  textHidden,
  className,
  children,
  ...rest
}) => {
  const rootClasses = classNames("text", className);
  const textClasses = classNames({
    [`text--${textColumns}`]: !!textColumns
  });

  return (
    <div className={rootClasses} {...rest}>
      {topic && <Tag type={topicTag}>{topic}</Tag>}
      {teaser && <strong dangerouslySetInnerHTML={{ __html: teaser }} />}
      {text && (
        <p className={textClasses} dangerouslySetInnerHTML={{ __html: text }} />
      )}
      {textHidden && (
        <Collapse
          className="text-center"
          text="read more"
          textOpen="read less"
          textInline={true}
          closeItem={
            <Button iconName="close" iconSize="m" iconAlign="after">
              read less
            </Button>
          }
        >
          <p
            className={textClasses}
            dangerouslySetInnerHTML={{ __html: textHidden }}
          />
        </Collapse>
      )}

      {children}
    </div>
  );
};

export default Text;
