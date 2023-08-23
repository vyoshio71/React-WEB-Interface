export const saveQueroLerBooks = (ids) => {
  localStorage.setItem("queroLerBooks", JSON.stringify(ids));
};

export const getQueroLerBooks = () => {
  const savedQueroLerBooks = localStorage.getItem("queroLerBooks");
  return savedQueroLerBooks ? JSON.parse(savedQueroLerBooks) : [];
};

export const saveJaLiBooks = (ids) => {
  localStorage.setItem("jaLiBooks", JSON.stringify(ids));
};

export const getJaLiBooks = () => {
  const savedJaLiBooks = localStorage.getItem("jaLiBooks");
  return savedJaLiBooks ? JSON.parse(savedJaLiBooks) : [];
};
