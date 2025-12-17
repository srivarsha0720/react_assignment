import MessageCard from "./Messagecard";

function App() {
  return (
    <div>
      <MessageCard
        title="Welcome"
        message="This is the first message card"
      />

      <MessageCard
        title="React Props"
        message="Props help pass data to components"
      />

      <MessageCard
        title="Reusable Component"
        message="Same component used multiple times"
      />
    </div>
  );
}

export default App;
