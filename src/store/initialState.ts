import { AppState } from "../typings";
import { hcGlobal } from "../setttings/charts/hcGlobal";
import { hcEnforcementReports } from "../setttings/charts/hcEnforcementReports";
import { hcEnforcementInitiators } from "../setttings/charts/hcEnforcementInitiators";

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
