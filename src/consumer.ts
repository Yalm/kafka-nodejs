import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});
const consumer = kafka.consumer({ groupId: "my-group" });

const main = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic" });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
