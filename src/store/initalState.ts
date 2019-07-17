export interface AppState {
  isLoading: {
    [key: string]: boolean;
  };
  hasError: {
    [key: string]: boolean;
  };
  data: {
    [key: string]: Array<(string | number)[]>;
  };
}

export const initialState: AppState = {
  isLoading: {
    REPORTS: false,
    INITIATORS: false
  },
  hasError: {
    REPORTS: false,
    INITIATORS: false
  },
  data: {
    REPORTS: [],
    INITIATORS: []
  }
};
