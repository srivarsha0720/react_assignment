import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="New task" />
          <Button onClick={() => {
            setTodos([...todos, { text: task, done: false }]);
            setTask("");
          }}>
            Add
          </Button>
        </div>

        {todos.map((t, i) => (
          <div key={i} className="flex gap-2 items-center">
            <Checkbox
              checked={t.done}
              onCheckedChange={() => {
                const copy = [...todos];
                copy[i].done = !copy[i].done;
                setTodos(copy);
              }}
            />
            <span className={t.done ? "line-through" : ""}>{t.text}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}