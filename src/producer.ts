import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["0.0.0.0:9092"],
});
const producer = kafka.producer();

const main = async () => {
  await producer.connect();
  const response = await producer.send({
    topic: "test-topic",
    messages: [{ value: "Hello KafkaJS user!" }],
  });
  console.log(response);
  await producer.disconnect();
};

main().then(() => {
  process.exit(0);
});
