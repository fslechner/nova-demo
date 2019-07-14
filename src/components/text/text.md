### Set text blocks with optional teaser text and selectable topic tag.

#### Text with TopicTag h1

```jsx
<Text
  topicTag="h1"
  topic="Hello text component."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
/>
```

#### Text with topicTag h6

```jsx
<Text
  topicTag="h6"
  topic="Hello text component."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
/>
```

#### Text with topicTag h1 and teaser

```jsx
<Text
  topicTag="h1"
  topic="Hello text component."
  teaser="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
/>
```

#### Text with only topic

```jsx
<Text topicTag="h1" topic="Hello text component." />
```

#### Text with only text

```jsx
<Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
```

#### Text with only teaser

```jsx
<Text teaser="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
```
