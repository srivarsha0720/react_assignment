import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  "https://via.placeholder.com/300/ff0000",
  "https://via.placeholder.com/300/00ff00",
  "https://via.placeholder.com/300/0000ff",
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <img src={images[index]} className="mx-auto" />
        <div className="space-x-4">
          <Button onClick={() => setIndex((index - 1 + images.length) % images.length)}>
            Previous
          </Button>
          <Button onClick={() => setIndex((index + 1) % images.length)}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}