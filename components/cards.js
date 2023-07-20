import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardMd(props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.children}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}

export function CardLg(props) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{props.desc}</CardDescription>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{props.children}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
