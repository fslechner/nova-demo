### A Button-Component

#### Button with only text

```jsx
<Button style={{ background: "pink" }} className="error__button">
  Button text
</Button>
```

#### Button with only icon in size xl

```jsx
<Button className="search__button" iconName="search" iconSize="xl" />
```

#### Button disabled with only icon in size xl

```jsx
<Button
  className="search__button"
  iconName="search"
  iconSize="xl"
  isLoading={true}
/>
```

#### Button with text left and icon right

```jsx
<Button
  style={{ background: "pink" }}
  className="error__button"
  iconName="refresh"
  iconAlign="after"
>
  Button Text
</Button>
```

#### Button with text right and icon left

```jsx
<Button
  style={{ background: "pink" }}
  className="error__button"
  iconName="refresh"
  iconAlign="before"
>
  Button Text
</Button>
```

#### Button disabled while loading

```jsx
<Button
  style={{ background: "pink" }}
  className="error__button"
  iconName="refresh"
  iconAlign="after"
  isLoading={true}
>
  Button Text
</Button>
```

#### Button with spinning icon while loading

```jsx
<Button
  style={{ background: "pink" }}
  className="error__button"
  iconName="refresh"
  iconAlign="after"
  isLoading={true}
  isLoadingSpin={true}
>
  Button Text
</Button>
```
