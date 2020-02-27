export const ITEMS_COUNT = 25;

export const hello = () => {
  console.log('Hello works');
};



export const getFormValues = () => {
  const todoForm = document.querySelector('#todoForm');
  if (!todoForm) return {};

  const formValues = {};
  const controlNameList = ['title'];
  for (const controlName of controlNameList) {
    const controlSelector = `[name=${controlName}]`;
    const control = todoForm.querySelector(controlSelector);
    const controlValue = control ? control.value : control;

    formValues[controlName] = controlValue;
  }

  return formValues;
};

const todoFormUtils = {
  hello,
  getFormValues,
};
export default todoFormUtils;
