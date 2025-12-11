const API_BASE = window.location.origin;

export const API_URL = `${API_BASE}/api/tasks`;


export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTask = async (title) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
};
