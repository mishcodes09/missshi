import styles from "./InterviewMockup.module.css";

export default function InterviewMockup({ messages, participant }) {
  if (!messages?.length) return null;

  const contactSpeaker = messages.find((m) => m.speaker !== "researcher")?.speaker;
  const contactName =
    participant || (contactSpeaker ? contactSpeaker[0].toUpperCase() + contactSpeaker.slice(1) : "Participant");
  const initial = contactName.charAt(0).toUpperCase();
  const lastMessage = messages[messages.length - 1];

  return (
    <figure className={styles.mockup} aria-label="Example usability interview conversation">
      <div className={styles.header}>
        <span className={styles.avatar} aria-hidden="true">{initial}</span>
        <div className={styles.headerText}>
          <span className={styles.contactName}>{contactName}</span>
          <span className={styles.contactSubtitle}>Usability Interview</span>
        </div>
      </div>

      <div className={styles.messages}>
        {messages.map((message, index) => {
          const isQuestion = message.speaker === "researcher";
          const isLastInGroup = messages[index + 1]?.speaker !== message.speaker;
          return (
            <div
              key={`${message.speaker}-${index}`}
              className={`${styles.messageRow} ${isQuestion ? styles.question : styles.reply} ${
                isLastInGroup ? styles.lastInGroup : ""
              }`}
            >
              <p className={styles.bubble}>{message.text}</p>
            </div>
          );
        })}
        {lastMessage.speaker === "researcher" && <span className={styles.delivered}>Delivered</span>}
      </div>

      <figcaption className={styles.caption}>Example commuter interview</figcaption>
    </figure>
  );
}
