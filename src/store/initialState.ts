import { AppState } from "../typings";
import { hcGlobal } from "../charts/hcGlobal";
import { hcEnforcementReports } from "../charts/hcEnforcementReports";
import { hcEnforcementInitiators } from "../charts/hcEnforcementInitiators";

export const initialState: AppState = {
  reports: {
    chartOptions: { ...hcGlobal, ...hcEnforcementReports },
    isLoading: false,
    hasError: false
  },
  initiator: {
    chartOptions: { ...hcGlobal, ...hcEnforcementInitiators },
    isLoading: false,
    hasError: false
  }
};
