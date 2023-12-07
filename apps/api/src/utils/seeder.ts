import RoomModel from "@/models/room.model";
import TableModel from "@/models/table.model";

const getRandomCapacity = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Function to seed the database
const seeder = async () => {
  try {
    // Check if there is existing data
    const existingRooms = await RoomModel.countDocuments();

    if (existingRooms === 0) {
      // Generate sample data for rooms with dynamic names
      const roomData = Array.from({ length: 4 }, (_, index) => ({
        name: `Room ${index + 1}`,
        description: `Description for Room ${index + 1}`,
        imageUrl: `/api/images/room-${index + 1}.jpg`,
      }));

      // Seed the database with new room data
      const rooms = await RoomModel.create(roomData);
      console.log("Rooms seeded successfully:", rooms);

      // Generate sample data for tables with random capacity
      const tableData = rooms.flatMap((room) =>
        Array.from({ length: 6 }, (_, index) => ({
          room: room._id,
          name: `Table ${index + 1}`,
          capacity: getRandomCapacity(2, 12),
          description: `Description for Table ${index + 1} in ${room.name}`,
          status: "available",
        })),
      );

      // Seed the database with new table data
      const tables = await TableModel.create(tableData);
      console.log("Tables seeded successfully:", tables);
    } else {
      console.log("Database already contains data. No seeding needed.");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

export default seeder;
