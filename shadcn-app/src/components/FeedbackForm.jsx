import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {
  const [data, setData] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Textarea
          placeholder="Feedback"
          value={data.feedback}
          onChange={(e) => setData({ ...data, feedback: e.target.value })}
        />
        <Button onClick={() => setSubmitted(data)}>Submit</Button>

        {submitted && (
          <div className="pt-4">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}