const getStoredBook = () => {
  const storedBook = localStorage.getItem("readList");
  if (storedBook) {
    const storedBooKData = JSON.parse(storedBook);
    return storedBooKData;
  } else {
    return [];
  }
};

const addToLocalstorage = (id) => {
  const storedBooKData = getStoredBook();
  if (storedBooKData.includes(id)) {
    alert("this id already exits");
  } else {
    storedBooKData.push(id);
    const data = JSON.stringify(storedBooKData);
    localStorage.setItem("readList", data);
  }
};
export { addToLocalstorage, getStoredBook };
