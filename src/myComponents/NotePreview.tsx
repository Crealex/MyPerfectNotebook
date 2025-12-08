import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export function NotePreview() {
  return (
    <Card>
      <CardTitle>Ma note</CardTitle>
      <CardContent>Je suis une note</CardContent>
      <CardFooter>
        <CardAction>Plus</CardAction>
        <CardAction>Modifier</CardAction>
        <CardAction>Suprrimer</CardAction>
      </CardFooter>
    </Card>
  );
}
