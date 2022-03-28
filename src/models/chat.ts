// Import the sequelize library
import Sequelize from "sequelize";

// Import the sequelize instance which has been configured for SQLite
import sequelize from "./sequelize";

// Initialize chat table with a required (not null)
// text field "message"
const Chat = sequelize.define(
  "chats",
  {
    message: {
      // Message field is a string
      type: Sequelize.TEXT,
      // Disallows creating chat entries without a message
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Chat;
