import { hcGlobal } from "../settings/charts/hcGlobal";
import { hcEnforcementReports } from "../settings/charts/hcEnforcementReports";
import { hcEnforcementInitiators } from "../settings/charts/hcEnforcementInitiators";

export interface AppState {
  [location: string]: {
    isLoading: boolean;
    hasError: boolean;
    chartOptions: Highcharts.Options;
  };
}

export const initialState: AppState = {
  reports: {
    chartOptions: { ...hcGlobal, ...hcEnforcementReports },
    isLoading: false,
    hasError: false
  },
  initiators: {
    chartOptions: { ...hcGlobal, ...hcEnforcementInitiators },
    isLoading: false,
    hasError: false
  }
};
