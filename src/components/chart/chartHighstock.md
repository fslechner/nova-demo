#### Chart without data

```jsx
import moment from "moment";

const testProps = {
  location: "reports",
  fetchHandler: () => null,
  chartOptions: {
    chart: {
      height: 350,
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
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function() {
          return moment(this.value).format("MMM YYYY");
        }
      },
      minTickInterval: moment.duration(1, "month").asMilliseconds()
    },
    series: [{ type: "line", data: [null] }]
  }
};

<ChartHighstock {...testProps} />;
```

#### Chart with error

```jsx
const testProps = {
  location: "initiators",
  hasError: true,
  fetchHandler: () => null,
  chartOptions: {
    series: [{ type: "line", data: [0, 0] }]
  }
};

<ChartHighstock {...testProps} />;
```

#### Chart while loading

```jsx
const testProps = {
  location: "initiators",
  isLoading: true,
  fetchHandler: () => null,
  chartOptions: {}
};

<ChartHighstock {...testProps} />;
```
