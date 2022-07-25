/** @jsx h */
import { h } from "preact";

export default function Home() {
  return (
    <form method="POST" action="api/store_image" encType="multipart/form-data">
      <label htmlFor="image">
        image
      </label>
      <input
        accept="image/png, image/jpeg"
        type="file"
        name="image"
        id="image"
      />
      <input type="submit" value="upload file" />
    </form>
  );
}
