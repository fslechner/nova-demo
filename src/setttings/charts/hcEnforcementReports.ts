import moment from "moment";

export const hcEnforcementReports: Highcharts.Options = {
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
};
