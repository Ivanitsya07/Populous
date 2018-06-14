export const INVOICE_UPDATE_FILTERS = 'INVOICE_UPDATE_FILTERS';
export const INVOICE_RESET_FILTERS = 'INVOICE_RESET_FILTERS';
export const INVOICE_SET_SALE_PRICE_LIMITS = 'INVOICE_SET_SALE_PRICE_LIMITS';
export const INVOICE_UPDATE_FILTERS_VISIBILITY = 'INVOICE_UPDATE_FILTERS_VISIBILITY';

const initialFilters = {
  statuses: [],
  dueDate: {startDate: null, endDate: null},
  currency: 'all',
  salePrice: {min: null, max: null},
  overdue: false,
  fullText: '',
  sortBy: 'updatedAtDesc',
  perPage: 6,
};

const initialState = {
  filters: {...initialFilters},
  showFilters: false,
  salePriceLimits:{min: null, max: null,},
};

const InvoicesList = (state = {...initialState}, action) => {
  const {showFilters, filters} = state;
  const {type, payload} = action;

  switch (type) {
    case INVOICE_RESET_FILTERS:
      return {
        ...state,
        filters: {
          ...initialFilters,
          sortBy: state.filters.sortBy,
          perPage: state.filters.perPage,
          salePrice: {...state.salePriceLimits},
        }
      };
    case INVOICE_SET_SALE_PRICE_LIMITS:
      return {...state, salePriceLimits: payload.salePriceLimits};
    case INVOICE_UPDATE_FILTERS_VISIBILITY:
      return {...state, showFilters: !showFilters};
    case INVOICE_UPDATE_FILTERS:
      if (payload.key && typeof payload.value !== 'undefined') {
        return {...state, filters: {...filters, [payload.key]: payload.value}};
      }

      if (payload.filters) {
        return {...state, filters: payload.filters};
      }

    default:
      return state;
  }
};


export default InvoicesList;