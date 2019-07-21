### default

```jsx
<Collapse text="Collapse Label">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>
```

### default expanded

```jsx
<Collapse text="Collapse Label" isOpen={true}>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>
```

### swiching label text

```jsx
<Collapse text="Collapse Label closed" textOpen="Collapse Label open">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>
```

### textInline

```jsx
<Collapse text="Collapse Label" textInline={true}>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>
```

### without icon animation

```jsx
<Collapse text="Collapse Label" iconRotateAnimated={false}>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>
```

### bigger icon size and other icon

```jsx
<Collapse
  text="Collapse Label"
  iconName="close"
  iconSize="xl"
  iconRotateClosed="45"
  iconRotateOpen="180"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>
```

### width bottom-center positioned close icon button within collapsed content

```jsx
import { Button } from "../button/button";

<Collapse
  text="Collapse Label"
  closeItem={<Button iconName="close" iconSize="l" />}
  closePosition="bottom-center"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>;
```

### width bottom-center positioned close text with icon button within collapsed content

```jsx
import { Button } from "../button/button";

<Collapse
  text="Collapse Label"
  closeItem={
    <Button iconName="close" iconSize="m" iconAlign="after">
      close
    </Button>
  }
  closePosition="bottom-center"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Collapse>;
```

### textInline inside text

```jsx
<div>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  <Collapse text="Collapse Label" textInline={true}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </Collapse>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
</div>
```
