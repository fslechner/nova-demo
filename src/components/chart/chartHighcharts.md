### A Highcharts-Component

#### Chart without error

```jsx
const testProps = {
  location: "initiators",
  fetchHandler: () => null,
  chartOptions: {
    chart: {
      height: 350,
      width: 350,
      style: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen"
      }
    },
    credits: {
      enabled: false
    },
    loading: {
      hideDuration: 500,
      showDuration: 300
    },
    title: {
      text: ""
    },
    series: [
      {
        type: "pie",
        data: [
          ["Apples", 29.9, false],
          ["Pears", 71.5, false],
          ["Oranges", 106.4, false],
          ["Plums", 129.2, false],
          ["Bananas", 144.0, false],
          ["Peaches", 176.0, false],
          ["Prunes", 135.6, true, true],
          ["Avocados", 148.5, false]
        ]
      }
    ]
  }
};

<ChartHighcharts {...testProps} />;
```

#### Chart with error

```jsx
const testProps = {
  location: "initiators",
  hasError: true,
  fetchHandler: () => null,
  chartOptions: {}
};

<ChartHighcharts {...testProps} />;
```

#### Chart while loading

```jsx
const testProps = {
  location: "initiators",
  isLoading: true,
  fetchHandler: () => null,
  chartOptions: {}
};

<ChartHighcharts {...testProps} />;
```
