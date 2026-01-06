import FeedbackForm from "./components/FeedbackForm";
import ImageSlideshow from "./components/ImageSlideshow";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  );
}