### Display fetching errors

#### With isLoading=false

```jsx
<div className="food">
  <div className="chart-wrapper">
    <Error isLoading={false} fetchData={() => null} />
  </div>
</div>
```

#### With isLoading=true

```jsx
<div className="chart-wrapper">
  <Error isLoading={true} fetchData={() => null} />
</div>
```
