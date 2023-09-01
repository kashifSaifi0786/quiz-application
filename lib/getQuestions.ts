export const getQuestions = async () => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=15", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (err) {
    return [];
  }
};
