### with default topic and text

```jsx
<Text
  topic="Hello text component."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
/>
```

### with default topic and text in columns

```jsx
<Text
  topic="Hello text component."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  textColumns="two-columns"
/>
```

### with topic, teaser and text

```jsx
<Text
  topicTag="h1"
  topic="Hello text component."
  teaser="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
/>
```

### Text with only topic

```jsx
<Text topicTag="h1" topic="Hello text component." />
```

### Text with only text

```jsx
<Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
```

### Text with only teaser

```jsx
<Text teaser="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
```

### Text with topicTag h1, teaser and (default) hidden text via textHidden prop

```jsx
<Text
  topicTag="h1"
  topic="Hello text component."
  teaser="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  textHidden="<p>Our have night fifth form saw evening whales, green, own god lesser beast was cattle let above itself kind winged saying light fruit Very third. Gathered whose they&#39;re fly. Called moveth was morning. Replenish image i which fowl shall. Hath.</p><p>Our female seed one made fish set place without had air forth second there stars gathering lights i shall whose kind evening male female sixth blessed she&#39;d.</p><p>Created fifth fly said they&#39;re. They&#39;re fruit seasons him seasons there under shall. Midst morning us. Herb hath fly fifth Very female you&#39;re wherein blessed have. Life saw fowl creeping can&#39;t for firmament.</p>"
/>
```

### Text with topicTag h1, teaser and (configurabe) hidden text via composition

```jsx
import { Collapse } from "../collapse/collapse";
import { Button } from "../button/button";

<Text
  topicTag="h1"
  topic="Hello text component."
  teaser="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
>
  <Collapse
    className="text-center"
    text="expand"
    textOpen="condense"
    textInline={true}
    closeItem={<Button iconName="close" iconSize="m" />}
    closePosition="bottom-right"
  >
    <p>
      Our have night fifth form saw evening whales, green, own god lesser beast
      was cattle let above itself kind winged saying light fruit Very third.
      Gathered whose they&#39;re fly. Called moveth was morning. Replenish image
      i which fowl shall. Hath.
    </p>
    <p>
      Our female seed one made fish set place without had air forth second there
      stars gathering lights i shall whose kind evening male female sixth
      blessed she&#39;d.
    </p>
    <p>
      Created fifth fly said they&#39;re. They&#39;re fruit seasons him seasons
      there under shall. Midst morning us. Herb hath fly fifth Very female
      you&#39;re wherein blessed have. Life saw fowl creeping can&#39;t for
      firmament.
    </p>
  </Collapse>
</Text>;
```
