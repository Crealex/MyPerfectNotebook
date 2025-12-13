import { Card } from "@/components/ui/card";

type Props = {
    delStatus: boolean;
    newStatus: boolean;
    editStatus: boolean;
};

export function DisplayStatus({ delStatus, newStatus, editStatus }: Props) {
    if (delStatus) {
        return (
            <Card className="bg-secondary text-center my-5 mx-auto w-3/4">
                <p>Note supprimé!</p>
            </Card>
        );
    } else if (newStatus) {
        return (
            <Card className="bg-secondary text-center my-5 mx-auto w-3/4">
                <p>Nouvelle note crée!</p>
            </Card>
        );
    } else if (editStatus) {
        return (
            <Card className="bg-secondary text-center my-5 mx-auto w-3/4">
                <p>Note éditée!</p>
            </Card>
        );
    }
}
