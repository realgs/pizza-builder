import state from '../state';
import elements from './elements';

export default () => {
  if (state.size
    && state.form.name
    && Object.keys(state.summary.items).length > 0
    && state.form.address
    && state.form.phone
    && state.form.email) {
    elements.orderButton.disabled = false;
  } else {
    elements.orderButton.disabled = true;
  }
};
