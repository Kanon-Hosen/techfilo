import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button >Hello form TechFilo</Button>
    </Html>
  );
}

export default Email;
