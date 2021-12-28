export const collatedTasks = [
  { key: "INBOX", name: "Inbox" },
  { key: "TODAY", name: "Today" },
  { key: "NEXT_7", name: "Next 7 Days" },
];

const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);
