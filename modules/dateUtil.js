/* ===============================================================*\
        Date function to process and update Current Date
  *\=============================================================== */

const updateDateTime = (element, DateTime) => {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit',
  };
  element.textContent = DateTime.now().toLocaleString(options, 'en-US');
  setInterval(() => {
    element.textContent = DateTime.now().toLocaleString(options, 'en-US');
  }, 1000);
};

export default updateDateTime;