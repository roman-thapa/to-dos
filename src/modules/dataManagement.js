const DataManagement = {
  setData(formData) {
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log((formData))
  }
};

export default DataManagement;