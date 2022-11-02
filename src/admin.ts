import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});
const admin = kafka.admin();

const main = async () => {
  await admin.connect();
  const topics = await admin.listTopics();
  console.log(topics);
  await admin.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
