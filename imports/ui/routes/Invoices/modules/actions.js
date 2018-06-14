import {
  INVOICE_RESET_FILTERS, INVOICE_SET_SALE_PRICE_LIMITS, INVOICE_UPDATE_FILTERS,
  INVOICE_UPDATE_FILTERS_VISIBILITY
} from "./index";
import store from "../../../../store/index";

export function updateFiltersVisibility() {
  return {type: INVOICE_UPDATE_FILTERS_VISIBILITY};
}

export function updateFiltersStatuses(status) {
  return (dispatch, getState) => {

    const {InvoicesList: {filters, filters: {statuses}}} = getState();
    const newStatuses = [...statuses];

    if (newStatuses.includes(status)) {
      newStatuses.splice(newStatuses.indexOf(status), 1);
    } else {
      newStatuses.push(status);
    }

    dispatch({type: INVOICE_UPDATE_FILTERS, payload: {filters: {...filters, statuses: newStatuses,}}});
  }
}

export function updateFiltersCurrency(event) {
  const {nativeEvent: {target: {value}}} = event;
  return {type: INVOICE_UPDATE_FILTERS, payload: {key: 'currency', value,}};
}

export function updateFiltersSalePrice(salePrice) {
  return {type: INVOICE_UPDATE_FILTERS, payload: {key: 'salePrice', value: salePrice,}};
}

export function updateDueDates(dueDates) {
  return {type: INVOICE_UPDATE_FILTERS, payload: {key: 'dueDate', value: dueDates,}};
}

export function updateFullTextSearch(value) {
  return {type: INVOICE_UPDATE_FILTERS, payload: {key: 'fullText', value: value,}};
}

export function updateSortBy(value) {
  return {type: INVOICE_UPDATE_FILTERS, payload: {key: 'sortBy', value: value,}};
}

export function updatePerPage(value) {
  return {type: INVOICE_UPDATE_FILTERS, payload: {key: 'perPage', value: value,}};
}

export function setSalePriceLimits(salePricesLimitsNew) {

  return (dispatch, getState) => {

    if(salePricesLimitsNew.min === salePricesLimitsNew.max){
      salePricesLimitsNew.min = 0;
    }

    const {InvoicesList:{filters: {salePrice}, salePriceLimits}} = getState();
    const {min, max} = salePricesLimitsNew;

    if (salePriceLimits.max !== max || salePriceLimits.min !== min) {
      dispatch({type: INVOICE_SET_SALE_PRICE_LIMITS, payload: {salePriceLimits: salePricesLimitsNew}});
    }

    if (salePrice.min === null || salePrice.min === null || salePrice.min < min || salePrice.max > max) {

      let newSalePrices = {...salePrice};

      if(newSalePrices.min === null || newSalePrices.min === null){
        newSalePrices = {...salePricesLimitsNew}
      }else if(salePrice.min < min){
        newSalePrices.min = min;
      }else if(salePrice.max > max){
        newSalePrices.max = max;
      }

      dispatch(updateFiltersSalePrice(newSalePrices));
    }

  }
}

export function resetFilters() {
  return {type: INVOICE_RESET_FILTERS};
}

export default {
  updateFiltersVisibility,
  updateFiltersStatuses,
  updateFiltersCurrency,
  updateFiltersSalePrice,
  updateDueDates,
  updateFullTextSearch,
  updateSortBy,
  updatePerPage,
  resetFilters
};