import { AppState } from "../typings";
import { hcGlobal } from "../static/charts/hcGlobal";
import { hcEnforcementReports } from "../static/charts/hcEnforcementReports";
import { hcEnforcementInitiators } from "../static/charts/hcEnforcementInitiators";

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
